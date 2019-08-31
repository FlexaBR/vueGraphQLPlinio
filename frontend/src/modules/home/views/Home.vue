<template>

  <v-container>
    <HomeToolbar />
    <v-content>
      <section>
        <v-container grid-list-xl>
          <v-flex xs-12>
            <Banner />
          </v-flex>
        </v-container>
      </section>
      <About />
      <Contact />
    </v-content>

    <Footer />
  </v-container>
</template>

<script>

import About from './../components/About'
import Banner from './../components/Banner'
import Contact from './../components/Contact'
import Footer from './../components/Footer'
import HomeToolbar from './../components/HomeToolbar'

export default {
  name: 'Home',
  components: {
    About,
    Banner,
    Contact,
    Footer,
    HomeToolbar
  },
  data () {
    return {
      fabricas: [
        {          fantasia: 'Buddemeyer',
          apresentacao: 'Atendemos na capital, litoral, regiões metropolitana e sul do Rio Grande do Sul.',
          imageUrl: 'http://hydra.buddemeyer.com.br/portal/images/inicial/index_4.jpg?c=20190827124344'        },
        {          fantasia: 'DelRio',
          apresentacao: 'Atendemos Rio Grande do Sul.',
          imageUrl: 'https://www.delrio.com.br/sites/default/files/styles/1007x450/public/imagem-blog/delrio_9715_posts_blog_noivas_v1_-_post_2_0.png?itok=TARung5O'        },
        {          fantasia: 'Boutique de Aromas',
          apresentacao: 'Atendemos Rio Grande do Sul.',
          imageUrl: 'https://boutiquedearomas.com.br/wp-content/uploads/2019/08/Banner-1.jpg'        }
      ]
    }
  }
}

</script>

<style>
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
