const queryInicial = require('./queryInicial')
const cidade = require('./cidade')
const user = require('./user')

module.exports = {
   ...queryInicial,


   ...cidade,
   ...user
}