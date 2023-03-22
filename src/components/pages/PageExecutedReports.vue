<template>
    <PreviousPageBar pageTitle="Uitgevoerde rapportages"/>
    <div class="container pt-2">
        <ExecutedReportsOverview/>
        <div class="py-4"></div>
    </div>
  </template>
  
  <script>
  import PreviousPageBar from '@/components/template/sections/PreviousPageBar'
  import ExecutedReportsOverview from '@/components/data/executedreports/ExecutedReportsOverview.vue';
  
  export default {
    name: 'PageExecutedReports',
    components: {
      ExecutedReportsOverview,
      PreviousPageBar
    },
    props: [
      'menuItems'
    ]
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .container, .container h1
  {
    color:#FFFFFF;
  }
  
  .homebuttoncontainer
  {
    margin-bottom:25px;
  }
  </style>
  