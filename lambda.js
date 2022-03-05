const serverless = require('serverless-http');
const load = require('./build/app'); //TODO change this

const app = load.default;

module.exports.handler = serverless(app, {
  binary: ['application/pdf', 'image/png', 'image/jpg', 'image/jpeg', 'multipart/form-data'],
});
