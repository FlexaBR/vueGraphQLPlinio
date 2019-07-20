<template>
  <div>
    <HomeToolbar v-model="drawer" />
    <HomeMenu v-model="drawer" />

    <v-container grid-list-md>
      <v-layout>
        <v-flex xs12>
          <slot />
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
import HomeMenu from './HomeMenu.vue'
import HomeToolbar from './HomeToolbar.vue'

export default {
  name: 'HomeLayout',
  components: {
    HomeMenu,
    HomeToolbar
  },
  data: () => ({
    drawer: false
  })
}
</script>
