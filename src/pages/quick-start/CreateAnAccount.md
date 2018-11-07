# Create an Account

In this example we are going to create a RISE Account, also referred to as a
wallet. To create an Account, we will need to generate a [link
href="pages/protocol/Identity!key-pairs"]Key Pair[/link]. Using the Key Pair we
can sign transactions as well as create an RISE Account ID in order to receive
RISE.

## Requirements

We need two libraries to create an account:

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
will act as a seed for our Public / Private Key Pair, as well as
something that is easily written down and stored somewhere safely. To begin
first we need to load the `bip39` library.

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

## Creating a Key Pair

To create a [link href="pages/protocol/Identity!key-pairs"]Key Pair[/link] we
need to use the `dpos-offline` library. Let's get started by including the
library in our current scope.

```javascript
var dpos = require('dpos-offline').Rise
```

We can then use the `deriveKeypair` function to take our mnemonic, generate
a seed and then create a public / private key pair.

```javascript
var keyPair = dpos.deriveKeypair(mnemonic)
```

If we inspect our `keyPair`, we'll see that our public and private key pair
generated properly as Byte Buffer objects.

```javascript
console.log(keyPair.privateKey)
// <Buffer 85 c1 9b c7 65 58 69 0e 66 ad 32 6b de d5 07 65 61 4d 6e de b4 18 9c 6a 3e b1 e9 09 fd aa 44 21 a8 d2 bd ae 2d 91 13 33 fd 83 db d6 95 90 26 97 7f e7 ... >
// or as hex string: '85c19bc76558690e66ad326bded50765614d6edeb4189c6a3eb1e909fdaa4421a8d2bdae2d911333fd83dbd6959026977fe7a5ddcdf85893d5faf517453b9000'

console.log(keyPair.publicKey)
// <Buffer a8 d2 bd ae 2d 91 13 33 fd 83 db d6 95 90 26 97 7f e7 a5 dd cd f8 58 93 d5 fa f5 17 45 3b 90 00>
// or as hex string: 'a8d2bdae2d911333fd83dbd6959026977fe7a5ddcdf85893d5faf517453b9000'
```


## Deriving an Address

As described in the [link href="pages/protocol/Identity!accountids"]Account ID
Generation Algorithm[/link] a RISE address is simply calculated from a public
key. We can use the `calcAddress` function to take our generated public key and
output a valid RISE address.

```javascript
var address = dpos.calcAddress(keyPair.publicKey)
```

And if we inspect `address` we should see a valid RISE address that we can
control with the key pair we generated.

```javascript
console.log(address)
// '35285700575243917R'
```

## Next Steps

The address we just created can be used to receive RISE tokens from other
accounts. Check out [link
href="pages/quick-start/CreateATransaction"]Creating a Transaction[/link] to
see how we can use the wallet to create, sign and broadcast a transaction to
a RISE node
