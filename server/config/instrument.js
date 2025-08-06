// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node";


Sentry.init({
  dsn: "https://b0448dda95bb22a5b7d8e1c06e0ce73e@o4509794223652865.ingest.us.sentry.io/4509794236760064",
  
integrations: [Sentry.mongooseIntegration()],

  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});