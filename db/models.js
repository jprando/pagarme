module.exports = {
  register: async ({ db, Sequelize }) => {
    const registerModel = model => model.register({ db, Sequelize });
    [
      './User'
    ].map(src => require(src)).forEach(registerModel)
  }
}
