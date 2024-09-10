import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import App from './App';

Sentry.init({
  dsn: "YOUR_SENTRY_DSN", // Replace with your actual DSN from Sentry
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0, // Adjust this to control the sampling rate
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
