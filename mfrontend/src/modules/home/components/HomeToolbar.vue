<template>
  <v-toolbar
    app
    fixed
    color="primary"
    dark
  >
    <v-toolbar-side-icon @click.stop="$emit('hide', !show)"></v-toolbar-side-icon>
    <v-toolbar-title>+Rep</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
        icon
        @click="entrar"
      >
        <v-icon>account_circle</v-icon>
      </v-btn>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>

export default {
  name: 'HomeToolbar',
  props: {
    show: Boolean
  },
  model: {
    prop: 'show',
    event: 'hide'
  },
  methods: {
    entrar (e) {
      this.$router.push('/login')
    }
  }
}
</script>
