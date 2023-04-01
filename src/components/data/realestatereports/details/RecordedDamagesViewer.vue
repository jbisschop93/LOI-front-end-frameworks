<template>
    <p 
        v-if="currentReport.recordedDamages.length == 0"
    >
        N.v.t.
    </p>
    <v-expansion-panels 
        v-else
    >
      <v-expansion-panel
        v-for="(item, index) in currentReport.recordedDamages" 
        v-bind:key="index"
        :title="itemTitle(item)"
      >
            <v-expansion-panel-text>
                <b>Gemeld op:</b>
                <p>{{ $_dateFormatter_formatDate(item.createdAt) }}</p>
                <b>Locatie:</b>
                <p>{{ item.location }}</p>
                <b>Nieuwe schade:</b>
                <p>{{ item.isNew ? 'Ja' : 'N.v.t.' }}</p>
                <b>Type schade:</b>
                <p>{{ $_translateFields_translateTypeDamage(item.typeDamage) }}</p>
                <b>Datum:</b>
                <p>{{ $_dateFormatter_formatDate(item.date) }}</p>
                <b>Acute actie vereist:</b>
                <p>{{ item.urgentActionRequired ? 'Ja' : 'Nee' }}</p>
                <b>Omschrijving:</b>
                <p>{{ item.description }}</p>
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
            translateFields,
            dateFormatter
        ],
        methods: 
        {
            itemTitle(item) 
            {
                return this.$_dateFormatter_formatDate(item.createdAt) + ': ' + item.location
            }
        }
    }
</script>