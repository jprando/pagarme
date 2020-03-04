module.exports = model => {
  if (model) {
    model = model.get({ plain: true })
    model = Object.keys(model)
      .filter(key => model[key] !== null)
      .filter(key => model[key] !== undefined)
      .reduce((acc, key) => {
        acc[key] = model[key]
        return acc
      }, {})
  }
  return model
}
