const { dataResponse } = require('../../utils')
// const newUserConstraints = require('./newUser.validation.json')

// module.exports = dataResponse(async ({
//   validate,
//   services: { user },
//   body
// }) => {
module.exports = dataResponse(async () => {
  return { inConstruction: true }
})
