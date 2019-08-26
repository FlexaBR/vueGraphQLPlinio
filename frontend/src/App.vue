<template>
  <v-app style="background: #E3E3EE">

    <router-view />

  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  })
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
</style>
