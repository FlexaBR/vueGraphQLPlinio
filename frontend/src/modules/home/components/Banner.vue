<template>
  <v-card
    dark
    tile
    flat
  >
    <v-parallax
      class="grey lighten-2"
      height="400"
      width="100%"
      :src="require('./../../../assets/home/budd/Imagem1.jpg')"
    >
      <v-layout
        fill-height
        align-end
        pa-3
      >
        <v-flex
          xs12
          md7
          ml-3
          offset-md1
        >
          <h1 class="display-3 font-weight-light">
            Mais Rep
          </h1>
          <div class="subheading pl-2 mb-4">
            A Arte de Comprar Bem
          </div>
        </v-flex>
      </v-layout>
    </v-parallax>
  </v-card>
</template>
