const checkStatusCode = require('./checkStatusCode')
const Sequelize = require('sequelize')

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
        const response = {
          error: (result && Boolean(result.error)) || true,
          message: result && result.message,
          errors: result && result.errors
        }
        statusCode === 404 && delete response.error
        res.status(statusCode).json(response).end()
      }
    }
  } catch (err) {
    if (err instanceof Sequelize.ValidationError) {
      const response = {
        error: true,
        message: err.message,
        errors: err.errors.reduce((acc, value) => ({
          ...acc,
          [value.validatorKey]: [value.message]
        }), {})
      }
      if (!response.errors.length) {
        delete response.errors
      }
      res.status(422).json(response).end()
    } else if (process.env.NODE_ENV === 'production') {
      res.status(500).end()
    } else {
      res.status(500).json(err.message || err).end()
    }
  }
}

module.exports = dataResponse
