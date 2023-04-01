<template>
    <the-previous-page-bar 
      :page-title="pageTitle"
    />
    <v-container 
      class="pt-2"
    >
      <v-card 
        class="p-2"
      >
        <h1>{{ pageTitle}}</h1>
        <report-editor 
          :current-report="currentReport"
        />
      </v-card>
    </v-container>
  </template>
  
  <script>
  import AssignedReportsService from '@/services/ApiServiceRealEstate'
  import ThePreviousPageBar from '@/components/template/sections/ThePreviousPageBar'
  import ReportEditor from '@/components/data/realestatereports/ReportEditor.vue'; 
  
  export default { 
    name: 'PageExecutedReport',
    data: () => {
        return {
            'currentReport': null
        }
    },
    components: {
        ReportEditor,
        ThePreviousPageBar
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
  