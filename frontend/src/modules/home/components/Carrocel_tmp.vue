<template>
  <v-container
    id="Carrocel"
    class="mt-4"
  >
    <v-fade-transition>
      <v-container text-xs-center>
        <!-- Posts Carousel -->
        <v-flex xs12>
          <v-carousel
            cycle
            interval="5000"
          >
            <v-carousel-item
              v-for="(fabrica,i) in fabricas"
              :key="i"
              :src="fabrica.imageUrl"
            >
              <h1 id="carousel__title">{{fabrica.fantasia}}</h1>

            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-container>
    </v-fade-transition>
  </v-container>
</template>
