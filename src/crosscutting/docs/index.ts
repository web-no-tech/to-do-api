import users from './users';
import tasks from './tasks';
import common from './common';

export default {
  openapi: '3.0.0',
  info: {
    title: 'Chef Webber API',
    description: 'Chef Webber API documentation.',
    version: '1.0.0',
  },
  servers: [
    {
      description: 'Development',
      url: 'http://localhost:3334/api',
    },
  ],
  paths: {
    ...users.paths,
    ...tasks.paths,
  },
  tags: [
    ...common.tags,
  ],
  components: {
    securitySchemes: {
      ...common.security,
    },
    responses: {
      ...common.responses,
    },
    schemas: {
      ...users.schemas,
      ...tasks.schemas,
      ...common.schemas,
    },
  },
};
