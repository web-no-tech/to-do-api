export default {
  User: {
    properties: {
      id: {
        type: 'string',
        readOnly: true,
      },
      name: {
        type: 'string',
      },
      email: {
        type: 'string',
      },
      password: {
        type: 'string',
        writeOnly: true,
      },
      createdAt: {
        type: 'string',
        example: 'YYYY-MM-DDTHH:MM:SSZ',
        readOnly: true,
      },
      updatedAt: {
        type: 'string',
        example: 'YYYY-MM-DDTHH:MM:SSZ',
        readOnly: true,
      },
    },
  },
};
