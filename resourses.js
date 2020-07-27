const userService = require('./services/user/user.service')
const userSchema = require('./services/user/user.schema')
const logsService = require('./services/logs/logs.service')
const logsSchema = require('./services/logs/logs.schema')

module.exports = {
  createUser: async (ctx, next) => {
    if(!ctx.request.body) {
      ctx.body = {
        error: 'request data is empty'
      }
    } else {
      const user = await userService.createUser(ctx.request.body)
      ctx.body = user
    }
  },

  getUser: async (ctx, next) => {
    const user = await userService.getUser()
    ctx.body = user
  },

  createLogs: async (ctx, next) => {
    if(!ctx.request.body.event){
      ctx.body = {
        error: 'event field is required'
      }
    } else {
      const logs = await logsService.createLogs(ctx.request.body)
      ctx.body = logs
    }
  },

  getLogs: async (ctx, next) => {
    const logs = await logsService.getLogs()
    ctx.body = logs
  }
}
