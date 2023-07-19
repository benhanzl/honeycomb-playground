"use strict";

require("dotenv").config();

const { HoneycombSDK } = require("@honeycombio/opentelemetry-node");
const {
  getNodeAutoInstrumentations,
} = require("@opentelemetry/auto-instrumentations-node");

const sdk = new HoneycombSDK({
  instrumentations: [
    getNodeAutoInstrumentations({
      // We recommend disabling fs autoinstrumentation since it can be noisy
      // and expensive during startup.
      "@opentelemetry/instrumentation-fs": {
        enabled: false,
      },
    }),
  ],
});

sdk.start();
