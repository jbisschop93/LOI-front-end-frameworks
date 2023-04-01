<template>
    <p v-if="currentReport.deferredMaintenance.length == 0">N.v.t.</p>
    <v-expansion-panels v-else>
      <v-expansion-panel
        v-for="(item, index) in currentReport.deferredMaintenance" 
        v-bind:key="index"
        :title="itemTitle(item)"
      >
            <v-expansion-panel-text>
                <b>Gemeld op:</b>
                <p>{{ formatDate(item.createdAt) }}</p>
                <b>Locatie:</b>
                <p>{{ item.location }}</p>
                <b>Type onderhoud:</b>
                <p>{{ translateTypeMaintenance(item.typeMaintenance) }}</p>
                <b>Acute actie vereist:</b>
                <p>{{ item.urgentActionRequired ? 'Ja' : 'Nee' }}</p>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>
<script>
    import translateFields from '@/mixins/components/realestatereports/translateFields'
    import dateFormatter from '@/mixins/dates/dateFormatter'
    export default 
    {
        props: [
            'currentReport'
        ],
        mixins: [
            dateFormatter,
            translateFields
        ],
        methods: 
        {
            itemTitle(item) 
            {
                return this.formatDate(item.createdAt) + ': ' + item.location
            }
        }
    }
</script>