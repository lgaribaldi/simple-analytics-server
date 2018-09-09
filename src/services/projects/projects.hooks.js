const { authenticate } = require('@feathersjs/authentication').hooks;
const { setByDot, discard } = require('feathers-hooks-common');

const setLastUpdate = () => (hook) => {    
  setByDot(hook, 'data.lastUpdate', Date.now());
  return hook;  
};

const setEmptyEvents = () => (hook) => {    
  setByDot(hook, 'data.events', []);
  return hook;  
};

const sort = () => (hook) => {    
  setByDot(hook, 'params.query.$sort', {'lastUpdate': -1});
  return hook;  
};

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [ sort() ],
    get: [],
    create: [
      setLastUpdate(),
      setEmptyEvents()],
    update: [setLastUpdate()],
    patch: [setLastUpdate()],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
