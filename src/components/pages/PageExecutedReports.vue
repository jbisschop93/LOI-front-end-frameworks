<template>
    <the-previous-page-bar 
      page-title="Uitgevoerde rapportages" 
      previous-route="/"
    />
    <v-container 
      class="pt-2"
    >
        <reports-overview 
          mode="executed"
        />
        <div class="py-4"></div>
    </v-container>
  </template>
  
  <script>
  import ThePreviousPageBar from '@/components/template/sections/ThePreviousPageBar'
  import ReportsOverview from '@/components/data/realestatereports/ReportsOverview.vue';
  
  export default {
    name: 'PageExecutedReports',
    components: {
      ReportsOverview,
      ThePreviousPageBar
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
  