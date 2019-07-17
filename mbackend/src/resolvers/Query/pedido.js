function pedido (_, args, ctx, info) {
  return ctx.db.query.pedido({ where: { id: pedidoId } }, info)
}

function pedidos (_, args, ctx, info) {
  //return prisma.pedidos()
  return ctx.db.query.pedidos()
}

module.exports = {
  pedido,
  pedidos
}