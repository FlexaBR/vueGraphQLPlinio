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

function createTeste (_, args, ctx, info) {
  return ctx.db.mutation.createTeste({
    data: {
      tst: args.tst
    }
  }, info)
}

module.exports = {
  createCidade,
  createTeste
}
