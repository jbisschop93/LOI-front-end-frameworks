<template>
    <div class="row">
      <div class="col-9">
        <div class="card">
            <h2>(Tijdelijk) Uitgevoerde rapportages:</h2>
            <v-table>
                <thead>
                    <th>Rapport:</th>
                    <th>Aangemaakt op:</th>
                    <th>&nbsp;</th>
                </thead>
                <tr v-for="report in sortedAssignedReports" v-bind:key="report">
                    <td>
                        {{ report.title }}
                    </td>
                    <td>
                        {{ formatDate(report.createdAt) }}
                    </td>
                    <td>
                        Button die button
                    </td>
                </tr>
            </v-table>
        </div>
      </div>
      <div class="col-3">
        <div v-if="this.selectedIndex !== null" class="card p-2">
            Viewer
        </div>
      </div>
    </div>
</template>
<script>
    import AssignedReportsService from '@/services/AssignedReports'
    import dateFormatter from '@/mixins/dates/dateFormatter';

    export default
    {
        data: () => {
           return {
                reportsList: {}, //Will be loaded later
                selectedType: null,
                selectedIndex: null
           }
        },

        components: {
            
        },

        mixins: [
            dateFormatter
        ],

        methods: {
            onReportChange(index, type)
            {
                this.selectedIndex = index;
                this.selectedType = type;
            },

            resetCurrentReport()
            {
                this.selectedIndex = null;
                this.selectedType = null;
            }
        },

        computed: {
            currentReport(){
                return this.selectedType !== null ? this[this.selectedType][this.selectedIndex] : false;
            },

            assignedReports()
            {
                let data = this.reportsList;
                
                //Wait for object to be loaded
                if(Object.keys(data).length)
                {
                    //Filter on state
                    data = data.filter(obj => obj.status == "assigned");
                }

                return data;
            },

            sortedAssignedReports(){
                let data = this.assignedReports;
                
                //Wait for object to be loaded
                if(Object.keys(data).length)
                {
                    //Sort on date
                    data.sort( ( a, b) => {
                        return new Date(a.createdAt) + new Date(b.createdAt);
                    });
                }
                return data;
            }
        },

        created()
        {
            this.reports = AssignedReportsService.getAll().then((response) => {
                this.reportsList = response;
            });
        }
    } 
</script>
<style scoped>
    table tr td
    {
        vertical-align: top;
    }

    .card 
    {
        color:#000
    }
</style>