const checkStatusCode = result =>
  (result && result.error && (result.code || 400)) ||
  (result && !result.error && (result.length || Object.keys(result).length) && 200) || 404

module.exports = checkStatusCode
