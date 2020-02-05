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
  for (let index = 0; index < checks.length; index++) {
    const { name, check } = checks[index]
    const customerExists = check[name] && await allCustomers.count({ where: check })
    if (customerExists) {
      return { error: true, message: `There is already a cusomer with this ${name.toUpperCase()}` }
    }
  }

  let newCustomerResult = await customer.create(newCustomer)
  newCustomerResult = newCustomerResult.get({ plain: true })

  delete newCustomerResult.updatedAt
  delete newCustomerResult.createdAt

  return { error: false, code: 201, result: newCustomerResult }
}
