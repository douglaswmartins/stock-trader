<template>
  <v-col cols="12" md="6" lg="4">
    <v-card class="blue darken-3 white--text">
      <v-card-title class="headline">
        <strong>
          {{stock.name}}
          <small>
            (Preço: R$ {{ stock.price }} | Qtde: {{ stock.quantity }})
          </small>
        </strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field label="Quantidade" type="number"
          :error="insufficientFunds || quantity < 0 || !Number.isInteger(quantity)"
          v-model.number="quantity" />
        <v-btn class="blue darken-3 white--text ml-2"
          :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)" 
          @click="sellStock()">{{ insufficientFunds ?  'Insuficiente' : 'Vender'}}</v-btn>
      </v-container>
    </v-card>
  </v-col>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  computed: {
    insufficientFunds() {
      return this.quantity > this.stock.quantity
    }
  },
  methods: {
    ...mapActions({ sellStockAction: 'sellStock' }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity : this.quantity
      }
      // this.$store.dispatch('sellStock', order);
      this.sellStockAction(order);
      this.quantity = 0;
    }
  }
}
</script>

<style scoped>

</style>