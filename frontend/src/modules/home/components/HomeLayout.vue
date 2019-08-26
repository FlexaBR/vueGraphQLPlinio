<template>
  <div>
    <HomeToolbar />
    <main>
      <v-container class="mt-4">
        <v-carousel name="fade">
          <v-container text-xs-center>

            <!-- Posts Carousel -->
            <v-flex xs12>
              <v-carousel
                v-bind="{ 'cycle': true }"
                interval="3000"
              >
                <v-carousel-item
                  v-for="item in listaFabricas"
                  :key="item.title"
                  :src="item.imageUrl"
                >
                  >
                  <h1 id="carousel__title">{{post.title}}</h1>
                </v-carousel-item>
              </v-carousel>
            </v-flex>
          </v-container>
        </v-carousel>

      </v-container>
    </main>
  </div>
</template>

<script>
import HomeToolbar from './HomeToolbar.vue'

export default {
  name: 'HomeLayout',
  components: {
    HomeToolbar
  },
  computed: {
    listaFabricas () {
      let items = [
        { title: 'Buddemeyer', imageUrl: '/' }
      ]
      return items
    },
  }
}
</script>
