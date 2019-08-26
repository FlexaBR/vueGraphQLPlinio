<template>
  <v-card
    flat
    tile
  >
    <!-- Side Navbar -->
    <v-navigation-drawer
      temporary
      fixed
      v-model="sideNav"
    >
      <v-toolbar
        color="accent"
        dark
        flat
      >
        <v-app-bar-nav-icon @click="toggleSideNav"></v-app-bar-nav-icon>
        <router-link
          to="/"
          tag="span"
          style="cursor: pointer"
        >
          <h1 class="title pl-3">+Rep</h1>
        </router-link>
      </v-toolbar>
      <v-divider></v-divider>
      <!-- Side Navbar Links -->
      <v-list>
        <v-list-item
          ripple
          v-for="item in sideNavItems"
          :key="item.title"
          :to="item.link"
          :exact="item.exact"
        >
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>{{item.title}}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Horizontal Navbar -->
    <v-toolbar
      fixed
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="toggleSideNav"></v-app-bar-nav-icon>
      <v-toolbar-title class="hidden-xs-only">
        <router-link
          to="/"
          tag="span"
          style="cursor: pointer"
        >MaisRep</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- Horizontal Navbar Links -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          text
          v-for="item in horizontalNavItems"
          :key="item.title"
          :to="item.link"
        >
          <v-icon
            class="hidden-sm-only"
            left
          >{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>

      <v-toolbar-items>
        <v-btn
          icon
          @click="entrar"
        >
          <v-icon>account_circle</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-card>
</template>

<script>

export default {
  name: 'HomeToolbar',
  data () {
    return {
      sideNav: false,
      user: {}
    }
  },
  props: {
    show: Boolean
  },
  model: {
    prop: 'show',
    event: 'hide'
  },
  computed: {
    horizontalNavItems () {
      let items = [
        { icon: 'chat', title: 'Contato', link: '/' }
      ]
      return items
    },
    sideNavItems () {
      let items = [
        { icon: 'chat', title: 'Contato', link: '/', exact: true }
      ]
      if (this.user) {
        items = [
          { icon: 'create', title: 'Fábricas', link: '/', exact: true },
          { icon: 'chat', title: 'Pedidos', link: '/pedidos', exact: true }
        ]
      }
      return items
    }
  },
  methods: {
    entrar (e) {
      this.$router.push('/login')
    },
    toggleSideNav () {
      this.sideNav = !this.sideNav
    }
  }
}

</script>
