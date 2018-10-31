# Create an Account

In this example we are going to create a RISE Account, also referred to as a
wallet. To create an Account, we will need to generate a [link
href="pages/protocol/Identity!key-pairs"]Key Pair[/link]. Using the Key Pair we
can sign transactions as well as create an RISE Account ID in order to receive
RISE.

## Requirements

We need to libraries to create an account:

* `bip39`: to create a mnemonic passphrase
* `dpos-offline`: to create a wallet and send a transaction

To install the libraries run the following in your terminal

```bash
npm install dpos-offline bip39
```

The next steps will be all be in the node terminal

```bash
root@risenode:~$ node
>
```

although you can just as easily use these libraries in the browser

## Creating a mnemonic passphrase

First step to creating an account is to create a mnemonic passpharase. This
will act as a seed for our Public / Private Key Pair, as well as being
something that is easily written down and stored somewhere safely. To begin
first we need to grab the bip39 library.

```javascript
var bip39 = require("bip39")
```

Then we simply use the `generateMnemonic` function to create a random
passphrase

```javascript
var mnemonic = bip39.generateMnemonic()
```

If we inspect the mnemonic variable, we will see a list of 12 space separated
words which is our passphrase.

```javascript
console.log(mnemonic)
// property husband describe powder trade write round goddess farm duck exit boring
```

If this were being used for a real account, the passphrase should not be
shared, and it should be written down in a safe and secure location

## Creating a wallet

To create a wallet we need the `mnemonic` from the previous step and the DPoS
Offline library. First require the library

```javascript
var RiseWallet = require('dpos-offline').RiseWallet
```

Then simply create a new wallet by passing in your passphrase to the
`RiseWallet` constructor

```javascript
var wallet = = new RiseWallet(mnemonic)
```

We can then inspect the wallet to see that we indeed did create our Key Pair
and a valid RISE address

```javascript
console.log("Private Key: " + wallet.privKey)
// 85c19bc76558690e66ad326bded50765614d6edeb4189c6a3eb1e909fdaa4421a8d2bdae2d911333fd83dbd6959026977fe7a5ddcdf85893d5faf517453b9000

console.log("Public Key: " + wallet.publicKey)
// a8d2bdae2d911333fd83dbd6959026977fe7a5ddcdf85893d5faf517453b9000

console.log("Address: " + wallet.address)
// 35285700575243917R
```

Again if this were a real account the private key should not be shared with
others

## Next Steps

The address we just created can be used to receive RISE tokens from other
accounts. Check out [link
href="pages/quick-start/CreateATransaction"]Creating a Transaction[/link] to
see how we can use the wallet to create, sign and broadcast a transaction to
a RISE node
