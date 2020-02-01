const { actionForReduce } = require('../../utils')

const action = actionForReduce(__dirname)

module.exports = [
  'postLogin'
].map(action.load).reduce(action.configure, {})
