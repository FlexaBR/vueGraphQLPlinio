const { getUserId } = require('../../utils')

function createFabrica (_, args, ctx, info) {
  const userId = getUserId(ctx)

  return ctx.db.mutation.createFabrica({
    data: {
      cidade: {
        connect: { id: args.cidadeId }
      },
      situacao: args.situacao,
      razaoSocial: args.razaoSocial,
      fantasia: args.fantasia,
      criadoPor: {
        connect: {
          id: userId
        }
      }
    }
  }, info)
}

module.exports = {
  createFabrica
}
