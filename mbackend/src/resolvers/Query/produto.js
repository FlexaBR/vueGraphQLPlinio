function produto (_, args, ctx, info) {
  return ctx.db.query.produto({ where: { id: produtoId } }, info)
}

function produtos (_, args, ctx, info) {
  //return prisma.produtos()
  return ctx.db.query.produtos()
}

module.exports = {
  produto,
  produtos
}


