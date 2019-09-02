<template>
  <div>
    <HomeToolbar />
    <main>
      <v-container class="mt-4">
        <v-container text-xs-center>
          <!-- Posts Carousel -->
          <v-flex xs12>
            <v-carousel
              cycle
              interval="4000"
            >
              <v-carousel-item
                v-for="(fabrica,i) in fabricas"
                :key="i"
                :src="fabrica.imageUrl"
              >
                <div id="carousel__title">
                  <h1>{{fabrica.fantasia}}</h1>
                  <h3>{{fabrica.apresentacao}}</h3>
                </div>

              </v-carousel-item>
            </v-carousel>
          </v-flex>
        </v-container>
      </v-container>
    </main>
  </div>
</template>

<script>

import HomeToolbar from './../components/HomeToolbar'

export default {
  name: 'Home',
  components: {
    HomeToolbar
  },
  data () {
    return {
      fabricas: [
        { fantasia: 'Buddemeyer',
          apresentacao: 'Atendemos Rio Grande do Sul, exceto serra e oeste do estado.',
          imageUrl: 'http://hydra.buddemeyer.com.br/portal/images/inicial/index_4.jpg?c=20190827124344' },
        { fantasia: 'DelRio',
          apresentacao: 'Atendemos grande contas no Rio Grande do Sul.',
          imageUrl: 'https://www.delrio.com.br/sites/default/files/styles/1007x450/public/imagem-blog/delrio_9715_posts_blog_noivas_v1_-_post_2_0.png?itok=TARung5O' },
        { fantasia: 'Boutique de Aromas',
          apresentacao: 'Atendemos grande contas no Rio Grande do Sul.',
          imageUrl: 'https://boutiquedearomas.com.br/wp-content/uploads/2019/08/Banner-1.jpg' }
      ]
    }
  }
}

</script>

<style>
h1 {
  font-weight: 400;
  font-size: 2.5rem;
}

h2 {
  font-weight: 400;
  font-size: 2rem;
}

h3 {
  font-weight: 400;
  font-size: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

#carousel__title {
  position: absolute;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 5px 5px 0 0;
  padding: 0.5em;
  margin: 0 auto;
  bottom: 50px;
  left: 0;
  right: 0;
}
</style>
