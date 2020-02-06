const { dataResponse } = require('../../utils')

module.exports = dataResponse(async ({
  services: { cashin },
  body
}) => {
  const result = await cashin.create(body)
  return { error: false, code: 201, result }
})
