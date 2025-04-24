import { expect, test, vi } from "vitest"
import OgmiosClient from "../src"

const baseUrl = "https://graph.xray.app/output/ogmios/mainnet/api/v1"
const headers = {}
const client = OgmiosClient(baseUrl, headers)

test("/health", async () => {
  const tip = await client.GET("/health")
  expect(tip.data?.lastKnownTip).toHaveProperty("height")
})

test("/ (protocolParameters)", async () => {
  const protocolParameters = await client.POST("/", {
    body: {
      jsonrpc: "2.0",
      method: "queryLedgerState/protocolParameters",
    } as any // TODO: auto-generated types is missing
  })
  expect(protocolParameters.data?.result).toHaveProperty("minFeeCoefficient")
})
