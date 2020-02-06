module.exports = async (service, modelName, actionName = 'getAll', params) => {
  // const result = await service.getAll()
  const result = service[actionName] && await service[actionName](params)
  return (result && result.length && result) || {
    error: true,
    code: 404,
    message: `No ${modelName}`
  }
}
