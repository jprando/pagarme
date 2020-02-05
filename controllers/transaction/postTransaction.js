const { dataResponse } = require('../../utils')

module.exports = dataResponse(({
  services: { cashin },
  params,
  body
}) => {
  cashin.save(params)
})
