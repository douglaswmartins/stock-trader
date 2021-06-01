<template>
  <v-app>
    <Header/>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from './template/Header';

export default {
  components: {Header},
  data() {
    return {
    }
  },
};

</script>

<style scoped>

</style>