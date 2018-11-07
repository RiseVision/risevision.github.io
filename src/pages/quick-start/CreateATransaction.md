# Create a Transaction

Transactions are the heart and soul of functionality on the blockchain. We can
create multiple different transaction types (see [link
href="pages/protocol/Transactions"]Transactions[/link] for a complete list of
transaction types) but in this example we will simply create a transaction to
send 1 RISE from our wallet to another account `12345678901234567R`.

## Requirements

To create a transaction we will need a wallet (if you haven't already done so
you can generate a wallet by following the steps in [link
href="pages/quick-start/CreateAnAccount"]Create an Account[/link]). In addition
we will need the following libraries.

* `dpos-offline`: to create and sign the transaction
* `risejs`: to send the transaction to a RISE node

```bash
npm install dpos-offline risejs
```

Again next steps will be all be in the node terminal although the libraries
also function in the browser.

## Creating a Send Transaction

The `dpos-offline` library gives us access to an easy to use API for creating
and signing different kinds of transactions. To get started, we have to include
the `dpos-offline` library as we have before.

```javascript
var dpos = require('dpos-offline').Rise
```

All of our basic Transaction related functions are available under `dpos.txs`.
For creating a transaction we will use the `createAndSign` function. An example
of our [link href="pages/protocol/Transactions!send-transaction"]Send
Transaction[/link] is as follows. We will be using the `mnemonic` we created
from [link href="pages/quick-start/CreateAnAccount"]Creating an Account[/link] as
our secret.

```javascript
var sendTx = dpos.txs.createAndSign({
    {
        kind: 'send',
        amount: 100000000, // Satoshi
        recipient: '12345678901234567R'
    },
    mnemonic
})
```

If we inspect our `sendTx` object, we will see a Transaction object already
ready to be broadcast to the network.

```javascript
{
  amount: 100000000,
  asset: null,
  fee: 10000000,
  id: '2530894140975084782',
  recipientId: '12345678901234567R',
  senderId: '35285700575243917R',
  senderPublicKey:
   'a8d2bdae2d911333fd83dbd6959026977fe7a5ddcdf85893d5faf517453b9000',
  timestamp: 77493696,
  type: 0,
  signature:
   '92a6e0a29812c9553041567914e9d3acd00ca4b3abacabb6d1eb7efa3bb1185eaa34c1970891e6bb399dd018ae473417e3f81d747a347d681b20eb294ca69608'
}
```

## Different kinds of Transactions

Of course the `dpos-offline` API doesn't only allow for Send Transactions, but
for all available transaction types on the RISE network through the `kind`
property. Namely

* `send`: [link href="pages/protocol/Transactions!send-transaction"]Send[/link]
* `second-signature`: [link href="pages/protocol/Transactions!second-signature-transaction"]Register Second Signature[/link]
* `register-delegate`: [link href="pages/protocol/Transactions!register-delegate-transaction"]Register a Delegate[/link]
* `vote`: [link href="pages/protocol/Transactions!vote-transaction"]Vote[/link]
* `multisignature`: [link href="pages/protocol/Transactions!multisignature-registration-transaction"]Register a Multisignature Account[/link]

You can view the interfaces to each of the above transaction types in [the
github
repository](https://github.com/vekexasia/dpos-offline/blob/master/src/codecs/interface.ts).

## Customizing Transactions

Sometimes we may want to edit the `fee` or the `timestamp` of a transaction. We
can do this through the `dpos-offline` API as well.

### Editing Fees

We can pass in a custom fee to our `createAndSign` function through the `fee` property

```javascript
var sendTx = dpos.txs.createAndSign({
    {
        kind: 'send',
        amount: 100000000,
        recipient: '12345678901234567R',
        fee: 20000000 //custom fee
    },
    mnemonic
})
```

and the function will apply the fee to the end transaction object.
`dpos-offline` uses hard-coded fees for every transaction type as listed in
`dpos.txs.baseFees`.

```javascript
console.log(dpos.txs.baseFees)
// { multisignature: 500000000,
//  'register-delegate': 2500000000,
//  'second-signature': 500000000,
//  send: 10000000,
//  vote: 100000000 }
```

### Editing a Timestamp

Every transaction has a timetamp represented by seconds from Epoch Time which
is defined as May 24, 2016 0:00:00 UTC Time. In the `dpos-offline` API,
timestamps are also known as a `nonce`. We can set the `nonce` of our
transaction through the `createAndSign` function.

```javascript
var sendTx = dpos.txs.createAndSign({
    {
        kind: 'send',
        amount: 100000000,
        recipient: '12345678901234567R',
        nonce: 77512518 // custom timestamp
    },
    mnemonic
})
```

We can easily get the current timestamp by using the `txs.createNonce` function

```javascript
console.log(dpos.txs.createNonce())
// 77512518
```

## Second Signature

If your account has a second signature attached, we need to sign the
transaction with a second passphrase (referred to as `mnemonic2` here). We can
do this with the `dpos-offline` library using the `txs.calcSignature`
function.

```javascript
sendTx.signSignature = dpos.txs.calcSignature(sendTx, mnemonic2)
```

Our resulting object will look something like the following

```javascript
{
  amount: 100000000,
  asset: null,
  fee: 10000000,
  id: '2530894140975084782',
  recipientId: '12345678901234567R',
  senderId: '35285700575243917R',
  senderPublicKey:
   'a8d2bdae2d911333fd83dbd6959026977fe7a5ddcdf85893d5faf517453b9000',
  timestamp: 77493696,
  type: 0,
  signature:
   '92a6e0a29812c9553041567914e9d3acd00ca4b3abacabb6d1eb7efa3bb1185eaa34c1970891e6bb399dd018ae473417e3f81d747a347d681b20eb294ca69608',
  signSignature:
   <Buffer cc 17 d0 29 71 ec 12 33 4f 3d e7 9b 21 3a 30 4e 25 11 a1 d3 aa e5 a4 9d 7e 2e 73 03 72 20 e6 82 95 d8 bd 5a 28 b9 83 b0 cc 66 33 e6 ee 92 19 c0 e1 9c ... >
}
```

Signature generated, but there are two things we need to be concerned about
here. The first is that a `Buffer` object can not be easily transmitted to
the RISE network in a JSON and should be represented as a hex string like the
first signature here is. The second is that because the Transaction ID depends
on the second signature as well as the first one, it needs to be recalculated.
Luckily, `dpos-offline` can handle both of these cases through the
`txs.toPostable` method. This method takes in a transaction object and formats
its values as well as recalculates the transaction ID.

```javascript
var postableTx = dpos.txs.toPostable(sendTx)
```

The resulting object should be something we can now send to the network

```javascript
console.log(postableTx)
// { amount: 100000000,
//   asset: null,
//   fee: 10000000,
//   id: '5798413998819376085',
//   recipientId: '12345678901234567R',
//   senderId: '9747589144333222872R',
//   senderPublicKey:
//    'a8d2bdae2d911333fd83dbd6959026977fe7a5ddcdf85893d5faf517453b9000',
//   timestamp: 77493696,
//   type: 0,
//   signature:
//    '92a6e0a29812c9553041567914e9d3acd00ca4b3abacabb6d1eb7efa3bb1185eaa34c1970891e6bb399dd018ae473417e3f81d747a347d681b20eb294ca69608',
//   signSignature:
//    'cc17d02971ec12334f3de79b213a304e2511a1d3aae5a49d7e2e73037220e68295d8bd5a28b983b0cc6633e6ee9219c0e19c3a5d0731031f9a02fd1df7c4300b' }
```

## Broadcasting a Transaction

To broadcast the transaction we just created, all we need to do is send it to
a node, using its REST API. The `risejs` client library provides us with an
easy to use interface to do just that. First we start by including the library

```javascript
var rise = require('risejs').rise
```

This will create an API Wrapper for a node on the Mainnet. If we wanted to
broadcast our transaction to a different node or network we would have to set
our node address

```javascript
rise.nodeAddress = 'http://localhost:5566'
```

To send our transaction we simply use the Transactions API's `put` method.

```javascript
rise.transactions.put(sendTx)
    .then(function(res) { console.log(res); })
    .catch(function(err) { console.error(err); })
```

The RISE API Wrapper returns a promise that we handle with `then` on
successfully transmitting to the node or `catch` on a network failure. Our
transaction will most likely fail, because the sender has never received a
transaction before, and you will receive a response like

```javascript
{
  success: false,
  error: 'Account 35285700575243917R not found in db.'
}
```

However if the sender had enough RISE in his or her wallet, you should receive
a successful response like.

```json
{
  "success": true,
  "accepted": [
	"2159141135868240002"
  ],
  "invalid": []
}
```

And in moments RISE would be transferred from the Sender to the Recipient!
