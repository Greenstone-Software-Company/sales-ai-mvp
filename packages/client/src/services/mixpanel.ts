import mixpanel from 'mixpanel-browser';

mixpanel.init('YOUR_MIXPANEL_TOKEN'); // Replace with your actual Mixpanel token

const Mixpanel = {
  identify: (id: string) => {
    mixpanel.identify(id);
  },
  track: (name: string, props?: any) => {
    mixpanel.track(name, props);
  },
  people: {
    set: (props: any) => {
      mixpanel.people.set(props);
    },
  },
};

export default Mixpanel;
