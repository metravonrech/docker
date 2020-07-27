const connectionString = "mongodb://db/docker";
const db = require('@paralect/node-mongo').connect(connectionString);

module.exports = db;
