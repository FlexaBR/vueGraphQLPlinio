
function cidades (_, args, ctx, info) {
  //return prisma.cidades()
  return ctx.db.query.cidades()
}


function testes (_, args, ctx, info) {
  
  return ctx.db.query.testes()
}

module.exports = {
  cidades,
  testes
}