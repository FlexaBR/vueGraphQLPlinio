const { getUserId } = require('../../utils')

function deleteUser (_, { id }, ctx, info) {

  const { getUserId } = require('../../utils')

  return ctx.db.mutation.deleteUser({ where: { id } })
}

module.exports = {
  deleteUser
}
