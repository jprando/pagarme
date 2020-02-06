module.exports = async (service, modelName, actionName = 'getAll', params) => {
  // const result = await service.getAll()
  let result = null
  if (service[actionName]) {
    result = await service[actionName](params)
  }

  const returnValue = (result && result.length && result) || {
    error: true,
    code: 404,
    message: `No ${modelName}`
  }
  return returnValue
}
