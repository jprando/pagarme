module.exports = (id, service, modelName) =>
  id &&
  service &&
  service.getById &&
  service.getById(id)
    .then(model => model || {
      error: true,
      code: 404,
      message: `${modelName} not found`
    })
