module.exports = {
  register: async ({ db, Sequelize }) => {
    const registerModel = model => model.register({ db, Sequelize });
    [
      './User',
      './Customer'
    ].map(src => require(src))
      .forEach(registerModel)
  }
}
