export type paths = {
    "/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Dashboard
         * @description The real-time built-in HTML [dashboard](/getting-started/monitoring/#dashboard) for Ogmios.
         *
         */
        get: operations["getDashboard"];
        put?: never;
        /**
         * JSON-RPC
         * @description The JSON-RPC entrypoint for HTTP.
         *
         */
        post: operations["jsonRPC"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/health": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Health
         * @description Ogmios' health details. See also [Getting Started - Health/Metrics](/getting-started/monitoring/#health--metrics) for additional information.
         *
         */
        get: operations["getHealth"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/metrics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Metrics */
        get: operations["getMetrics"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
};
export type webhooks = Record<string, never>;
export type components = {
    schemas: {
        /** Format: ISO 8601 */
        iso8601DateTime: string;
        Health: {
            /** @description Time at which the application was started
             *      */
            startTime: components["schemas"]["iso8601DateTime"];
            /** @description Last known tip of the core node.
             *      */
            lastKnownTip: {
                /** @description A block id as a blake2b-256 hash digest of a block header.
                 *      */
                id: string;
                /** @description The block's slot number (a.k.a block number).
                 *      */
                slot: number;
                /** @description The block's height (a.k.a block number).
                 *      */
                height: number;
            } | "origin";
            /** @description Date at which the last update was received.
             *      */
            lastTipUpdate: components["schemas"]["iso8601DateTime"];
            /** @description A fixed-precision (5 digits) indicator of how far the node is from the tip of the network.
             *      */
            networkSynchronization: number | Record<string, never>;
            /** @description Current node's era.
             *      */
            currentEra: ("byron" | "shelley" | "allegra" | "mary" | "alonzo" | "babbage" | "conway") | Record<string, never>;
            /** @description Application metrics measured at regular interval.
             *      */
            metrics: {
                /** @description Runtime statistics we're interested in capturing.
                 *      */
                runtimeStats: {
                    /** @description Maximum live data in the heap, in KB
                     *      */
                    maxHeapSize: number;
                    /** @description Current live data in the heap, in KB
                     *      */
                    currentHeapSize: number;
                    /** @description Total CPU time (at the previous GC), in ns
                     *      */
                    cpuTime: number;
                    /** @description Total CPU time used by the GC, in ns
                     *      */
                    gcCpuTime: number;
                };
                /** @description Number of currently active connections
                 *      */
                activeConnections: number;
                /** @description Total connections since the last restart
                 *      */
                totalConnections: number;
                /** @description Statistics about the duration of each session, in ms
                 *      */
                sessionDurations: unknown;
                /** @description Total number of messages processed through websockets
                 *      */
                totalMessages: number;
                /** @description Total number of messages which couldn't be routed through the protocol
                 *      */
                totalUnrouted: number;
            };
            /**
             * @description State of the connection with the underlying node. `connected` only
             *     appear for HTTP status `200` and `202` whereas `disconnected` would
             *     correspond to a status `500`.
             *
             * @enum {string}
             */
            connectionStatus: "connected" | "disconnected";
            /** @description Current known epoch number
             *      */
            currentEpoch: number | Record<string, never>;
            /** @description Relative slot number within the epoch
             *      */
            slotInEpoch: number | Record<string, never>;
            /** @description The network that Ogmios is configured for
             *      */
            network: ("mainnet" | "preview" | "preprod" | "sanchonet" | "catastrophically-broken-testnet" | "unknown (00000000)") | Record<string, never>;
            version: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: {
        "Content-Type": "application/json;charset=utf-8";
    };
    pathItems: never;
};
export type $defs = Record<string, never>;
export interface operations {
    getDashboard: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The real-time built-in HTML dashboard for Ogmios.
             *      */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    jsonRPC: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json;charset=utf-8": Record<string, never>;
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=utf-8": Record<string, never>;
                };
            };
        };
    };
    getHealth: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Connected and synchronized.
             *      */
            200: {
                headers: {
                    "Content-Type"?: "application/json;charset=utf-8";
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=utf-8": components["schemas"]["Health"];
                };
            };
            /** @description Connected and far from the network tip.
             *      */
            202: {
                headers: {
                    "Content-Type"?: "application/json;charset=utf-8";
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=utf-8": components["schemas"]["Health"];
                };
            };
            /** @description Disconnected.
             *      */
            500: {
                headers: {
                    "Content-Type"?: "application/json;charset=utf-8";
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=utf-8": components["schemas"]["Health"];
                };
            };
        };
    };
    getMetrics: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Prometheus metrics. See also [Getting Started - Prometheus Metrics](/getting-started/monitoring/#prometheus-metrics) for additional information.
             *      */
            200: {
                headers: {
                    "Content-Type"?: "application/json;charset=utf-8";
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
        };
    };
}
