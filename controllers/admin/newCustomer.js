const { dataResponse } = require('../../utils')
// const newUserConstraints = require('./newUser.validation')

// module.exports = dataResponse(async ({
//   validate,
//   services: { user },
//   body
// }) => {
module.exports = dataResponse(async () => {
  return { inConstruction: true }
})
