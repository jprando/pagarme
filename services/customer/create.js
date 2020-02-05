module.exports = async function (newCustomer) {
  const { db: { customer } } = this

  const customerExists = await customer.scope('allCustomers').count({
    where: {
      $or: [
        { email: newCustomer.email },
        { cpf: newCustomer.cpf },
        { cnpj: newCustomer.cnpj }
      ]
    }
  })

  if (customerExists) {
    return { error: true, message: 'There is already a cusomer with this email, CPF or CNPJ' }
  }

  let newCustomerResult = await customer.create(newCustomer)
  newCustomerResult = newCustomerResult.get({ plain: true })

  delete newCustomerResult.updatedAt
  delete newCustomerResult.createdAt

  return { error: false, code: 201, result: newCustomerResult }
}
