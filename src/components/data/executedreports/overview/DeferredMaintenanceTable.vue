<template>
    <v-table>
        <thead>
            <th>Locatie</th>
            <th>Soort onderhoud</th>
            <th>Acute actie vereist</th>
        </thead>
        <tbody>
            <tr v-if="hasNodeferredMaintenance">
                <td colspan="4">Er is op dit moment nog geen achterstallig onderhoud gemeld.</td>
            </tr>
            <tr v-for="(item, index) in this.deferredMaintenance" v-bind:key="index">
                <td>
                    {{ item.location }}
                </td>
                <td>
                    {{ translateTypeMaintenance(item.typeMaintenance) }}
                </td>
                <td>
                    <span v-if="item.urgentActionRequired">Ja</span>
                    <span v-else>Nee</span>
                </td>
                <td>
                    <button class="btn btn-primary" @click="setReport(index, 'deferredMaintenance')">Meer info</button>
                </td>
            </tr>
        </tbody>
    </v-table>
</template>
<script>
    import overviewTableMixin from '@/mixins/components/executedreports/overviewTable'
    import translateFields from '@/mixins/components/executedreports/translateFields'

    export default
    {
        data: () => {
           return {
            
           }
        },

        mixins: [
            overviewTableMixin,
            translateFields
        ],

        props: [
            'deferredMaintenance'
        ],

        computed: {
            hasNodeferredMaintenance()
            {
                return Object.keys(this.deferredMaintenance).length == 0;
            },
        },
    } 
</script>