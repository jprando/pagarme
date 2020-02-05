module.exports = function (Sequelize, valueDescription, fieldName, fieldDescription) {
  const emptyValues = [null, undefined, '']
  return function (value) {
    value = value && value.trim()
    const otherValue = this[fieldName] && this[fieldName].trim()
    const message = `${valueDescription} informed, inform ${fieldDescription} also`
    if (!emptyValues.includes(value) &&
         emptyValues.includes(otherValue && otherValue)) {
      throw new Sequelize.ValidationError(message)
    }
  }
}
