const db = require('../../db.connection');
const userSchema = require('./user.schema')

const userService = db.createService('users', userSchema);

userService.createUser = async (user) => {
  return userService.create(user)
};

userService.getUser = async (user) => {
  return userService.find({})
};

module.exports = userService