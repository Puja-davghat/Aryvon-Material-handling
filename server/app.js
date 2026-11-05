/**
 * cPanel Phusion Passenger Startup Entrypoint
 * This file allows cPanel Node.js Application Manager to boot server.js seamlessly.
 */

const app = require('./server');

// Phusion Passenger automatically sets process.env.PORT
module.exports = app;

