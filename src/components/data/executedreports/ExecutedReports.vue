<template>
    <div class="row">
      <div class="col-5">
        <div class="card">
            <h2>(Tijdelijk) Uitgevoerde rapportages:</h2>
            <v-table>
                <thead>
                    <th>Rapport:</th>
                    <th>Aangemaakt op:</th>
                    <th>&nbsp;</th>
                </thead>
                <tr v-for="(report, index) in sortedExecutedReports" v-bind:key="index">
                    <td>
                        {{ report.title }}
                    </td>
                    <td>
                        {{ formatDate(report.createdAt) }}
                    </td>
                    <td>
                        <v-btn @click="changeReport(report.id)">Bekijk</v-btn>
                    </td>
                </tr>
            </v-table>
        </div>
      </div>
      <div class="col-7">
        <div v-if="this.currentReport !== null" class="card p-2">
            <b>Titel:</b>
            <p>{{ currentReport.title }}</p>

            <b>Aangemaakt op:</b>
            <p>{{ formatDate(currentReport.createdAt) }}</p>

            <b>Inspectie uitgevoerd op:</b>
            <p>{{ formatDate(currentReport.inspectedAt) }}</p>

            <b>Adres:</b>
            <address>
                {{ currentReport.address.street }} {{ currentReport.address.houseNumber }}{{ currentReport.address.houseNumberAddon }}<br/>
                {{ currentReport.address.zipCode }}, {{ currentReport.address.place }}
            </address>

            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="card p-2">
                        <b>Opgenomen schades:</b>
                        <RecordedDamagesViewer :currentReport="currentReport"></RecordedDamagesViewer>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="card p-2">
                        <b>Achterstallig onderhoud:</b>
                        <DeferredMaintenanceViewer :currentReport="currentReport"></DeferredMaintenanceViewer>
                    </div>
                </div>
            </div>

            <div class="py-2"></div>

            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="card p-2">
                        <b>Technische installaties:</b>
                        <TechnicalInstallationsViewer :currentReport="currentReport"></TechnicalInstallationsViewer>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="card p-2">
                        <b>Modificaties:</b>
                        <ModificationsViewer :currentReport="currentReport"></ModificationsViewer>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
    import AssignedReportsService from '@/services/AssignedReports'
    import dateFormatter from '@/mixins/dates/dateFormatter';
    import DeferredMaintenanceViewer from '@/components/data/executedreports/details/DeferredMaintenanceViewer.vue';
    import RecordedDamagesViewer from '@/components/data/executedreports/details/RecordedDamagesViewer.vue'; 
    import TechnicalInstallationsViewer from '@/components/data/executedreports/details/TechnicalInstallationsViewer.vue';
    import ModificationsViewer from '@/components/data/executedreports/details/ModificationsViewer.vue';

    export default
    {
        data: () => {
           return {
                reportsList: {}, //Will be loaded at created method
                currentReport: null //Will be loaded after changeReport method,
           }
        },

        components: {
            DeferredMaintenanceViewer,
            RecordedDamagesViewer,
            TechnicalInstallationsViewer,
            ModificationsViewer
        },

        mixins: [
            dateFormatter
        ],

        methods: {
            changeReport(id)
            {
                AssignedReportsService.getById(id).then((item) => this.currentReport = item )
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