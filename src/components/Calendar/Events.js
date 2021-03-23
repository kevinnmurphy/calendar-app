const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

const eventsList = {
  items: [
    {
      id: 1,
      startAt: today,
      endAt: today,
      title: 'Meeting Today',
      description: 'Super important.',
      status: 'none',
    },
    {
      id: 2,
      startAt: tomorrow,
      endAt: tomorrow,
      title: 'Harrison',
      description: 'Special notes',
      type: 'commercial',
      status: 'template',
      sqft: '500',
      sqftConfirm: 'true',
      templateStart: '4',
      templateEnd: '6',
      templateConfirm: 'true',
    },
    {
      id: 3,
      startAt: yesterday,
      endAt: yesterday,
      title: 'Craft',
      description: 'Text',
      status: 'template',
      sqft: '5',
      templateStart: '2',
      templateEnd: '4',
      templateConfirm: 'true',
      installStart: '4',
      installEnd: '6',
      installConfirm: 'true',
    },
    {
      id: 4,
      startAt: tomorrow,
      endAt: tomorrow,
      title: 'Murphy',
      description: 'Drive link',
      status: 'install',
      sqft: '50',
      templateStart: '10',
      templateEnd: '12',
      templateConfirm: 'false',
    },
    {
      id: 5,
      startAt: yesterday,
      endAt: tomorrow,
      title: 'Canpos',
      description: 'Google link',
      status: 'service',
      sqft: '7',
      templateStart: '5',
      templateEnd: '6',
    },
    {
      id: 6,
      startAt: yesterday,
      endAt: yesterday,
      title: 'Cruise',
      description: 'Text',
      status: 'install',
      sqft: '5',
      templateStart: '2',
      templateEnd: '4',
      templateConfirm: 'true',
      installStart: '4',
      installEnd: '6',
      installConfirm: 'false',
    },
  ],
};

export default eventsList;

// title
// type
// status
// sqft

// customer
// -name
// -phone
// -email

// Job
// -contact
// -phone
// -location

// Template
// -confirm
// -start
// -end

// Install
// -confirm
// -start
// -end

// balance collected
//description
