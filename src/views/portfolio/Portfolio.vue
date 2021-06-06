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
import { mapGetters } from 'vuex'
import Stock from './components/Stock'

export default {
  components: { Stock },
  computed: {
    ...mapGetters({ stocks: 'stockPortifolio' })
  }
}
</script>

<style scoped>

</style>