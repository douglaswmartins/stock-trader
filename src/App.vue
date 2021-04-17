<template>
  <v-app>
    <v-app-bar app >
      <v-toolbar-title>
        <strong>STOCK</strong>TRADER
      </v-toolbar-title>
      
      <v-divider class="mx-4" vertical></v-divider>

      <v-toolbar-items>
        <v-btn text v-for="item in navItems" :key="item.title">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text>
          Finalizar dia
        </v-btn>

        <v-btn text>
          salvar & carregar
        </v-btn>

        <div class="text-uppercase px-4 align-self-center body-2">
          saldo: R$ 10,000
        </div>

      </v-toolbar-items>

    </v-app-bar>

    <v-content>
      <!-- <router-view></router-view> -->
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {
      navItems: [
          { title: 'Início', path: '/' },
          { title: 'Portfólio', path: '/' },
          { title: 'Ações', path: '/' }
     ]
    }
  },
};

</script>

<style scoped>

</style>