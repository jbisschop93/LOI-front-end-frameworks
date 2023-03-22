<template>
    <p v-if="currentReport.modifications.length == 0">N.v.t.</p>
    <v-expansion-panels v-else>
      <v-expansion-panel
        v-for="(item, index) in currentReport.modifications" 
        v-bind:key="index"
        :title="itemTitle(item)"
      >
            <v-expansion-panel-text>
                <b>Gemeld op:</b>
                <p>{{ formatDate(item.createdAt) }}</p>
                <b>Reeds gedocumenteerd:</b>
                <p v-if="item.isNew">
                    N.v.t. (nieuwe aanpassing)
                </p>
                <p v-else>
                    Reeds gedocumenteerd:<br/>
                    {{ item.previousDocumentation }}
                </p>
                <b>Locatie:</b>
                <p>{{ item.location }}</p>
                <b>Uitgevoerd door:</b>
                <p>{{ translateExecutedBy(item.executedBy) }}</p>
                <b>Omschrijving:</b>
                <p>{{ item.description }}</p>

                <b>Actie vereist:</b>
                <p>{{ translateActionRequired(item.actionRequired) }}</p>
                <b>Opmerkingen:</b>
                <p>{{ item.extraInformation }}</p>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>
<script>
    import translateFields from '@/mixins/components/executedreports/translateFields'
    import dateFormatter from '@/mixins/dates/dateFormatter';
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