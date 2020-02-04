const checkStatusCode = require('./checkStatusCode')

const dataResponse = load => async (req, res) => {
  try {
    const result = await load(req, res)
    const statusCode = checkStatusCode(result)
    if (statusCode === 200) {
      delete result.code
      res.status(statusCode).json(result).end()
    } else {
      if (process.env.NODE_ENV === 'production' && result.error) {
        res.status(statusCode).end()
      } else {
        const reponse = {
          error: true,
          message: result.message,
          errors: result.errors
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