const path = require('path')
const loadModule = require('./loadModule')

const mapForReduce = (basePath, keyLess = false) => ({
  load: src => {
    if (keyLess) {
      return value => ({ ...value, ...loadModule(path.resolve(basePath, src)) })
    }
    return value => ({ ...value, [src]: loadModule(path.resolve(basePath, src)) })
  },
  configure: (accumulator, mergeAction) => mergeAction(accumulator)
})

module.exports = mapForReduce

/**
 * Example of utilization
 *

 const { mapForReduce } = require('./utils')
 const factory = mapForReduce(__dirname)
 module.exports = [
   'module1',
   'module2',
   ...
   'moduleN',
 ].map(factory.load).reduce(factory.configure, {})

 * result in

 module.exports = {
   module1: { a: 1, b: 2, c: 3 },
   module2: { d: 4, e: 5, f: 6 },
   ...
   moduleN: { x: 7, y: 8, z: 9 }
 }

 * with keyLess true result in

 module.exports = {
   a: 1, b: 2, c: 3,
   d: 4, e: 5, f: 6
   ...
   x: 7, y: 8, z: 9
 }

 *
 */
