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

## Creating the Transaction

To create a transaction we will be using the DPoS Offline library. To load the
library use the following

```javascript
var SendTx = require('dpos-offline').SendTx
```

To create the transaction first initialize the transaction object

```javascript
var sendTx = new SendTx()
```

Then add the required fields (See [link href="pages/protocol/Transactions!send-transaction"]The Transactions Page[/link] for more information on what all of these fields mean)

```javascript
sendTx
  .withFees(1000000) // Amount in Satoshis
  .withAmount(10000000)
  .withSenderPublicKey(wallet.publicKey)
  .withRecipientId('12345678901234567R')
```

Notice that we are using the public key of the `wallet` that we created
in [link href="pages/quick-start/CreateAnAccount"]Create an Account[/link]. This
is important as we are going to need to later use the private key of the wallet
to sign the transaction.

We also have to add a timestamp. A timestamp is the number of seconds since
Epoch Time. Epoch time is a constant set at May 24, 2016 UTC Time or

```javascript
var epoch = new Date(Date.UTC(2016, 4, 24, 17, 0, 0, 0))
```

so our timestamp can be calculated with

```javascript
var timestamp = Math.floor((new Date() - epoch) / 1000)
```

and then set with

```javascript
sendTx.withTimestamp(timestamp)
```

## Signing a Transaction

To sign the transaction created in the previous step we will need to use the
wallet API from the `wallet` that we created in [link
href="pages/quick-start/CreateAnAccount"]Create an Account[/link]. All we need
to do is use the `signTransaction` function to create a signed transaction.

```javascript
var signedTx = wallet.signTransaction(sendTx)
```

Inspecting our transaction should give us an Object that matches what a node
would expect.

```javascript
{
  id: '2159141135868240002',
  fee: 1000000,
  type: 0,
  recipientId: '12345678901234567R',
  amount: 10000000,
  senderPublicKey: 'a8d2bdae2d911333fd83dbd6959026977fe7a5ddcdf85893d5faf517453b9000',
  requesterPublicKey: null,
  timestamp: 76906309,
  senderId: '35285700575243917R',
  signature:   '4dda2cee58b967d355076f5a214b3bf256d093610f577b6855829285f7ca8536b6580b592b983efc1253573021c7491abaad1bd9cd73dcbce74bba6b091d4304',
  asset: undefined
}
```
