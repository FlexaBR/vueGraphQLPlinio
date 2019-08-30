<template>
  <v-footer
    app
    class="py-5"
    height="88"
    color="blue lighten-2"
    dark
  >
    <v-container mx-auto>
      <v-layout wrap>
        <v-flex xs9>
          <h5>© 2019 Flexa</h5>
        </v-flex>
        <v-spacer />
        <base-btn
          class="mr-0"
          square
          title="Go to top"
          @click="$vuetify.goTo(0)"
        >
          <v-icon>keyboard_arrow_up</v-icon>
        </base-btn>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
