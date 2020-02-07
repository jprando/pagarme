const { dataResponse } = require('../../utils')
const getAll = require('../getData')
const constraints = require('./getCustomerPayables.validation')

module.exports = dataResponse(({
  validate,
  services: { payable },
  params: { ukey, page = 0 }
}) => {
  const errors = validate({ ukey, page }, constraints)
  return !errors
    ? getAll(payable, 'Transactions', 'search', { ukey, page })
    : { error: true, code: 400, errors }
})
