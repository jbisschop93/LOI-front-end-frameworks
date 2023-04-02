<template>
    <div 
        v-if="this.currentReport !== null"
    >
        <b>Aangemaakt op:</b>
        <p>{{ $_dateFormatter_formatDate(currentReport.createdAt) }}</p>

        <b>Inspectie uitgevoerd op:</b>
        <p 
            v-if="currentReport.inspectedAt"
        >
            {{ $_dateFormatter_formatDate(currentReport.inspectedAt) }}
        </p>
        <p 
            v-else 
        >
            Nog niet uitgevoerd
        </p>


        <b>Adres:</b>
        <address>
            {{ currentReport.address.street }} {{ currentReport.address.houseNumber }}{{ currentReport.address.houseNumberAddon }}<br/>
            {{ currentReport.address.zipCode }}, {{ currentReport.address.place }}
        </address>

        <b>Opgenomen schades:</b>
        <recorded-damages-viewer 
            :currentReport="currentReport"
        ></recorded-damages-viewer>

        <hr/>
        
        <b>Achterstallig onderhoud:</b>
        <deferred-maintenance-viewer 
            :currentReport="currentReport"
        ></deferred-maintenance-viewer>

        <hr/>

        <b>Technische installaties:</b>
        <technical-installations-viewer 
            :currentReport="currentReport"
        ></technical-installations-viewer>

        <hr/>

        <b>Modificaties:</b>
        <modifications-viewer 
            :currentReport="currentReport"
        ></modifications-viewer>
    </div>
</template>
<script>
import dateFormatter from '@/mixins/dates/dateFormatter'; 
import DeferredMaintenanceViewer from '@/components/data/realestatereports/details/DeferredMaintenanceViewer.vue';
import RecordedDamagesViewer from '@/components/data/realestatereports/details/RecordedDamagesViewer.vue'; 
import TechnicalInstallationsViewer from '@/components/data/realestatereports/details/TechnicalInstallationsViewer.vue';
import ModificationsViewer from '@/components/data/realestatereports/details/ModificationsViewer.vue';

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
</style>