<template>
    <div class="row">
      <div class="col-9">
        <div class="card">
            <h2>(Tijdelijk) Uitgevoerde rapportages:</h2>
            <v-card>
                <v-tabs v-model="vtab">
                    <v-tab @click="resetCurrentReport" value="recordedDamages">Schades</v-tab>
                    <v-tab @click="resetCurrentReport" value="deferredMaintenance">Achterstallig onderhoud</v-tab>
                    <v-tab @click="resetCurrentReport" value="technicalInstallations">Technische installatie inspecties</v-tab>
                    <v-tab @click="resetCurrentReport" value="modifications">Modificaties</v-tab>
                </v-tabs>

                <v-card-text>
                    <v-window v-model="vtab">
                        <v-window-item value="recordedDamages">
                            <h2>Schades</h2>
                            <RecordedDamagesTable :recordedDamages="getRecordedDamagesSorted" @onReportChange="onReportChange"/>
                        </v-window-item>

                        <v-window-item value="deferredMaintenance">
                            <h2>Achterstallig onderhoud</h2>
                            <DeferredMaintenanceTable :deferredMaintenance="this.deferredMaintenance" @onReportChange="onReportChange"/>
                        </v-window-item>

                        <v-window-item value="technicalInstallations">
                            <h2>Technische installatie inspecties</h2>
                            <TechnicalInstallationsTable :technicalInstallations="this.technicalInstallations" @onReportChange="onReportChange"/>
                        </v-window-item>

                        <v-window-item value="modifications">
                            <h2>Modificaties</h2>
                            <ModificationsTable :modifications="this.modifications" @onReportChange="onReportChange"/>
                        </v-window-item>
                    </v-window>
                </v-card-text>
            </v-card>
        </div>
      </div>
      <div class="col-3">
        <div v-if="this.selectedIndex !== null" class="card p-2">
            <RecordedDamagesViewer v-if="this.selectedType == 'recordedDamages'" :recordedDamages="currentReport"/>
            <DeferredMaintenanceViewer v-if="this.selectedType == 'deferredMaintenance'" :deferredMaintenance="currentReport" />
            <TechnicalInstallationsViewer v-if="this.selectedType == 'technicalInstallations'" :technicalInstallations="currentReport"/>
            <ModificationsViewer v-if="this.selectedType == 'modifications'" :modifications="currentReport"/>
        </div>
      </div>
    </div>
</template>
<script>
    import executedReports from '@/services/executedReports'

    //Overviews
    import RecordedDamagesTable from '@/components/data/executedreports/overview/RecordedDamagesTable'
    import DeferredMaintenanceTable from '@/components/data/executedreports/overview/DeferredMaintenanceTable'
    import TechnicalInstallationsTable from '@/components/data/executedreports/overview/TechnicalInstallationsTable'
    import ModificationsTable from '@/components/data/executedreports/overview/ModificationsTable'
    //Detail viewers
    import RecordedDamagesViewer from '@/components/data/executedreports/details/RecordedDamagesViewer'
    import DeferredMaintenanceViewer from '@/components/data/executedreports/details/DeferredMaintenanceViewer'
    import TechnicalInstallationsViewer from '@/components/data/executedreports/details/TechnicalInstallationsViewer'
    import ModificationsViewer from '@/components/data/executedreports/details/ModificationsViewer'

    export default
    {
        data: () => {
           return {
                vtab: '1', //Unique identifier for tabs
                deferredMaintenance: {}, //Will be loaded later
                modifications: {}, //Will be loaded later
                recordedDamages: {}, //Will be loaded later
                technicalInstallations: {}, //Will be loaded later
                selectedType: null,
                selectedIndex: null
           }
        },

        components: {
            RecordedDamagesTable,
            DeferredMaintenanceTable,
            TechnicalInstallationsTable,
            ModificationsTable,
            RecordedDamagesViewer,
            DeferredMaintenanceViewer,
            TechnicalInstallationsViewer,
            ModificationsViewer
        },

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

            getRecordedDamagesSorted(){
                let data = this.recordedDamages;
                if(Object.keys(data).length)
                {
                    data.sort( ( a, b) => {
                        return new Date(a.date) + new Date(b.date);
                    });
                }
                return data;
            }
        },

        created()
        {
            this.reports = executedReports.getAll().then((response) => {
                this.deferredMaintenance = response.deferredMaintenance;
                this.modifications = response.modifications;
                this.recordedDamages = response.recordedDamages;
                this.technicalInstallations = response.technicalInstallations;
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