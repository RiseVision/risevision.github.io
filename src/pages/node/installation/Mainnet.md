# Mainnet Installation

**Important**: You must login in your non-root user. Refer to the [link
href="pages/node/Installation!requirements"]installation requirements[/link] for
more information.

```
root@risenode:~$ su - rise
```

First lets install the installer:

```bash
wget https://raw.githubusercontent.com/RiseVision/rise-build/master/scripts/install.sh
```

Then issue the `install` command.

```bash
bash install.sh install -r mainnet -u https://downloads.rise.vision/core/mainnet/latest.tar.gz
```

The install command will ask you some questions to preconfigure the basics of
your node and might take some time to complete. It will then automatically
start the node and all the dependencies.

The node will start from **height 0** and it might take some time to get it up
to sync with the network.

If you wish to you can always use a verified snapshot that will significantly
drop the time needed for your node to get up in sync. For this please refer to [link
href="pages/node/Management!restore-verified-snapshot"]Managing your
node[/link]
