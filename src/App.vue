<template>
  <PageHeader />
  <div class="container">
    <HomePage msg="Dit is mijn eerste Vue-app!" rule1="Ik heb al jaren ervaring (voornamelijk back-end), en altijd met eigen systemen gewerkt." rule2="Maar ik moet toegeven dat dit wel erg gaaf is!, en owja: 'Hello world!'"/>
  </div>
</template> 

<script>
import PageHeader from './components/templates/sections/PageHeader.vue'
import HomePage from './components/HomePage.vue'
 
export default {
  name: 'App',
  components: {
    PageHeader,
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
  body 
  {
    background: rgb(71,94,108);
    background: linear-gradient(0deg, rgba(71,94,108,1) 0%, rgba(20,27,31,1) 100%); 
    background-size:cover;
  }
</style>
