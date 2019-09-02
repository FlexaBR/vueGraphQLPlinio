<template>
  <section>
    <v-layout
      column
      wrap
      class="my-6"
      align-center
    >
      <v-flex
        xs12
        sm4
        class="my-4"
      >
        <div class="text-center">
          <h2 class="headline">As melhores marcas e condições para o sucesso da sua loja</h2>
          <span class="subheading">
            Acesse nosso <a href="Signup">app</a> para produtos, orçamentos, pedidos e muito mais.
          </span>
        </div>
      </v-flex>
      <br>
      <v-flex xs12>
        <v-container grid-list-xl>
          <v-layout
            row
            wrap
            align-center
          >
            <v-flex
              xs12
              md4
            >
              <v-card
                tile
                class="transparent"
              >
                <v-card-text class="text-center">
                  <v-icon
                    x-large
                    class="blue--text text--lighten-2"
                  >mdi-hotel</v-icon>
                </v-card-text>

                <v-carousel
                  cycle
                  interval="5000"
                  :show-arrows="false"
                  height="300"
                >
                  <v-carousel-item
                    v-for="(slideBudd,i) in slideBudds"
                    :key="i"
                    :src="slideBudd.imageUrl"
                  >
                    <div>
                      <h1 id="carousel__title">{{slideBudd.fantasia}}</h1>
                      <p id="carousel__title2">Atendemos litoral, regiões metropolitana e sul do Rio Grande do Sul.</p>
                    </div>
                  </v-carousel-item>
                </v-carousel>
              </v-card>
            </v-flex>
            <v-flex
              xs12
              md4
            >
              <v-card
                tile
                class="transparent"
              >
                <v-card-text class="text-center">
                  <v-icon
                    x-large
                    class="blue--text text--lighten-2"
                  >mdi-tshirt-v</v-icon>
                </v-card-text>
                <v-carousel
                  cycle
                  interval="5000"
                  :show-arrows="false"
                  height="300"
                >
                  <v-carousel-item
                    v-for="(slideDelrio,i) in slideDelrios"
                    :key="i"
                    :src="slideDelrio.imageUrl"
                  >
                    <div>
                      <h1 id="carousel__title">{{slideDelrio.fantasia}}</h1>
                      <p id="carousel__title2">Atendemos Rio Grande do Sul.</p>
                    </div>
                  </v-carousel-item>
                </v-carousel>
              </v-card>
            </v-flex>
            <v-flex
              xs12
              md4
            >
              <v-card
                tile
                class="transparent"
              >
                <v-card-text class="text-center">
                  <v-icon
                    x-large
                    class="blue--text text--lighten-2"
                  >mdi-leaf</v-icon>
                </v-card-text>
                <v-carousel
                  cycle
                  interval="5000"
                  :show-arrows="false"
                  height="300"
                >
                  <v-carousel-item
                    v-for="(slideBoutique,i) in slideBoutiques"
                    :key="i"
                    :src="slideBoutique.imageUrl"
                  >
                    <div>
                      <h1 id="carousel__title">{{slideBoutique.fantasia}}</h1>
                      <p id="carousel__title2">Atendemos as regiões metropolitana e litoral do Rio Grande do Sul.</p>
                    </div>
                  </v-carousel-item>
                </v-carousel>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import { scrypt } from 'crypto';

export default {
  name: 'Representadas',
  data () {
    return {
      slideBudds: [
        {          fantasia: 'Buddemeyer',
          imageUrl: 'http://hydra.buddemeyer.com.br/portal/images/inicial/index_5.jpg?c=20190901080715'        },
        {          fantasia: 'Buddemeyer',
          imageUrl: 'http://www.buddemeyer.com.br/content/uploads/2013/01/Dual-ambientada-2019-1270x758.jpg'        },
        {          fantasia: 'Buddemeyer',
          imageUrl: 'http://www.buddemeyer.com.br/content/uploads/2012/08/Princess-2019-1270x758.jpg'        }
      ],
      slideDelrios: [
        {          fantasia: 'DelRio',
          imageUrl: 'https://www.delrio.com.br/sites/default/files/styles/460x750/public/delrio_9471_banner_vertical_2_460x750_v1.png'        },
        {          fantasia: 'Rio Man',
          imageUrl: 'https://www.delrio.com.br/sites/default/files/styles/1007x450/public/imagem-blog/delrio_9715_posts_blog_noivas_v1_-_post_2_0.png?itok=TARung5O'        },
        {          fantasia: 'DelRio',
          imageUrl: 'https://www.delrio.com.br/sites/default/files/styles/325x320/public/3Untitled-2.jpg'        }
      ],
      slideBoutiques: [
        {          fantasia: 'Boutique de Aromas',
          imageUrl: 'https://boutiquedearomas.com.br/wp-content/uploads/2017/08/boutiquedearomas-kit-divina-300x300.jpg'        },
        {          fantasia: 'Boutique de Aromas',
          imageUrl: 'https://boutiquedearomas.com.br/wp-content/uploads/2017/08/wedding-95ml-caixa-300x300.jpg'        },
        {          fantasia: 'Boutique de Aromas',
          imageUrl: 'https://boutiquedearomas.com.br/wp-content/uploads/2018/11/kit-casa-alegre-capim-linao-768x768.jpg'        }
      ]
    }
  }
}
</script>

<style>
#carousel__title {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 5px 5px 0 0;
  padding: 0.5em;
  margin: 0 auto;
  bottom: 50px;
  left: 0;
  right: 0;
}
#carousel__title2 {
  position: absolute;
  color: white;
  border-radius: 5px 5px 0 0;
  padding: 0.5em;
  margin: 0 auto;
  margin-left: 10px;
  bottom: 50px;
  left: 0;
  right: 0;
  font-size: 10px;
}
</style>
