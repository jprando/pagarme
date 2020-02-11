module.exports = (id, service, modelName) => {
  if (id <= 0) {
    return {
      error: true,
      code: 422,
      message: `${modelName} Id must be a positive number`
    }
  }

  return id &&
    service &&
    service.getById &&
    service.getById(id)
      .then(model => model || {
        error: true,
        code: 404,
        message: `${modelName} not found`
      })
}