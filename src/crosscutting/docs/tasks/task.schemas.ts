export default {
  Task: {
    readOnly: true,
    properties: {
      id: {
        type: 'string',
        readOnly: true,
      },
      name: {
        type: 'string',
      },
      concluded: {
        type: 'boolean',
        readOnly: true,
      },
      createdAt: {
        type: 'string',
        format: 'date-time',
        readOnly: true,
      },
      updatedAt: {
        type: 'string',
        format: 'date-time',
        readOnly: true,
      },
    },
  },
};
