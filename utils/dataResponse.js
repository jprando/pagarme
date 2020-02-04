const checkStatusCode = require('./checkStatusCode')

const dataResponse = load => async (req, res) => {
  try {
    const result = await load(req, res)
    const statusCode = checkStatusCode(result)
    if ([200, 201].includes(statusCode)) {
      delete result.code
      delete result.error
      const response = result.result || result
      res.status(statusCode).json(response).end()
    } else {
      if (process.env.NODE_ENV === 'production' && result.error) {
        res.status(statusCode).end()
      } else {
        const reponse = {
          error: true,
          message: result && result.message,
          errors: result && result.errors
        }
        res.status(statusCode).json(reponse).end()
      }
    }
  } catch (err) {
    if (process.env.NODE_ENV === 'production') {
      res.status(500).end()
    } else {
      res.status(500).json(err.message || err).end()
    }
  }
}

module.exports = dataResponse
