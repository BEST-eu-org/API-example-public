// Swagger definition
const swaggerDefinition = {
  info: {
    title: 'REST API for my Board of European Students of Technology', 
    version: '1.0.0', 
    description: 'This is the REST API for PA and PWS', 
  },
  host: 'localhost:3000', 
  basePath: '/api', 
};

// options for the swagger docs
exports.options = {
  // import swaggerDefinitions
  swaggerDefinition,
  // path to the API docs
  apis: ['./docs/**/*.yaml'],
};
