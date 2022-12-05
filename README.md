# Micro-frontend e-commerce example

This is a mini example of how to implement micro-frontends via module federation.

## Architecture

There are three main components to this app: the container, the products frontend, and the cart frontend.

The container is an application that displays the other components - the micro-frontends - somewhere in its own interface. To do this, it requests the relevant code from the relevant "remote" resources, and the correct assets are served and executed.

## Module federation

To understand micro-frontends, you must also understand module federation. This project implements it via Webpack and its `ModuleFederationPlugin` but there are plenty of other tools for this as well.

In this application, the container will be the **host**, while the products and cart frontends will be the **remotes**. In a real world example, the remotes would usually be served by another application rather than living in the same repo.

## What's with all the files?

### Host

- `index.js` - This file, after being transformed into `main.js`, is used to retrieve remote modules that are required to execute `bootstrap.js`
- `bootstrap.js` - This is where the work happens, mostly. Dependencies in this file are resolved by the `main.js` file that Webpack outputs.

### Remote

- `index.js` - This is the script that contains the micro-frontend to be displayed by the container
- `manifest.js` - This file is a set of instructions for the consumer on how to get specific exposed resources. For example, a remote source might expose two different modules as part of a micro-frontend; the manifest is requested and then read by the consumer so it knows what is available and how to retrieve it.

## Lifecycle of a request from the host

1. The host executes its own `main.js` file. This script will direct the host to then make requests to any known remotes.
2. The host requests manifests from each remote. Once these manifests are read, the host can make requests for any required modules.
3. Requested modules (dependencies) are delivered from remotes to the host.
4. The host's `bootstrap.js` script is able to load its dependencies, so it is executed.