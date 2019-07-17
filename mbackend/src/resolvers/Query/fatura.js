function fatura (_, args, ctx, info) {
  return ctx.db.query.fatura({ where: { id: faturaId } }, info)
}

function faturas (_, args, ctx, info) {
  //return prisma.cidades()
  return ctx.db.query.faturas()
}

module.exports = {
  fatura,
  faturas
}


