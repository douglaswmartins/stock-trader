<template>
  <v-app-bar app>
    <v-toolbar-title class="headline text-uppercase">
      <span>Stock</span>
      <span class="font-weight-light">Trader</span>
    </v-toolbar-title>
    
    <v-divider class="mx-4" vertical></v-divider>

    <v-toolbar-items>
      <v-btn
        text
        v-for="item in navItems"
        :key="item.title"
        :to="item.path"
      >
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn text @click="endDay">
        Finalizar dia
      </v-btn>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn 
            text
            v-bind="attrs"
            v-on="on"
          >
            salvar & carregar
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="saveData">
            <v-list-item-title>Salvar Dados</v-list-item-title>
          </v-list-item>
          <v-list-item @click="loadDataLocal">
            <v-list-item-title>Carregar Dados</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <div class="text-uppercase px-4 align-self-center body-2">
        saldo: {{ funds | currency }}
      </div>

    </v-toolbar-items>

  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      navItems: [
        { title: 'Início', path: '/' },
        { title: 'Portfólio', path: '/portfolio' },
        { title: 'Ações', path: '/actions' }
      ]
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds
    }
  },
  methods: {
    ...mapActions(['randomizeStocks', 'loadData']),
    endDay() {
      this.randomizeStocks()
    },
    saveData() {
      const { funds, stockPortfolio, stocks } = this.$store.getters

      this.$http.put('data.json', { funds, stockPortfolio, stocks })
    },
    loadDataLocal() {
      this.loadData()
    }
  }
}
</script>

<style scoped>

</style>