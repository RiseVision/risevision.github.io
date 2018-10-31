# Peer-to-Peer Communication

The RISE network is of course a network of nodes or peers which communicate
with each other to sync the blockchain and reach consensus. Every node is both
a server and a client, requesting from and responding to other nodes on the
network using a REST API over HTTP.

## Architecture

Requests between nodes on the network are done through a REST API over HTTP. To
pass data, JSON is used as an encoding mechanism. Newer node versions also have
the option to encode requests and responses using [Protocol
Buffers](https://developers.google.com/protocol-buffers/) for increased
performance. Read more information about the new ProtoBuf API and all of the
performance improvements in [our Blog
Post](https://medium.com/rise-vision/rise-1-2-0-protocol-buffers-8240a0456170).
Every request between peers also includes system headers which other peers use
to validate the peer and its data and add it to their peer list. System headers
also include a Nethash which identifies the network which a peer is currently
connected to. An example of a Peer's system headers are as follows

```json
{
    "broadhash": Broadhash,
    "firewalled": Node is behind Firewall,
    "height": Block Height,
    "nethash": Nethash,
    "nonce": Unique Nonce,
    "os": OS Platform and Version Information,
    "port": Node Port,
    "version": Node Version
}
```

## Peer

A peer is another node on the network. When a node goes online and connects to
another node on the network, it then becomes its peer. The new node can begin
a peer discovery process by requesting the now connected node for its peer
list. This process can be repeated indefinitely to eventually discover the
whole network of connected peers. JSON representation of a peer is as follows.

```json
{
    "ip": Node IP Address,
    "port": Node Port,
    "state": Connection State,
    "os": OS Platform and Version,
    "version": Node Version,
    "broadhash": Broadhash,
    "height": Block Height,
    "updated": Last Updated Unix Timestamp,
    "nonce": Nonce
}
```

Connection State can be one of the following

* `0`: Banned
* `1`: Disconnected
* `2`: Connected

## Syncing

Syncing is the process a peer takes to load the current state of the
blockchain. It can do this by requesting blocks from other nodes on the network
with the Transport API. However, due to the request / response nature of a REST
response API, the RISE Team also offers a fast sync from a verified Snapshot.
See [link href="pages/node/Management!restore-verified-snapshot"]Restore
verified Snapshot[/link] for more information

## Block Propagation

When Forging Delegates generate new Blocks, they have to be propagated to the
rest of the Network, so that other nodes can update their version of the
blockchain. To do this the generating node selects 20 random peers form its
peer list and broadcasts the new block to them. After the peer receives the
block, once it has checked that the block is new and verified the information
in the block, the peer than relays the block to its peers. To prevent flooding
the network with unnecessary information, blocks are only allowed to be relayed
up to two times.

## Transaction Propagation

When unconfirmed transactions are sent to a node, they also must be propagated
across the network so that forging delegates may include them in newly
generated blocks. To do this every node holds a queue of up to 25 unconfirmed
transactions. At a regular interval (currently every 5 seconds), nodes bundle
their transaction queue and broadcast them to up to 20 peers in a similar
fashion as Block Propagation. When a node receives the transaction bundle, they
can add the transactions to their transaction pool and relay the bundle to
other nodes. A transaction bundle can also only be relayed up to two times to
prevent unnecessary network requests.

### Transaction Pool

In addition to queued unconfirmed transactions for propagation purposes. Every
node contains a list of up to 1000 unconfirmed transactions awaiting signatures
(e.g. multisignature transactions) and up to 1000 other unconfirmed
transactions ready to be added to a new block. This allows for a buffer in case
not all new transactions may be included in the next block, as well as
providing a place for transactions pending signatures to be stored and later
signed. All transactions in the transaction pool have a time to live. This time
to live is 18 minutes for single signature transactions and up to 72 hours for
multiple signature transactions.
