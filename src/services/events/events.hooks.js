const { disallow } = require('feathers-hooks-common');

const patchProject = () => (hook) => {

  return hook
    .app
    .service('projects')
    .get(hook.data.projectID)
    .then(project => {
      let newProject = Object.assign({}, project);
      newProject.lastUpdate = Date.now();

      if (project.events.length > 99) {
        newProject.events = project.events.splice(1);
      }
      newProject.events.push(
        {
          dateTime: Date.now(),
          description : hook.data.description,
          ip: hook.params.fromMiddleware
        }
      );

      hook
        .app
        .service('projects')
        .patch(hook.data.projectID, newProject);

      return hook;
    });  
};

module.exports = {
  before: {
    all: [],
    find: [ disallow() ],
    get: [ disallow() ],
    create: [patchProject()],
    update: [ disallow() ],
    patch: [ disallow() ],
    remove: [ disallow() ]
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
