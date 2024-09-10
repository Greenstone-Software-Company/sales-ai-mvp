import * as Sentry from "@sentry/react";
import Mixpanel from './mixpanel';
import logger from './logger'; // You need to set up a logger (e.g., Winston)

export const Analytics = {
  trackEvent: (eventName: string, properties?: any) => {
    Mixpanel.track(eventName, properties);
    logger.info(`Event: ${eventName}`, properties);
  },
  captureException: (error: Error, context?: any) => {
    Sentry.captureException(error, { extra: context });
    logger.error(`Error: ${error.message}`, { error, context });
  },
  setUserProperties: (userId: string, properties: any) => {
    Mixpanel.identify(userId);
    Mixpanel.people.set(properties);
    Sentry.setUser({ id: userId, ...properties });
    logger.info(`User properties set for ${userId}`, properties);
  }
};

export default Analytics;
