# Installation

## Assumptions
This guide assumes basic knowledge of everything related to running a linux server on the internet. 
The install procedure, available with the new TypeScript Core will facilitate installation of dependencies and initial setup, but won't take care of securing your server or keeping its software up to date.
For some hints on how to setup your server for a good level of security, you can follow the guidelines [on this post on the RISE forum](https://forum.rise.vision/topic/8/initial-server-setup).


## Requirements
A Blank VPS with Ubuntu 16.04 and a non-root `user`. Since the new core comes shipped with all the dependencies you don't need to install Node.js or PostGres.

> **Important**: It's important you don't already have PostGres installed. If you have PostGres installed already, you can stop the running service with `sudo service postgresql stop` before installation and starting the node.

The non-root user will need to have sudo capabilities. [How to add a sudo-capable user?](https://www.digitalocean.com/community/tutorials/how-to-create-a-sudo-user-on-ubuntu-quickstart)

```
root@risenode:~$ adduser rise
root@risenode:~$ usermod -aG sudo rise
```

Also the following commands will be used when installing the node:

1. `wget`
2. `curl`
3. `tar`
4. `sudo`
5. `sha1sum`

Most of them are already installed in most vps and the installer command will eventually prompt you a message in case you're missing one of them.

## Next Steps

Install either a [link href=node/pages/installation/Mainnet]Mainnet Node[/link] for interaction with the main network or a [link href=node/pages/installation/Testnet]Testnet Node[/link] for local development.
