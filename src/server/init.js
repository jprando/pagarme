module.exports = function () {
  process.env.PRODUCTION_MODE = process.env.NODE_ENV === 'production'
  process.env.DEVELOPMENT_MODE = process.env.NODE_ENV === 'development'
  process.env.TEST_MODE = process.env.NODE_ENV === 'test'
  Error.stackTraceLimit = process.env.PRODUCTION_MODE ? 0 : 10
}
