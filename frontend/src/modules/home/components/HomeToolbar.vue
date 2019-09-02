<template>
  <div>
    <!-- Side Navbar -->
    <v-navigation-drawer
      app
      temporary
      fixed
      v-model="sideNav"
    >
      <v-toolbar
        color="blue darken-4"
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
          v-for="item in NavItems"
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
    <v-app-bar
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click="toggleSideNav"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link
          to="/"
          tag="span"
          style="cursor: pointer"
        >+Representações</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- Horizontal Navbar Links -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          text
          v-for="item in NavItems"
          :key="item.title"
          :to="item.link"
          :isLogin="item.isLogin"
        >
          <v-icon
            class="hidden-sm-only"
            left
          >{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>

    </v-app-bar>
  </div>
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
    NavItems () {
      let items = [
        { icon: 'lock_open', title: 'Entrar', link: '/signin' },
        { icon: 'create', title: 'Registrar', link: '/signup' }
      ]
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
