module.exports = async (service, modelName) => {
  const result = await service.getAll()
  return (result && result.length && result) || {
    error: true,
    code: 404,
    message: `No ${modelName}`
  }
}
