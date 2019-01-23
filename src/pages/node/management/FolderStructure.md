# Folder Structure

This document will describe the node folder structure. It will not describe the "source" node structure.

When installing the node you'll end up with the `rise` folder containing the following subfolders:

```
bin/
data/
etc/
lib/
logs/
pids/
scripts/
share/
src/
```

Most of the folders are no use to the node operator but `logs`, `data` and `etc` are particularly helpful in some situations.

## etc

The `etc` subfolder contains most of the configuration files from both the core and the dependencies. You can tweak any file in this folder but you should know what you're doing.

> *Important*: Remeber to restart the node with `./manager.sh reload node` after changing configuration options to apply changes. Review [link href="pages/node/Management!reload"]the Node Management commands section[/link] for more information.

The `node_config.json` is particularly helpful for **forging delegates**. Inside such file you can enter your forging `secret`. Example:

```json
{
  "fileLogLevel": "error",
  "forging": {
    "secret": [ "my secret" ],
    "access": {
      "whiteList": [ "127.0.0.1" ]
    }
  }
}
```

To see a complete list of configuration options, refer to [link href="pages/node/management/Configuration"]the Advanced Configuration Page[/link]

## logs

Logs live under the logs folder. You can inspect all the logs via `tail` or `cat`.

## data

The data folder contains all the data (from all the dependencies). Backups will also be available here.
