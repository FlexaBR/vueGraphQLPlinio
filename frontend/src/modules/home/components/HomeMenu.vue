<template>
  <!-- Side Navbar -->
  <v-navigation-drawer
    app
    temporary
    fixed
    v-model="sideNav"
  >
    <v-toolbar
      color="accent"
      dark
      flat
    >
      <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
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

</template>

<script>

export default {
  name: 'HomeMenu',
  data () {
    return {
      sideNav: false,
      user: {}
    }
  },
  computed: {
    sideNavItems () {
      let items = [
        { icon: 'create', title: 'Fábricas', link: '/', exact: true },
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
    toggleSideNav () {
      this.sideNav = !this.sideNav
    }
  }
}

</script>
