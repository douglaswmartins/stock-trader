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
      <v-btn text>
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
          <v-list-item>
            <v-list-item-title>Salvar Dados</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Carregar Dados</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <div class="text-uppercase px-4 align-self-center body-2">
        saldo: R$ 10,000
      </div>

    </v-toolbar-items>

  </v-app-bar>
</template>

<script>
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
}
</script>

<style scoped>

</style>