

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://981d9eddd9958741dcc373f97d428862@o4510185801842688.ingest.us.sentry.io/4510270558896128",

  integrations: [
    Sentry.consoleLoggingIntegration({ levels: ["log", "warn", "error"] }),
  ],
  
  tracesSampleRate: 1,
  enableLogs: true,
  sendDefaultPii: true,
});
