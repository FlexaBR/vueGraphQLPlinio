const mutationInicial = require('./mutationInicial')
const cidade = require('./cidade')
const user = require('./user')

module.exports = {
  ...mutationInicial,

  ...cidade,
  ...user
}