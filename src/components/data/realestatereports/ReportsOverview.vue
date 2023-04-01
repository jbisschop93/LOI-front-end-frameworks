<template>
        <v-card>
            <v-list>
                <v-list-item 
                    v-for="(report, index) in sortedReportsByMode" 
                    v-bind:key="index" 
                    :to="routeExecutedReportDetail(report.id)"
                >
                        {{ $_dateFormatter_formatDate(report.createdAt) }}: {{ report.title }}
                </v-list-item>
            </v-list>
        </v-card>
</template>
<script>
    import AssignedReportsService from '@/services/ApiServiceRealEstate'
    import dateFormatter from '@/mixins/dates/dateFormatter'; 

    export default
    {
        data: () => {
           return {
                reportsList: {}, //Will be loaded at created method
           }
        },

        props: [
            'mode'
        ],

        mixins: [
            dateFormatter
        ],

        methods: {
            routeExecutedReportDetail(id) 
            {
                return this.mode == 'executed' ? '/uitgevoerde-rapportages/'+id : 'toegewezen-rapportages/'+id
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

            assignedReports()
            {
                let data = this.reportsList;
                
                //Wait for object to be loaded
                if(Object.keys(data).length)
                {
                    //Filter on state
                    data = data.filter(obj => obj.status == "assigned")
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
            },

            sortedAssignedReports()
            {
                let data = this.assignedReports;
                
                //Wait for object to be loaded
                if(Object.keys(data).length)
                {
                    //Sort on date
                    data.sort( ( a, b) => {
                        return new Date(a.createdAt) + new Date(b.createdAt)
                    });
                }
                return data;
            },

            sortedReportsByMode()
            {
                return this.mode == 'executed' ? this.sortedExecutedReports : this.sortedAssignedReports
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