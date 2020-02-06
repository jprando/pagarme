module.exports = async (id, service, modelName) => {
  if (id <= 0) {
    return { error: true, code: 400, message: `${modelName} Id must be positive number` }
  }

  const _200OK = {
    error: false,
    code: 200,
    message: `${modelName} with ID ${id} deleted successfully`
  }

  const _404NOTFOUND = {
    error: true,
    code: 404,
    message: `${modelName} with id ${id} NOT found`
  }

  return service.delete(id)
    .then(deleted => (deleted && _200OK) || _404NOTFOUND)
}
