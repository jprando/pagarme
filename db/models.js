module.exports = {
  register: async ({ db, Sequelize }) => {
    const registerModel = model => { model.register({ db, Sequelize }) }
    const models = await [
      './User'
    ].map(src => require(src))
    models.forEach(registerModel)
  }
}
