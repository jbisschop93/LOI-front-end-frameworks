<template>
    <PreviousPageBar pageTitle="Toegewezen rapportages"  previousRoute="/"/>
    <v-container class="pt-2">
        <ReportsOverview mode="assigned"/>
        <div class="py-4"></div>
    </v-container>
  </template>
  
  <script>
  import PreviousPageBar from '@/components/template/sections/PreviousPageBar'
  import ReportsOverview from '@/components/data/executedreports/ReportsOverview.vue';
  
  export default {
    name: 'PageExecutedReports',
    components: {
        ReportsOverview,
      PreviousPageBar
    },
    props: [
      'menuItems'
    ]
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .v-container, .container h1
  {
    color:#FFFFFF;
  }
  
  .homebuttoncontainer
  {
    margin-bottom:25px;
  }
  </style>
  