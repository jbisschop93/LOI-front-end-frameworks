<template>
    <PreviousPageBar :pageTitle="pageTitle" previousRoute="/uitgevoerde-rapportages"/>
    <v-container class="pt-2">
      <v-card class="p-2">
            <v-row>
              <v-col xs="12" md="8">
                <h1>{{ pageTitle }}</h1>
              </v-col>
              <v-col xs="12" md="4" class="md-text-right">
                Beheer: 
                <v-btn :to="editLink" color="primary">Ingediend rapport aanpassen</v-btn>
              </v-col>
            </v-row>
            
            <div class="pt-3">
              <ReportViewer :currentReport="currentReport"/>
            </div>
          </v-card>
      </v-container>
  </template>
  
  <script>
  import AssignedReportsService from '@/services/ApiServiceRealEstate'
  import PreviousPageBar from '@/components/template/sections/PreviousPageBar'
  import ReportViewer from '@/components/data/realestatereports/ReportViewer.vue'; 
  
  export default { 
    name: 'PageExecutedReport',
    data: () => {
        return {
            'currentReport': null
        }
    },
    components: {
      ReportViewer,
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
          return this.currentReport != null ? '/wijzig-rapportage/'+this.currentReport.id : '/'
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
  