<template>
    <p v-if="currentReport.technicalInstallations.length == 0">N.v.t.</p>
    <v-expansion-panels v-else>
      <v-expansion-panel
        v-for="(item, index) in currentReport.recordedDamages" 
        v-bind:key="index"
        :title="itemTitle(item)"
      >
            <v-expansion-panel-text>
                <b>Gemeld op:</b>
                <p>{{ formatDate(item.createdAt) }}</p>
                <b>Locatie:</b>
                <p>{{ item.location }}</p>
                <b>Type installatie:</b>
                <p>{{ translateTypeTechnicalInstallation(item.typeInstallation) }}</p>
                <b>Gemelde storingen:</b>
                <p>{{ item.reportedFailures }}</p>
                <b>Test procesure:</b>
                <p>{{ item.testProcedure }}</p>
                <b>Goedgekeurd</b>
                <p>{{ item.approved ? 'Ja' : 'Nee' }}</p>
                <b>Opmerkingen</b>
                <p>{{ item.description }}</p>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>
<script>
    import dateFormatter from '@/mixins/dates/dateFormatter';
    import translateFields from '@/mixins/components/realestatereports/translateFields'
    export default 
    {
        props: [
            'currentReport'
        ],
        mixins: [
            translateFields,
            dateFormatter
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