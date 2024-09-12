import Mixpanel from '../services/mixpanel';

export const SignUp = () => {
  const handleSignUp = (user: { id: string; email: string; name: string; plan: string }) => {
    Mixpanel.identify(user.id);
    Mixpanel.people.set({
      '$email': user.email,
      '$name': user.name,
      'Plan': user.plan
    });
    Mixpanel.track('Sign Up', {
      'Source': 'Homepage',
      'Plan': user.plan
    });
  };

  return (
    <div>
      {/* Add your sign-up form here */}
      <button onClick={() => handleSignUp({ id: '123', email: 'test@example.com', name: 'Test User', plan: 'Basic' })}>
        Sign Up
      </button>
    </div>
  );
};