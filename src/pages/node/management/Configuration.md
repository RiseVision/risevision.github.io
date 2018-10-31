# Configuration

The node configuration json located at `etc/node_config.json` in your rise installation folder, allows for a wide range of confuration parameters as follows:

```TypeScript
{
  port: number;
  address: string;
  version: string;
  minVersion: string;
  fileLogLevel: string;
  consoleLogLevel: string;
  logFileName: string;
  trustProxy: boolean;
  cacheEnabled: boolean;
  topAccounts: boolean;

  db: {
    host: string;
    port: number;
    database: string;
    user: string;
    password: string;
    poolSize: number;
    poolIdleTimeout: number;
    reapIntervalMillis: number;
    logEvents: string[];
  }

  redis: {
    host: string,
    port: number,
    db: number,
    password: string;
  };

  api: {
    enabled: boolean;
    access: {
      public: boolean;
      whiteList: string[]
    },
    restrictedWhiteList: string[]
    options: {
      limits: {
        max: number,
        delayMs: number,
        delayAfter: number,
        windowMs: number,
      }
    }
  };

  peers: {
    enabled: boolean;
    banTime: number;
    list: Array<{
      ip: string,
      port: number
    }>,
    access: {
      blackList: any[];
    },
    options: {
      limits: {
        max: number
        delayMs: number
        delayAfter: number
        windowMs: number
      },
      timeout: number
    }
  };

  broadcasts: {
    broadcastInterval: number
    broadcastLimit: number
    parallelLimit: number
    releaseLimit: number
    relayLimit: number
  };

  transactions: {
    maxTxsPerQueue: number
  };

  forging: {
    force: boolean
    secret: string[]
    access: {
      whiteList: string[]
    }
    transactionsPolling?: boolean
    pollingInterval?: number
  };

  loading: {
    verifyOnLoading: false,
    snapshot?: number | true,
    loadPerIteration: number,
  };

  nethash: string;
}
```
