import * as Sentry from "@sentry/react";
import Mixpanel from './mixpanel';
import logger from './logger';

interface EventProperties {
  [key: string]: string | number | boolean;
}

interface UserProperties {
  [key: string]: string | number | boolean;
}

export const Analytics = {
  trackEvent: (eventName: string, properties?: EventProperties) => {
    Mixpanel.track(eventName, properties);
    logger.info(`Event: ${eventName}`, properties);
  },
  captureException: (error: Error, context?: Record<string, unknown>) => {
    Sentry.captureException(error, { extra: context });
    logger.error(`Error: ${error.message}`, { error, context });
  },
  setUserProperties: (userId: string, properties: UserProperties) => {
    Mixpanel.identify(userId);
    Mixpanel.people.set(properties);
    Sentry.setUser({ id: userId, ...properties });
    logger.info(`User properties set for ${userId}`, properties);
  }
};

export default Analytics;