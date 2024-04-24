export default {
  '/users/authenticate': {
    post: {
      tags: ['User'],
      summary: 'Authenticate in application',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              properties: {
                email: {
                  type: 'string',
                },
                password: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Success',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  user: {
                    properties: {
                      id: {
                        type: 'string',
                      },
                      name: {
                        type: 'string',
                      },
                      email: {
                        type: 'string',
                      },
                    },
                  },
                  token: {
                    type: 'string',
                  },
                },
              },
            },
          },
        },
        404: {
          $ref: '#components/responses/404',
        },
        400: {
          $ref: '#components/responses/400',
        },
        401: {
          $ref: '#components/responses/401',
        },
        500: {
          $ref: '#components/responses/500',
        },
      },
    },
  },
  '/users/{id}': {
    patch: {
      security: [{
        jwtAuth: ['bearer'],
      }],
      summary: 'Update user',
      tags: ['User'],
      parameters: [{
        description: 'User ID',
        name: 'id',
        in: 'path',
        required: true,
        schema: {
          $ref: '#components/schemas/User',
        },
      }],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              properties: {
                name: {
                  type: 'string',
                },
                email: {
                  type: 'string',
                },
                password: {
                  type: 'string',
                },
                confirmPassword: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Success',
          content: {
            'application/json': {
              schema: {
                $ref: '#components/schemas/User',
              },
            },
          },
        },
        404: {
          $ref: '#components/responses/404',
        },
        400: {
          $ref: '#components/responses/400',
        },
        401: {
          $ref: '#components/responses/401',
        },
        500: {
          $ref: '#components/responses/500',
        },
      },
    },
    get: {
      tags: ['User'],
      security: [{
        jwtAuth: ['bearer'],
      }],
      summary: 'Get user by ID',
      parameters: [{
        description: 'User ID',
        name: 'id',
        in: 'path',
        required: true,
        schema: {
          $ref: '#components/schemas/User',
        },
      }],
      responses: {
        200: {
          description: 'Success',
          content: {
            'application/json': {
              schema: {
                $ref: '#components/schemas/User',
              },
            },
          },
        },
        400: {
          $ref: '#components/responses/400',
        },
        404: {
          $ref: '#components/responses/404',
        },
        401: {
          $ref: '#components/responses/401',
        },
        500: {
          $ref: '#components/responses/500',
        },
      },
    },
  },
};
