<template>
  <v-app-bar
    app
    :height="$vuetify.breakpoint.mdAndUp ? 68 : 58"
    elevate-on-scroll
    v-scroll="onScroll"
    :color="!isScrolling ? 'rgba(47, 59, 126, .2)' : 'rgba(47, 59, 126, .7)'"
  >
    <v-img
      class="shrink"
      max-width="40%"
      :src="!isScrolling ? require('@/assets/logoM.png') : require('@/assets/logoMB.png')"
      width="180"
    />
    <v-spacer />
    <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        text
        dark
      >
        <span v-text="item.text" />
      </v-btn>
      <v-spacer />

      <v-btn
        class="ml-n2"
        text
        to="/login"
        dark
      >
        <v-icon class="mr-1">
          mdi-account-circle
        </v-icon>Entrar
      </v-btn>
    </v-toolbar-items>
    <v-app-bar-nav-icon
      v-else
      @click="toggleDrawer"
      dark
    ></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
// Utilities
import { mapMutations } from 'vuex'

export default {
  data: () => ({
    isScrolling: false
  }),

  computed: {
    items () {
      return [
        {
          'to': '/',
          'text': 'Home'
        },
        {
          'to': '/contact',
          'text': 'Contato'
        }
      ]
    }
  },

  methods: {
    ...mapMutations(['toggleDrawer']),
    onScroll () {
      this.isScrolling = (window.pageYOffset ||
        document.documentElement.scrollTop || 0) > 25
    }
  }
}
</script>
