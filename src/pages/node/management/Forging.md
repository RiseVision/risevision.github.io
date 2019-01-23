# Forging

To enable forging on the node, the node configuration for your node must be altered slightly to allow your rise account to receive RISE rewards as well as sign blocks forged. Remember however that the only nodes allowed to forge are those elected as a delegate. Review the [link href="pages/protocol/Consensus!delegates"]Consensus Protocol[/link] to see how nodes get elected as delegates, as well as what the responsibilities of a delegate are.

## Adding your Secret

To sign forged blocks as well as receive rewards for forged blocks, the node needs access to your [link href="pages/protocol/Identity!key-pairs"]RISE account's private key[/link]. We can do this by adding the 12 word mnemonic phrase used to generate the account to the node's configuration (**remember never to share this key with other people!**). Edit the `etc/node_config.json` and add your secret phrase to the `forging.secret` list.


```diff
  "fileLogLevel": "error",
  "forging": {
-   "secret": [],
+   "secret": [ "my super secret twelve word mnemonic phrase used to generate my account" ],
    "access": {
      "whiteList": [ "127.0.0.1" ]
    }
  }
```

After editing the `etc/node_config.json`, you need to reload the node with the new configuration with

```bash
./manager.sh reload node
```

Review [link href="pages/node/Management!reload"]the node manager commands[/link] for more information.

## Enabling the Peers API

Peer API's are enabled by default to help you sync your node with the rest of the RISE network. However it is important to check that your node is not blocking any important API's. If you find a line matching

```diff
  "peers": {
-    "enabled": false,
```

Please remove it or change the value to `true` and reload the node to enable your node to function properly.
