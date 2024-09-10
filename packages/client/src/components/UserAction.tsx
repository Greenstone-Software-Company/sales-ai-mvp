import Analytics from '../services/analytics';

const handleUserAction = async (userId: string) => {
  try {
    const result = await performAction(userId);
    Analytics.trackEvent('User Action Completed', { userId, result });
  } catch (error) {
    Analytics.captureException(error, { userId });
  }
};
