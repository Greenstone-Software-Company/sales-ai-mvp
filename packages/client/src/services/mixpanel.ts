import mixpanel from 'mixpanel-browser';

mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || '');

interface Properties {
  [key: string]: string | number | boolean;
}

const Mixpanel = {
  identify: (id: string) => {
    mixpanel.identify(id);
  },
  track: (name: string, props?: Properties) => {
    mixpanel.track(name, props);
  },
  people: {
    set: (props: Properties) => {
      mixpanel.people.set(props);
    },
  },
};

export default Mixpanel;