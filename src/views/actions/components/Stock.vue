<template>
  <v-col cols="12" md="6" lg="4">
    <v-card class="green darken-3 white--text">
      <v-card-title class="headline">
        <strong>{{stock.name}} <small>(Preço: R$ {{stock.price}})</small></strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field label="Quantidade" type="number"
          v-model.number="quantity" />
        <v-btn class="green darken-3 white--text ml-2"
          :disabled="quantity <= 0 || !Number.isInteger(quantity)" 
          @click="buyStock()">Comprar</v-btn>
      </v-container>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity : this.quantity
      }
      this.$store.dispatch('buyStock', order);
      this.quantity = 0;
    }
  }
}
</script>

<style scoped>

</style>