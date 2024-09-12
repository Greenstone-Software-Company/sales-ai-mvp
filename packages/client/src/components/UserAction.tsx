import Analytics from '../services/analytics';

export const UserAction = () => {
  const handleUserAction = async (userId: string) => {
    try {
      const result = await performAction(userId);
      Analytics.trackEvent('User Action Completed', { userId, result });
    } catch (error) {
      if (error instanceof Error) {
        Analytics.captureException(error, { userId });
      } else {
        Analytics.captureException(new Error('Unknown error'), { userId });
      }
    }
  };

  return (
    <div>
      {/* Add your user action UI here */}
      <button onClick={() => handleUserAction('123')}>Perform Action</button>
    </div>
  );
};

// Mock function for demonstration
const performAction = async (userId: string) => {
  // Simulate an API call or some action
  return `Action performed for user ${userId}`;
};