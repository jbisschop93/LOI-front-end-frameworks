<template>
  <v-app>
    <v-main>
      <PageHeader :menuItems="menuItems"/>
      <HomePage :menuItems="menuItems"/>
    </v-main>
    <PageFooter :menuItems="menuItems"/>
  </v-app>
</template>

<script>
import PageHeader from '@/components/template/sections/PageHeader.vue'
import PageFooter from '@/components/template/sections/PageFooter.vue'
import HomePage from '@/components/pages/HomePage.vue'

export default {
  name: 'App',
  data: () => {
    return {
      menuItems: [
        {
          title: 'Toegewezen rapportages',
          value: 'Comming soon',
          icon: 'fa-solid fa-list-check'
        },
        {
          title: 'Uitgevoerde rapportages',
          value: 'Comming soon',
          icon: 'fa-solid fa-clipboard-check'
        },
        {
          title: 'Kennisbase',
          value: 'Comming soon',
          icon: 'fa-solid fa-graduation-cap'
        },
        {
          title: 'Instellingen',
          value: 'Comming soon',
          icon: 'fa-solid fa-gears'
        }
      ]
    }
  },
  components: {
    PageHeader,
    PageFooter,
    HomePage
  }
}
</script>
<style>
  @import'~bootstrap/dist/css/bootstrap.css';
  html 
  {
    min-height: 100%;
  }
  .v-application 
  {
    background: rgb(71,94,108);
    background: linear-gradient(0deg, rgba(71,94,108,1) 0%, rgba(20,27,31,1) 100%); 
    background-size:cover;
  }
</style>
