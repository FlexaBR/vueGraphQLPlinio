function fabrica (_, args, ctx, info) {
  return ctx.db.query.fabrica({ where: { id: fabricaId } }, info)
}

function fabricas (_, args, ctx, info) {
  //return prisma.cidades()
  return ctx.db.query.fabricas()
}

module.exports = {
  fabrica,
  fabricas
}


