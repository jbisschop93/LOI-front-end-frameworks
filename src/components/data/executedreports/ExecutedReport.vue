<template>
    <div v-if="this.currentReport !== null" class="card p-2">
        <h1>{{ currentReport.title }}</h1>

        <b>Aangemaakt op:</b>
        <p>{{ formatDate(currentReport.createdAt) }}</p>

        <b>Inspectie uitgevoerd op:</b>
        <p>{{ formatDate(currentReport.inspectedAt) }}</p>

        <b>Adres:</b>
        <address>
            {{ currentReport.address.street }} {{ currentReport.address.houseNumber }}{{ currentReport.address.houseNumberAddon }}<br/>
            {{ currentReport.address.zipCode }}, {{ currentReport.address.place }}
        </address>

        <b>Opgenomen schades:</b>
        <RecordedDamagesViewer :currentReport="currentReport"></RecordedDamagesViewer>

        <hr/>
        
        <b>Achterstallig onderhoud:</b>
        <DeferredMaintenanceViewer :currentReport="currentReport"></DeferredMaintenanceViewer>

        <hr/>

        <b>Technische installaties:</b>
        <TechnicalInstallationsViewer :currentReport="currentReport"></TechnicalInstallationsViewer>

        <hr/>

        <b>Modificaties:</b>
        <ModificationsViewer :currentReport="currentReport"></ModificationsViewer>
    </div>
</template>
<script>
import dateFormatter from '@/mixins/dates/dateFormatter';
import DeferredMaintenanceViewer from '@/components/data/executedreports/details/DeferredMaintenanceViewer.vue';
import RecordedDamagesViewer from '@/components/data/executedreports/details/RecordedDamagesViewer.vue'; 
import TechnicalInstallationsViewer from '@/components/data/executedreports/details/TechnicalInstallationsViewer.vue';
import ModificationsViewer from '@/components/data/executedreports/details/ModificationsViewer.vue';

export default
{
    props: [
        'currentReport'
    ],

    components: {
        DeferredMaintenanceViewer,
        RecordedDamagesViewer,
        TechnicalInstallationsViewer,
        ModificationsViewer
    },

    mixins: [
        dateFormatter
    ]
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