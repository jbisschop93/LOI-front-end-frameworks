<template>
  <v-app>
    <v-main>
      <PageHeader/>
      <HomePage msg="hello world" rule1="test" rule2="test2"/>
    </v-main>
    <PageFooter/>
  </v-app>
</template>

<script>
import PageHeader from '@/components/template/sections/PageHeader.vue'
import PageFooter from '@/components/template/sections/PageFooter.vue'
import HomePage from '@/components/pages/HomePage.vue'

export default {
  name: 'App',

  components: {
    PageHeader,
    PageFooter,
    HomePage
  },

  data: () => ({
    //
  }),
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
