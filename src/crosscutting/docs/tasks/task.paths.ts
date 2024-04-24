export default {
  '/tasks': {
    post: {
      tags: ['Task'],
      summary: 'Create task',
      security: [{
        jwtAuth: ['bearer'],
      }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#components/schemas/Task',
            },
          },
        },
      },
      responses: {
        201: {
          description: 'Success',
          content: {
            'application/json': {
              schema: {
                $ref: '#components/schemas/Task',
              },
            },
          },
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
      tags: ['Task'],
      summary: 'Get tasks',
      parameters: [
        {
          description: 'Items per page',
          name: 'pageSize',
          in: 'query',
          required: true,
          schema: {
            $ref: '#components/schemas/Task',
          },
        },
        {
          description: 'Current page',
          name: 'page',
          in: 'query',
          required: true,
          schema: {
            $ref: '#components/schemas/Task',
          },
        },
        {
          description: 'Search by name',
          name: 'search',
          in: 'query',
          required: false,
          schema: {
            $ref: '#components/schemas/Task',
          },
        },
        {
          description: 'Ordering of items',
          name: 'sort',
          in: 'query',
          required: false,
          style: 'form',
          schema: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
      ],
      responses: {
        200: {
          description: 'Success',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: {
                    type: 'array',
                    items: {
                      $ref: '#components/schemas/Task',
                    },
                  },
                  pages: {
                    type: 'integer',
                  },
                  items: {
                    type: 'integer',
                  },
                },
              },
            },
          },
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

  '/tasks/{id}': {
    get: {
      tags: ['Task'],
      summary: 'Get task by ID',
      parameters: [
        {
          description: 'Task ID',
          name: 'id',
          in: 'path',
          required: true,
          schema: {
            $ref: '#components/schemas/Task',
          },
        },
      ],
      responses: {
        200: {
          description: 'Success',
          content: {
            'application/json': {
              schema: {
                $ref: '#components/schemas/Task',
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

    patch: {
      tags: ['Task'],
      summary: 'Update task',
      security: [{
        jwtAuth: ['bearer'],
      }],
      parameters: [
        {
          description: 'Task ID',
          name: 'id',
          in: 'path',
          required: true,
          schema: {
            $ref: '#components/schemas/Task',
          },
        },
      ],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: '#components/schemas/Task',
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
                $ref: '#components/schemas/Task',
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

    delete: {
      tags: ['Task'],
      summary: 'Delete task',
      security: [{
        jwtAuth: ['bearer'],
      }],
      parameters: [
        {
          description: 'Task ID',
          name: 'id',
          in: 'path',
          required: true,
          schema: {
            $ref: '#components/schemas/Task',
          },
        },
      ],
      responses: {
        200: { description: 'Success' },
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

  '/tasks/{id}/toggle-concluded': {
    patch: {
      tags: ['Task'],
      summary: 'Toggle concluded task',
      security: [{
        jwtAuth: ['bearer'],
      }],
      parameters: [
        {
          description: 'Task ID',
          name: 'id',
          in: 'path',
          required: true,
          schema: {
            $ref: '#components/schemas/Task',
          },
        },
      ],
      responses: {
        200: {
          description: 'Success',
          content: {
            'application/json': {
              schema: {
                $ref: '#components/schemas/Task',
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
