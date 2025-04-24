<a href="https://discord.gg/WhZmm46APN"><img alt="Discord" src="https://img.shields.io/discord/852538978946383893?style=for-the-badge&logo=discord&label=Discord&labelColor=%231940ED&color=%233FCB9B"></a>
<a href="https://www.npmjs.com/package/cardano-ogmios-client"><img alt="NPM" src="https://img.shields.io/npm/v/cardano-ogmios-client/latest?style=for-the-badge&logo=npm&labelColor=%231940ED&color=%233FCB9B"></a>
<a href="https://github.com/xray-network/cardano-ogmios-client/actions"><img alt="CODEQL" src="https://img.shields.io/github/actions/workflow/status/xray-network/cardano-ogmios-client/codeql.yml?label=CodeQL&logo=github&style=for-the-badge&labelColor=%231940ED&color=%233FCB9B"></a>
  
# TypeScript Client for Ogmios blockchain bridge

Automatically generated Openapi-fetch (Axios) client for [Ogmios](https://ogmios.dev) based on [openapi.yaml](https://ogmios.dev/openapi.yaml) OpenAPI schema.

## Installation

To install the client with Yarn, run:

```TypeScript
yarn install cardano-ogmios-client
```

To install the client with NPM, run:

```TypeScript
npm i cardano-ogmios-client
```

## Usage

```TypeScript
import OgmiosClient from "cardano-ogmios-client"

const client = OgmiosClient("https://graph.xray.app/output/ogmios/mainnet/api/v1")

const app = async () => {
  const tip = await client.GET("/health")

  if (tip.data) {
    console.log(tip.data?.lastKnownTip?.height)
  }
  if (tip.error) {
    console.error(tip.error)
  }
}

app()
```

## Endpoints

* Check OpenAPI fetch documentations for available endpoint parameters: https://openapi-ts.pages.dev/openapi-fetch/
* The client uses OpenAPI definitions from the Ogmios configuration: [openapi.yaml](https://ogmios.dev/openapi.yaml)
* A complete list of endpoints can be found here (RapiDoc): https://ogmios.dev/http-api/


## API URLs

Managed by XRAY/Network (XRAY/Graph, Cloudflare WAF & Load Balancer)

```
https://graph.xray.app/output/ogmios/mainnet/api/v1
```

```
https://graph.xray.app/output/ogmios/preprod/api/v1
```

```
https://graph.xray.app/output/ogmios/preview/api/v1
```
