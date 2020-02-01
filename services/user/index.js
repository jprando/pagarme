module.exports = {
  login: async function (email, password) {

    /// TODO: validar parametros de entrada
    const { models: { user } } = this.db
    const result = await user.findOne({ where: { email: email } })

    /// comparar senha utilizando a lib bcrypt
    if (result && result.password === password) {
      return { result: 'tokensinistro' }
    }
    return { result: 'tokenvazio' }
  }
}
