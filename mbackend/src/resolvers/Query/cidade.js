function cidade (_, args, ctx, info) {
  return ctx.db.query.cidade({ where: { id: cidadeId } }, info)
}

function cidades (_, args, ctx, info) {
  //return prisma.cidades()
  return ctx.db.query.cidades()
}

module.exports = {
  cidade,
  cidades
}


