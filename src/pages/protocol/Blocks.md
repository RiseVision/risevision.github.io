# Blocks

A block is a group of transactions, and some header data linking the blocks
together as well as providing meta information about the block itself. Active
delegates produce blocks in their timeslot
(see [link href="pages/protocol/Consensus!forging--rounds"]Forging[/link] for
more information), gathering up to 25 unconfirmed transactions on the network
and providing the necessary header information. Blocks are linked together with
their block IDs and signed by the delegate.

## Block Header

A block is composed of a block header as well as a list of transactions. The
header describes the block in detail. It is used to get an overview of the
block as well as contains information which helps to verify and validate the
block between nodes. A block header consists of the following fields.

[table]

| Name                   | Size (bits) | Type       | Description                                |
|------------------------|-------------|------------|--------------------------------------------|
| Version                | 32          | Integer    | Block Version                              |
| Timestamp              | 32          | Integer    | Time in Seconds since Epoch                |
| Previous Block         | 64          | Integer    | Previous Block ID                          |
| Number of Transactions | 32          | Integer    | Number of Transactions in Block            |
| RISE Amount            | 64          | Integer    | Total amount of RISE transferred in Block  |
| Fee Amount             | 64          | Integer    | Total amount of Fees associated with Block |
| Delegate Reward        | 64          | Integer    | RISE Reward for Delegate                   |
| Payload Length         | 32          | Integer    | Length of Payload in bytes                 |
| Payload Hash           | 256         | Hash       | SHA-256 Hash of Payload                    |
| Delegate Public Key    | 256         | Public Key | Public Key of generating Delegate          |
| Signature              | 512         | Signature  | Signature of generating Delegate           |
| Block ID               | 64          | Integer    | ID of Block                                |
| Block Height           | 64          | Integer    | Block Height (e.g. Block Number)           |

[/table]

A JSON representation of a block is as follows:

```json
{
    id: Block ID,
    version: 0,
    timestamp: Timestamp,
    height: Block Height,
    previousBlock: Previous Block ID,
    numberOfTransactions: Number of Transactions,
    totalAmount: RISE Amount,
    totalFee: Fee Amount,
    reward: Delegate Reward,
    payloadLength: Payload Length,
    payloadHash: Payload Hash,
    generatorPublicKey: Delegate Public Key,
    blockSignature: Delegate Signature,
    transactions: [
        Array of Transaction Objects
    ]
}
```

## Block Payload

A block payload is composed of a maximum of 25 unconfirmed transactions
collected from the network by the active delegate. Although the maximum length
for the transactions list is 25, maximum payload size varies by the type of
transactions included. See [link href="pages/protocol/Transactions"]the Transactions Page[/link] for more information on the
structure of each transaction. Once all of the transactions are gathered into
an array, Number of Transactions, RISE Amount, Fee Amount, Payload Length, and
Payload Hash can be calculated. To calculate the payload hash, the active
delegate simply takes the SHA-256 hash of the transaction array.

## Signature

The Forging Delegate must sign the block header to verify that he or she is the
one who produced the block. The signature process is very similar to the way
transactions are signed. First a data block with all of the fields in the
header except for Signature, Block ID and Block Height are filled in with their
values in the order in the table above. The data block is then hashed with
a SHA-256 hashing algorithm which gets passed into an ed25519 signature
algorithm along with the delegates private key.

## Block ID

After the necessary block header fields are filled in, verified and a signature
is generated and added to the end of the block header data block, a block ID
can be generated. This process is again similar to transaction ID generation.
First the data block is hashed with a SHA-256 hashing algorithm. The first
8 bytes are taken, reversed and the numerical representation thereof is used as
the block ID
