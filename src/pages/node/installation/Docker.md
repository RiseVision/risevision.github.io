# Docker Installation

One of the easiest ways to get started with deploying a RISE node is to use docker and
our pre-built docker images.

> **Important**: Operating-system-level virtualization techniques like those used by Docker, LXC or OpenVZ often do not allow the container access to the system clock as it is a shared resource. NTP should be set on the host, otherwise the node may lose blocks or stay behind due to wrong clock sync.

## Requirements

To get started with docker, make sure to have `docker` as well as `docker-compose` installed on your machine. If you do not have `docker` and/or `docker-compose`, [follow the guide to installing Docker CE](https://docs.docker.com/install/) as well as [the guide to installing Docker Compose](https://docs.docker.com/compose/install/) in the Docker documentation pages.

## Up and running

The simplest way to get started with the docker images is to use `docker-compose`. First fetch the `docker-compose.yml` configuration file from the [`rise-node` GitHub Repository](https://github.com/RiseVision/rise-node/blob/feature/docker/docker-compose.yml).

```bash
wget https://raw.githubusercontent.com/RiseVision/rise-node/feature/docker/docker-compose.yml
```

Then you should be able to just simply download the images and start the container with

```bash
docker-compose up
```

The images are preloaded with a configuration for the Mainnet, as well as a DB image with the latest snapshot for fast syncing (it may take some time for the node to connect to the database as it performs the fast sync).

## Configuration

To configure the node, you will have to mount a volume to the node docker container, to give the container access to a local configuration as well as overwrite the values in the container. To do this we need to set a volume in the docker compose file to our configuration file.  To get started create a `node_config.json` file in the same directory as your `docker-compose.yml`

```bash
wget -O node_config.json https://raw.githubusercontent.com/RiseVision/rise-node/feature/docker/docker/mainnet_config.json
```

and fill it in with your desired configuration. See [link href="pages/node/management/Configuration"]Advanced Configuration[/link] for more information on what is configurable. Now we can bind the new configuration to our volume. Edit the `docker-compose.yml` to add the volume.

```diff
 version: "3"
 services:

   rise:
     image: jpopesculian/rise-node:latest
     depends_on:
       - redis
       - postgres
     ports:
       - "127.0.0.1:5555:5555"
+    volumes:
+      - "./node_config.json:/home/rise/config.json"
     networks:
       - overlay
     environment:
       NETWORK: mainnet
     restart: on-failure
```

That's it! The next time we run `docker-compose up` the docker container should be using the custom configuration.

## Testnet

To use the Testnet we need to set the environment variable in the docker compose file.

```diff
 version: "3"
 services:

   rise:
     image: jpopesculian/rise-node:latest
     depends_on:
       - redis
       - postgres
     ports:
       - "127.0.0.1:5555:5555"
     networks:
       - overlay
     environment:
-      NETWORK: mainnet
+      NETWORK: testnet
     restart: on-failure
```

However, this also means that we will be loading a different blockchain, so we need to also switch out our Postgres image version to use the latest Testnet snapshot.

```diff
   postgres:
-    image: jpopesculian/rise-node_postgres:mainnet-latest
+    image: jpopesculian/rise-node_postgres:testnet-latest
     environment:
       POSTGRES_PASSWORD: password
       POSTGRES_USER: rise
       POSTGRES_DB: rise_db
     networks:
       - overlay
     restart: on-failure

```

And that's it! The images should download and sync with the Testnet on the next `docker-compose up`

## Resetting

To reset the DB simply run

```bash
docker-compose rm -v
```

in the directory of the `docker-compose.yml` file
