# Consensus Algorithm

RISE uses a Delegated Proof of Stake (DPoS) model  to come to
a consensus about which blocks to add to the blockchain. Delegated Proof of
Stake is a consensus algorithm in which token holders have the ability to vote
for a validator or a group of validators to decide on which transactions are
valid and should be added. The system is designed to maintain irrefutable truth
across the network, through the use of a digital democracy.

Specific nodes called Delegates produce all of the Blocks on the network and
are voted in by RISE token holders (the stakeholders of the RISE network). The
number of Delegates elected and producing blocks is fixed at 101, and each
stakeholder is allowed to vote for up to 101 delegates. The weight of the
stakeholder's vote is based upon how many RISE tokens that stakeholder
possesses. A RISE token holder can vote for a delegate or many delegates by
creating [link href=pages/protocol/Transactions!vote-transaction]a Vote
Transaction[/link].

Although there are many consensus algorithms in development across various
blockchain technologies, RISE has chosen DPoS to be the primary Consensus
mechanism due to its many advantages in comparison to other systems. DPoS is an
inherently democratic system and through the use of real-time voting allows for
the entire network to participate in deciding on validity, whereas many systems
concentrate the power in few nodes with large CPU resources. In addition, the
lack of large computational barriers and long network propagation, allows for any
node to participate, in a fast and efficient manner, increasing the networks
overall transaction speed and efficiency.

## Delegates

A Delegate is a type of RISE account that has the ability to be elected to
generate and validate blocks on the blockchain. Any account has the ability to
register as a delegate by creating [link
href=pages/protocol/Transactions!register-delegate-transaction]a Register
Delegate Transaction[/link] and submitting it to the network. Once validated,
token holders can vote for the delegate to become a block producer. Only the
top 101 delegates with the most votes weighted by stake are allowed to actually
validate and generate blocks. Delegates receive a fixed award for every block
they produce [@TODO link to awards]

A Delegate's role in the system therefore is to

* Ensure the node is online and reachable
* Collect 25 transactions from across the network into the block
* Sign, validate and broadcast the block
* Work with other delegates in reaching consensus

If a delegate misbehaves on the network, the other delegates will refuse to
accept the invalid blocks. In addition, stakeholders have the ability to remove
their votes from a delegate and vote for another node.

## Forging & Rounds

Forging is the process of validating and adding blocks to the blockchain
("mining" in the Bitcoin consensus algorithm). Only the top 101 delegates with
the most votes weighted by stake are allowed to forge on the network. Forging
delegates generate blocks in rounds. 101 blocks are produced every round in
which each Delegate validates and generates one Block per round. At the
beginning of the round, Delegates are promoted or demoted depending on the
votes from the transactions in the previous round. Then each delegate gets
assigned a 30 second timeslot in the round in which to generate a block.
Therefore the round time is 50 minutes and 30 seconds (101 times 30 seconds).
During their timeslot a delegate must select up to 25 transactions from the
network and add them to a new block. Once the delegate has signed the block and
broadcast it to the rest of the network, the next delegate can begin producing
a new block in their assigned timeslot. If a delegate misses its timeslot, the
next delegate must step in and forge two blocks.

## Broadhash Consensus

The Broadhash is an aggregated rolling hash of the last five blocks on the
blockchain. Nodes which have the same broadhash therefore are in agreement
about the current state of the blockchain. The hash is used to ensure that the
majority nodes on the network reach consensus about the tip of the blockchain,
thereby an important strategy to preventing forks in the blockchain. Peers on
the network broadcast their broadhash to other peers via system headers as
described in [@TODO p2p comm link]. Broadhash consensus is achieved by selected
100 random peers attached to a node, and querying their broadhash. If 51 out of
the 100 peers, have the same broadhash, than the node can be fairly certain
that the network is in agreement about the blockchain state. Once consensus is
achieved, delegates can generate the next block in their timeslot as described
in [Forging & Rounds](#forging--rounds).

## Forging Rewards

To incentivize delegates, as well as reward delegates for contributing by
generating blocks. These rewards are collected from fixed inflation rates, as
well as various network fees. Forging Delegates receive rewards in RISE at the
end of every round.

### Block Rewards

Forging Delegates receive a fixed reward for every block they successfully
generate and gets accepted by the network. These fixed rewards contribute to
inflation in the token ecosystem. Although inflation will reduce over time, the
inflation rate will never go away. Current milestones are as follows:

[table]

| Year  | Block #       | Reward      | Inflation  |
|-------|---------------|-------------|------------|
| 1     | -             | 15 RISE     | 14.33%     |
| **2** | **1,054,080** | **12 RISE** | **10.03%** |
| 3     | 2,108,160     | 9 RISE      | 6.84%      |
| 4     | 3,162,240     | 6 RISE      | 4.27%      |
| 5     | 4,216,320     | 3 RISE      | 2.05%      |
| 6+    | 5,270,400     | 1 RISE      | -          |

[/table]

Currently the network is on Milestone 2, and therefore forging delegates
receive 12 RISE per forged block. If a delegate misses its timeslot in the
round (as described in [Forging & Rounds](#forging--rounds), then the next
active delegate will receive double the reward as it must generate two blocks.

### Network Fees

All transactions on the network require a fee in order to prevent spam from
flooding the network (More information on the Fee Schedule is covered in [link
href=pages/protocol/Transactions]Transactions[/link]). All transactional fees
at the end of the round are aggregated and then split between all active
participants in the last round.
