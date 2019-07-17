<template>
  <h1>Teste PedidosListItem</h1>
</template>

<script>

import formatCurrencyMixin from '@/mixins/format-currency'

export default {
  name: 'PedidosListItem',
  mixins: [
    formatCurrencyMixin
  ],
  props: {
    pedido: Object
  }
}
</script>
