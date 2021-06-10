<template>
  <v-app>
    <Header/>

    <v-main>
      <v-container>
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from './template/Header';

export default {
  components: {Header},
  created() {
    this.$store.dispatch('initStocks')
  },
};

</script>

<style scoped>
  @keyframes slide-in {
    from { transform: translateY(-30px); opacity: 0; }
    to { transform: translateY(0px); opacity: 1; }
  }

  @keyframes slide-out {
    form { transform: translateY(0px); opacity: 1; }
    to { transform: translateY(-30px); opacity: 0; }
  }

  .slide-enter-active {
    animation: slide-in 300ms ease;
  }

  .slide-leave-active {
    animation: slide-out 300ms ease;
  }
</style>