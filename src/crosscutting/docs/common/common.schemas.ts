export default {
  Error: {
    properties: {
      message: {
        type: 'string',
      },
      statusCode: {
        type: 'integer',
        writeOnly: true,
      },
    },
  },
};
