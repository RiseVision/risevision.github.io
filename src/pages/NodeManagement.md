# Manager.sh

[toc][/toc]

Managing your node is an important task. The new TypeScript core comes with some utilities that will help you perform normal operations such as starting, stopping, backing up and more.

To access manager.sh script you just need to enter the installation folder (default: `~/rise`).

```
rise@risenode:~$ cd rise
```

When calling the manager without parameters an help screen will be shown.

## Checking status

This command will help you understand the current node situation.
It will spit out basic informations such as PID (Process ID), current block height and status of the dependencies (DB and Redis). A normal status message will look like this:

```
rise@risenode:~/rise$ ./manager.sh status

√ DB is running [4285]
√ Redis is running [4294]
√ NODE is running [4337] - [H=11999]
```

## Stopping node or dependency

Some times you'd like to stop the node or a dependency. The manager can help you with that and will automatically stop the desired entity.

Example:

```
./manager.sh stop node
```

In this example the manager will stop the node (if not running).

If you need to stop everything just pass `all` instead of `node`

## Starting

The start command is following the same syntax of the stop command described above. 

Example:

```
./manager.sh start node
```

## Reload

Sometimes you'll need to reload an entity. This command is basically a wrapper for `stop` + `start` and it follows the same syntax of those commands.

Example:

```
./manager.sh reload node
```

## Backup

This command will perform a DataBase backup handling all the operations involved to safely produce a backup.

Example:

```
./manager.sh backup
```

It accepts no arguments. By default, the backups will be saved in `/home/rise/rise/data/backups/`, assuming your non-root user's home dir is `/home/rise/`. A symlink `data/backups/latest` will be created pointing to the latest available backup.

## Restore Backup

When you need to restore a backup (or a verified snapshot) you can use this command by providing the file containing the backup.

Example:

```
./manager.sh restoreBackup ./backup.tgz
```

**Important** If the backup is not within the `rise` folder please provide **full absolute path**

If you already have a backup performed with the backup command, `restoreBackup` will use the latest backup in case you don't provide any file argument.

### Restore verified snapshot

When you install the node it will try to sync from start. If you want to get up to speed faster you could consider using a verified snapshot.

In case of mainnet:

```
wget https://downloads.rise.vision/snapshots/mainnet/latest -O latestsnap.gz
./manager.sh restoreBackup latestsnap.gz
```

In case of testnet:

```
wget https://downloads.rise.vision/snapshots/testnet/latest -O latestsnap.gz
./manager.sh restoreBackup latestsnap.gz
```
