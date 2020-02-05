// const Sequelize = require('sequelize')

module.exports = async function (newCustomer) {
  const { db: { customer } } = this

  const { email, cpf, cnpj } = newCustomer
  const allCustomers = customer.scope('allCustomers')

  const checks = [
    { name: 'email', check: { email } },
    { name: 'cpf', check: { cpf } },
    { name: 'cnpj', check: { cnpj } }
  ]
  const errors = []
  for (let index = 0; index < checks.length; index++) {
    const { name, check } = checks[index]
    const customerExists = check[name] && await allCustomers.count({ where: check })
    if (customerExists) {
      errors.push(`There is already a customer with this ${name.toUpperCase()}`)
    }
  }
  if (errors.length) {
    return { error: true, errors: { customerAlreadyExists: errors } }
  }

  let newCustomerResult = await customer.create(newCustomer)
  newCustomerResult = newCustomerResult.get({ plain: true })

  return { error: false, code: 201, result: newCustomerResult }
}
