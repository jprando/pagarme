const { dataResponse } = require('./../utils')

module.exports = dataResponse(({
  services: { transaction },
  params: { id }
}) => transaction.save(/* req.data */))
