function cliente (_, args, ctx, info) {
  return ctx.db.query.cliente({ where: { id: clienteId } }, info)
}

function clientes (_, args, ctx, info) {
  return ctx.db.query.clientes()
}

module.exports = {
  cliente,
  clientes
}


