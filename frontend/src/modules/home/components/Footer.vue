<template>
  <v-footer
    app
    color="blue lighten-2"
    dark
  >
    <v-container>
      <v-layout
        row
        align-center
      >
        <v-flex
          xs11
          class="font-weight-thin"
        >
          <div>
            Made with
            <v-icon class="red--text ml-n1 mr-1">mdi-heart</v-icon>
            © Flex@2019
          </div>
        </v-flex>
        <v-flex xs1>
          <v-btn
            fab
            x-small
            color="primary"
            title="Go to top"
            @click="$vuetify.goTo(0)"
          >
            <v-icon>keyboard_arrow_up</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>

  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
