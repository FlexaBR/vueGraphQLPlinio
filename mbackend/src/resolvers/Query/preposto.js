function preposto (_, args, ctx, info) {
  return ctx.db.query.preposto({ where: { id: prepostoId } }, info)
}

function prepostos (_, args, ctx, info) {
  //return prisma.prepostos()
  return ctx.db.query.prepostos()
}

module.exports = {
  preposto,
  prepostos
}


