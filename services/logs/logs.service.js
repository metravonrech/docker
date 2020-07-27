const db = require('../../db.connection');
const logsSchema = require('./logs.schema')

const logsService = db.createService('logs', logsSchema);

logsService.createLogs = async (logs) => {
  return logsService.create(logs)
};

logsService.getLogs = async () => {
  return logsService.find({})
};

module.exports = logsService