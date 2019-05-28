<p align="center"><img src="https://avatars1.githubusercontent.com/u/48646115?s=200&v=4" width="100px" /></p>

# Synapse

## What's it?

The idea behind synapse is to act like a proxy to handle manual overrides and interactions with the [brian-core](https://github.com/brian-ai/core).

You'll use synapse to directly communicate with it without the necessity to access the frontend or use the voice recognition system.

## Tech Stack

- RethinkDB
- Rethinkly
- Koa2
- Graphql
- apollo-server-koa
- RabbitMQ
- hoopa-logger

## Pre-requisites

To have this api up and running you need to have both [RabbitMQ](https://hub.docker.com/_/rabbitmq/) and [RethinkDB](https://hub.docker.com/_/rethinkdb) services :white_check_mark:.

## Instalation

**1 - Clone the repository**

```sh
$ git clone git@github.com:brian-ai/synapse.git
```

**2 - Install the dependencies**

```sh
$ yarn
```

**3 - Copy the env example file**

```sh
$ cp env.example .env
```

and fill it with the correct information related to your system (RabbitMQ and RethinkDB information)
Also remember to restore the [database structure](/database-structure/db-structure)

**4 - Run the server**

```sh
$ yarn start
```

> The api should be available under http://localhost:4000/graphql, also the graphql playground docs with all available [mutations](mutations/all-mutations) and [queries](queries/all-queries).
