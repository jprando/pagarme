async function asyncForEach (_arary, callback) {
  for (let index = 0; index < _arary.length; index++) {
    await callback(_arary[index], index, _arary)
  }
}

module.exports = asyncForEach
