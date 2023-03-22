<template>
        <div class="card">
            <div class="p-4">
                <h1>Uitgevoerde rapportages</h1>
            </div>
            <v-list>
                <v-list-item v-for="(report, index) in sortedExecutedReports" v-bind:key="index">
                    <v-btn class="d-flex justify-content-start" block="true" :to="routeExecutedReportDetail(report.id)">
                        {{ formatDate(report.createdAt) }}: {{ report.title }}
                    </v-btn>
                </v-list-item>
            </v-list>
        </div>
</template>
<script>
    import AssignedReportsService from '@/services/AssignedReports'
    import dateFormatter from '@/mixins/dates/dateFormatter';

    export default
    {
        data: () => {
           return {
                reportsList: {}, //Will be loaded at created method
           }
        },

        mixins: [
            dateFormatter
        ],

        methods: {
            routeExecutedReportDetail(id) 
            {
                return '/uitgevoerde-rapportages/'+id
            }
        },

        computed: {
            executedReports()
            {
                let data = this.reportsList;
                
                //Wait for object to be loaded
                if(Object.keys(data).length)
                {
                    //Filter on state
                    data = data.filter(obj => obj.status == "completed")
                }

                return data;
            },

            sortedExecutedReports(){
                let data = this.executedReports;
                
                //Wait for object to be loaded
                if(Object.keys(data).length)
                {
                    //Sort on date
                    data.sort( ( a, b) => {
                        return new Date(a.createdAt) + new Date(b.createdAt)
                    });
                }
                return data;
            }
        },

        created()
        {
            this.reports = AssignedReportsService.getAll().then((response) => {
                this.reportsList = response
            });
        }
    } 
</script>
<style scoped>
    table tr td
    {
        vertical-align: top;
        padding:5px;
    }

    .card 
    {
        color:#000
    }
</style>