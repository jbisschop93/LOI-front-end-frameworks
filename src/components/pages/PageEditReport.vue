<template>
    <PreviousPageBar :pageTitle="pageTitle"/>
    <div class="container pt-2">
        <div class="card p-2">
            <div class="row">
              <div class="col-12 col-md-8">
                <h1>{{ currentReport.title }}</h1>
              </div>
            </div>
            
            <div class="pt-3">
              <ReportEditor :currentReport="currentReport"/>
            </div>
        </div>
        <div class="py-4"></div>
    </div>
  </template>
  
  <script>
  import AssignedReportsService from '@/services/ApiServiceRealEstate'
  import PreviousPageBar from '@/components/template/sections/PreviousPageBar'
  import ReportEditor from '@/components/data/executedreports/ReportEditor.vue'; 
  
  export default { 
    name: 'PageExecutedReport',
    data: () => {
        return {
            'currentReport': null
        }
    },
    components: {
        ReportEditor,
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
        },
        editLink()
        {
          return this.currentReport != null ? '/wijzig-rapportage/'+this.currentReport.id : null
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

  .card, .card h1
  {
      color:#000
  }
  
  @media(min-width: 768px){
    .md-text-right
    {
      text-align:right;
    }
  }
  </style>
  