<template>
    <PreviousPageBar :pageTitle="pageTitle" previousRoute="/uitgevoerde-rapportages"/>
    <div class="container pt-2">
        <ExecutedReport :currentReport="currentReport"/>
        <div class="py-4"></div>
    </div>
  </template>
  
  <script>
  import AssignedReportsService from '@/services/AssignedReports'
  import PreviousPageBar from '@/components/template/sections/PreviousPageBar'
  import ExecutedReport from '@/components/data/executedreports/ExecutedReport.vue';
  
  export default {
    name: 'PageExecutedReport',
    data: () => {
        return {
            'currentReport': null
        }
    },
    components: {
      ExecutedReport,
      PreviousPageBar
    },
    props: [
      'menuItems',
      'id'
    ],
    computed: {
        pageTitle()
        {
            return this.currentReport != null ? this.currentReport.title : 'Bezig met ophalen...'
        }
    },
    created() {
        AssignedReportsService.getById(this.id).then((response) => {
            this.currentReport = response
        });
    }
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
  