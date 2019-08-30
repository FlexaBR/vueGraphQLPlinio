<template>
  <v-container
    id="contact"
    tag="section"
  >
    <base-card
      color="rgba(203, 170, 92, 0.51)"
      class="pa-3"
    >
      <v-container
        grid-list-xl
        pa-0
      >
        <v-layout wrap>
          <v-flex
            xs12
            md6
            offset-md1
          >
            <h4>Contato</h4>
            <v-list class="transparent">
              <v-list-item>
                <v-list-item-icon color="primary">
                  <v-icon
                    class="elevation-4"
                    dark
                  >
                    email
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-title>email</v-list-item-title>
                <v-list-item-subtitle>
                  thais@maisrep.com.br
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon color="primary">
                  <v-icon
                    class="elevation-4"
                    dark
                  >
                    phone
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-title>Telefone</v-list-item-title>
                <v-list-item-subtitle>
                  (51) 99621-5710
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-flex>
        </v-layout>
      </v-container>
    </base-card>
  </v-container>
</template>

<style>
h3 {
  font-weight: 400;
  font-size: 2rem;
}
</style>
