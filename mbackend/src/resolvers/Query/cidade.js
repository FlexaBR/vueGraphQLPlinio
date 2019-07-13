
function cidades (_, args, ctx, info) {
  //return prisma.cidades()
  return ctx.db.query.cidades()
}

module.exports = {
  cidades
}