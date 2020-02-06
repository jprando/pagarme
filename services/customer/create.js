const { Op } = require('sequelize')

module.exports = async function (newCustomer) {
  const { db: { user, customer, toPlain } } = this

  const { email, cpf, cnpj, ukey } = newCustomer
  const checkValues = [{ email }, { cpf }, { cnpj }, { ukey }]
  const checkCustomerExists = await customer.scope('allCustomers').count({
    where: {
      [Op.or]: checkValues.filter(value => Object.values(value)[0])
    }
  })
  if (checkCustomerExists) {
    return {
      error: true,
      message: 'Customer already exists with this email, cpf, cnpj or ukey'
    }
  }

  const userUkeyExists = await user.count({ where: { ukey: ukey } })
  if (!userUkeyExists) {
    return {
      error: true,
      message: 'uKey informed not have active User relactionated'
    }
  }

  return customer.create(newCustomer).then(toPlain)
}
