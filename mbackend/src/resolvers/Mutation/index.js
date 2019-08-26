const mutationInicial = require('./mutationInicial')
const cidade = require('./cidade')
const fabrica = require('./fabrica')
const user = require('./user')

module.exports = {
  ...mutationInicial,
  ...cidade,
  ...fabrica,
  ...user
}