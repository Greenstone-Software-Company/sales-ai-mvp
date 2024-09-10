import Mixpanel from '../services/mixpanel';

const handleSignUp = (user: User) => {
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
