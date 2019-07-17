function itemPedi (_, args, ctx, info) {
  return ctx.db.query.itemPedi({ where: { id: itemPediId } }, info)
}

function itemPedis (_, args, ctx, info) {
  //return prisma.itemPedis()
  return ctx.db.query.itemPedis()
}

module.exports = {
  itemPedi,
  itemPedis
}


