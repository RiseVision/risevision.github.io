# Inspecting Transactions

The blockchain provides complete transparency in what happens on the network.
This provides us with a lot of tooling and ability to explore the blockchain
and see what is happening. To give an example, let us imagine we want to build
a Dashboard for users to look at all of the transactions coming into their
account and going out of their account. Let's build a small javascript function
to list all of the transactions involving an account.

## Requirements

All we need to interact with the blockchain here and pull information is the
`risejs` JavaScript client which we can install simply with `npm install
risejs`

## Querying Transactions

To query the transaction database we need to send a query object to a node
using the REST API. To start we have to include the library

```javascript
var rise = require('risejs').rise
```

This will create an API Wrapper for a node on the Mainnet. If we wanted to
monitor a different node or network we would have to set our node address

```javascript
rise.nodeAddress = 'http://localhost:5566'
```

We can now use the Transactions API's `getList` function to get a List of
transactions. `getList` returns a Promise, and we can retrieve the result by
calling `then` on our Promise.

```javascript
rise.transactions.getList()                    // make query request
    .then(function(res) { console.log(res); }) // print results
```

We should hopefully now see a long list of transactions and a count of
transactions found in the database

```json
{
    "success": true,
    "count": 591344,
    "transactions": [ 100 Transactions ]
}
```

## Error Handling

There are two types of errors that can occur with our request: an application
Error and a network Error. An application error occurs when we provide data
that the is invalid or does not fit the schema. A network error may occur when
our request doesn't reach our server, possibly due to factors like poor
connection. We have to handle these errors differently. First let's start with
a network error. Network errors are automatically rejected in our Promise, and
therefore we have to catch them with the `catch` function.

```javascript
rise.transactions.getList()
    .then(function(res) { console.log(res); })
    .catch(function(err) { console.error(err); }) // handle network error
```

Application errors get returned in the response object in the format

```json
{
    "success": false,
    "error": "Error message"
}
```

So to handle any application errors we can simply check the `success` property
on the response object and handle the error message

```javascript
rise.transactions.getList()
    .then(function(res) {
        if (!res.success) {
            return console.error(res.error); // handle application error
        }
        console.log(res);                    // handle success
    })
    .catch(function(err) { console.error(err); })
```

## Query Parameters

Of course what we have so far simply lists 100 random transactions from the
network. Our dashboard should just show the transactions relevant to our
account, so let's go ahead and scope the transactions we are looking at by
filtering them by either `senderId` or `recipientId`. For the following
examples, let's use our account from [link
herf="pages/quick-start/CreateAnAccount"]Creating an Account[/link].

```javascript
var accountId = "35285700575243917R"
```

To filter the list of transactions by `accountId`, we can use the `getList`
query parameter

```javascript
rise.transactions.getList({
        senderId: accountId,      // filter by senderId
        recipientId: recipientId  // or by recipientId
    })
    .then(function(res) {
        if (!res.success) {
            return console.error(res.error);
        }
        console.log(res);
    })
    .catch(function(err) { console.error(err); })
```

This is a fairly simple query, but we can get more complicated. Refer to [link
href="operation/TransactionsAPI.getTransactions"]The REST API
documentation[/link] for the list of possible query parameters. From our query
we should get a result similar to the following if our account has
transactions.

```json
{
    success: true,
    count: 234,
    transactions: [ 100 Transactions ]
}
```

## Looping Through Transactions

As you may have noticed from the result above, the `count` and the number of
transactions that were returned do not match up. That is because the count
represents the total number of transactions found, but those that are returned
are limited by a `limit` parameter (in this case, the default of 100). To get
more transactions we can use an `offset` parameter. For example, to get the
101st to 200th transaction, we can use an `offset` of 100.

```javascript
rise.transactions.getList({
        senderId: accountId,
        recipientId: recipientId,
        orderBy: "timestamp:asc", // get transactions in order created
        offset: 100               // get the next 100 transactions
    })
    .then(function(res) {
        if (!res.success) {
            return console.error(res.error);
        }
        console.log(res);
    })
    .catch(function(err) { console.error(err); })
```

Of course we can make this much more reusable by wrapping the whole thing in
a function

```javascript
function getAccountTransactions(accountId, offset) {
    offset = offset || 0; // allow offset to be optional
    rise.transactions.getList({
            senderId: accountId,
            recipientId: recipientId,
            orderBy: "timestamp:asc",
            offset: offset
        })
        .then(function(res) {
            if (!res.success) {
                return console.error(res.error);
            }
            console.log(res);
        })
        .catch(function(err) { console.error(err); })
}

getAccountTransactions(accountId);      // get first 100 transactions
getAccountTransactions(accountId, 100); // get next 100 transactions
```

But we want all of the transactions, not just the first 200. Let's use
recursion to fetch more transactions. If the query returns a list of
transactions, we'll simply call it again to see if there are more available to
us, and we'll stop if there aren't.

```javascript
function getAccountTransactions(accountId, offset) {
    offset = offset || 0;
    rise.transactions.getList({
            senderId: accountId,
            recipientId: recipientId,
            orderBy: "timestamp:asc",
            offset: offset
        })
        .then(function(res) {
            if (!res.success) {
                return console.error(res.error);
            }

            if (res.transactions.length > 0) { // check if transactions returned
                console.log(res);              // handle result
                getAccountTransactions(        // get next batch of transactions
                    accountId,
                    offset + res.transactions.length
                );
            }
            // no transactions returned therefore recursion ends
        })
        .catch(function(err) { console.error(err); })
}

getAccountTransactions(accountId);
```

This should give us all of our transactions in batches of up to 100 at a time!
Now we can display all of our users transactions to our user in their
dashboard.

## Polling New Transactions

But the blockchain is a dynamic network with transactions occuring all of the
time. If a new transaction comes into the users wallet we want to let them
know. Once we load the user's transaction history, let's poll the system for
more transactions. We can build this into our recursive function fairly easily.

```javascript
function getAccountTransactions(accountId, offset) {
    offset = offset || 0;
    rise.transactions.getList({
            senderId: accountId,
            recipientId: recipientId,
            orderBy: "timestamp:asc",
            offset: offset
        })
        .then(function(res) {
            if (!res.success) {
                return console.error(res.error);
            }

            if (res.transactions.length > 0) {
                console.log(res);
                getAccountTransactions(
                    accountId,
                    offset + res.transactions.length
                );
            }

            setTimeout(function() {
                getAccountTransactions(accountId, offset); // try our query again
            }, 5000);                                      // but delay it by 5 seconds
        })
        .catch(function(err) { console.error(err); })
}

getAccountTransactions(accountId);
```

Done! We've just built a live transaction feed in a few lines of JavaScript!

## Bonus: Await / Async Syntax

Because `risejs` is built upon modern TypeScript and ES6 libraries we can use
modern ES6 functionality to represent our recursive function as a simple loop.
Here's an example of using `async` / `await` syntax to list transactions and
poll for new ones.

```javascript
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

let offset = 0;

while (true) {
  try {
    const res = await rise.transactions.getList({
      orderBy: "timestamp:asc",
      offset: offset,
      senderId: accountId,
      recipientId: accountId
    });

    if (!res.success) {
      return console.error(res.error);
    }

    if (res.transactions.length > 0) {
      console.log(res.transactions);
      offset += res.transactions.length;
    } else {
      await delay(5000);
    }
  } catch (err) {
    return console.error(err);
  }
}
```
