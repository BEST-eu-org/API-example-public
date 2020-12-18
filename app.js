const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const swagger = require('./swagger.config.js');
const swaggerUi = require('swagger-ui-express'); // bind swagger with express and show the ui
const swaggerJsdoc = require('swagger-jsdoc'); // for api documentation

// activate the environment variables
require('dotenv').config();

// enable the json/form parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// define the root path to be used throughout the project
global.rootPath = __dirname+"/";


// initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(swagger.options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
//Static files
app.use(express.static('public'));


/***** Routes *****/
// Send all requests starting with 'api/' to index.js in routes where it will be further routed
app.use('/api/', require('./routes'));


module.exports = app;

