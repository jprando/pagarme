const checkStatusCode = result => (result.error && 400) || (result.length && 200) || 404

const dataResponse = load => async (req, res) => {
  const result = await load(req, res)
  const statusCode = checkStatusCode(result)
  res.status(statusCode).send(result).end()
}

module.exports = {
  checkStatusCode,
  dataResponse
}
