<template>
  <v-row wrap>
    <Stock
      v-for="stock in stocks"
      :key="stock.id"
      :stock="stock"  
    />
  </v-row>
</template>

<script>
import Stock from './components/Stock'

export default {
  components: { Stock },
  computed: {
    stocks() {
      return this.$store.getters.stocks
    }
  }
}
</script>

<style scoped>

</style>