# API Access

The RISE node configuration allows for granular API access and permissions for different users and networks. This configuration can be found in the `etc/node_config.json` located in your `rise` installation folder (see [link href="pages/node/management/FolderStructure!etc"]folder structure[/link] for more information). Remember to reload the node with `./manager.sh reload node` after changing configuration to apply those changes to the node.

To see a complete list of configuration options, refer to [link href="pages/node/management/Configuration"]the Advanced Configuration Page[/link]

## General API Access

The general API allows for HTTP queries on the status of your node as well as the blockchain. Check out the [link href="api"]API Reference[/link] to see a list of different endpoints available through the general API. You can change API access to your node by editing the `"api"` section of the `etc/node_config.json`.

### enabled

The `"enabled"` boolean flag will enable or disable the general API access to your node completely, and can have a value of `true` or `false`

```json
{
    "api": {
        "enabled": true
    }
}
```

### access

Under the `"access"` key, the general API can either be set to `public` or have a list of whitelisted IP Addresses if not. An example of public API access is as follows

```json
{
    "api": {
        "enabled": true,
        "access": {
            "public": true,
            "whiteList": []
        }
    }
}
```

while a private one may look like

```json
{
    "api": {
        "enabled": true,
        "access": {
            "public": false,
            "whiteList": [
                "127.0.0.1"
            ]
        }
    }
}
```

### restrictedWhiteList

The restricted API IP whitelist, allows access to advanced API requests for editing local transactions, and should be enabled with caution.

## Peers API Access

The Peers API is critical to the functionality of the Blockchain, and serves to help nodes sync blocks and transactions with each other. It is essentially the [link href="pages/protocol/PeerToPeer"]Peer-to-Peer Communication Layer[/link]. The API is enabled by default on nodes, but the `etc/node_config.json` allows for more fine-grained control under the `"peers"` section.

### enabled

The `"enabled"` boolean flag allows the node owner to turn off the functionality if required by setting the value to `false`

```json
{
    "peers": {
        "enabled": true
    }
}
```

### list

The `"list"` section configures a list of "Seed Peers" or peers to begin the [link href="pages/protocol/PeerToPeer!peer"]peer discovery process[/link] with, and consists of a list of trusted peers. RISE nodes are by default loaded with a peer list of official RISE nodes, but this can always be modified.

```json
{
    "peers": {
        "enabled": true,
        "list": [
            {
                "ip": "45.32.136.66",
                "port": 5555
            },
            {
                "ip": "45.76.36.14",
                "port": 5555
            },
            {
                "ip": "212.24.96.99",
                "port": 5555
            }
        ]
    }
}
```

### blacklist

A list of nodes can also be added to a IP Address blacklist if they are misbehaving

```json
{
    "peers": {
        "access": {
            "blackList": [ "134.28.97.14" ]
        }
    }
}
```

## Top Accounts API

The Top Accounts API allows for clients to query the top accounts by RISE balance and is enabled by the `"topAccounts"` boolean flag in `etc/node_config.json`. This can either be set to `true` to allow access or `false` (the default).

> Note: The general API must also be enabled to allow access

```json
{
    "topAccounts": true
}
```

## Forging API Access

The forging API's can be used to allow for remote access to enable, disable and check on the status of forging. It can be enabled for IP addresses by adding the IP to a whitelist in the `"forging"` section of the `etc/node_config.json`.

```json
{
    "forging": {
        "secret": ["my secret"],
        "access": {
            "whiteList": [
                "127.0.0.1"
            ]
        }
    }
}
```
