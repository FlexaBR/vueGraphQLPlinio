const { getUserId } = require('../../utils')

function user (_, args, ctx, info) {
  const userId = getUserId(ctx)
  return ctx.db.query.user({ where: { id: userId } }, info)
}

function users (_, args, ctx, info) {
  
  return ctx.db.query.users()
}

module.exports = {
  user,
  users
}