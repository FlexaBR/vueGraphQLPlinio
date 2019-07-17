<template>
  <v-list two-line>
    <PedidosListItem
      v-for="pedidos in pedidos"
      :key="pedido.id"
      :pedido="pedido"
    />
  </v-list>
</template>

<script>

import PedidosListItem from './PedidosListItem.vue'
import PedidosService from './../services/pedidos-service'

export default {
  name: 'PedidosList',
  components: {
    PedidosListItem
  },
  data: () => ({
    pedidos: []
  }),
  async created () {
    this.pedidos = await PedidosService.pedidos()
  }
}
</script>
