const connectionString = "mongodb://db/dockerArtem";
const db = require('@paralect/node-mongo').connect(connectionString);

module.exports = db;
