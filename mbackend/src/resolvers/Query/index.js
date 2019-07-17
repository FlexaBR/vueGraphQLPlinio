const queryInicial = require('./queryInicial')
const cidade = require('./cidade')
const cliente = require('./cliente')
const fabrica = require('./fabrica')
const fatura = require('./fatura')
const itemPedi = require('./itemPedi')
const pedido = require('./pedido')
const preposto = require('./preposto')
const produto = require('./produto')
const user = require('./user')

module.exports = {
   ...queryInicial,


   ...cidade,
   ...cliente,
   ...fabrica,
   ...fatura,
   ...itemPedi,
   ...pedido,
   ...preposto,
   ...produto,
   ...user
}