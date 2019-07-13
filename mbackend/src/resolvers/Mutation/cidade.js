const { getUserId } = require('../../utils')

function createCidade (_, args, ctx, info) {

  const userId = getUserId(ctx)

  return ctx.db.mutation.createCidade({
    data: {
      nomeCidade: args.nomeCidade,
      estado: args.estado
    }
  }, info)
}

module.exports = {
  createCidade
}
