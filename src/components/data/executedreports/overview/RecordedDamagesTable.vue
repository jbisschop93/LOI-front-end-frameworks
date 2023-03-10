<template>
    <v-table>
        <thead>
            <th>Locatie</th>
            <th>Datum</th>
            <th>Acute actie vereist</th>
        </thead>
        <tbody>
            <tr v-if="hasNoRecordedDamages">
                <td colspan="4">Er zijn op dit moment nog geen schades gemeld.</td>
            </tr>
            <tr v-for="(item, index) in this.recordedDamages" v-bind:key="index">
                <td>
                    {{ item.location }}
                </td>
                <td>
                    {{ formatDate(item.date) }}
                </td>
                <td>
                    <span v-if="item.urgentActionRequired">Ja</span>
                    <span v-else>Nee</span>
                </td>
                <td>
                    <button class="btn btn-primary" @click="setReport(index, 'recordedDamages')">Meer info</button>
                </td>
            </tr>
        </tbody>
    </v-table>
</template>
<script>dateFormatter
    import dateFormatter from '@/mixins/dates/dateFormatter'
    import overviewTableMixin from '@/mixins/components/executedreports/overviewTable'
    import translateFields from '@/mixins/components/executedreports/translateFields'

    export default
    {
        data: () => {
           return {
            
           }
        },

        mixins: [
        dateFormatter,
            overviewTableMixin,
            translateFields
        ],

        props: [
            'recordedDamages'
        ],

        computed: {
            hasNoRecordedDamages()
            {
                return Object.keys(this.recordedDamages).length == 0;
            }
        },
    } 
</script>