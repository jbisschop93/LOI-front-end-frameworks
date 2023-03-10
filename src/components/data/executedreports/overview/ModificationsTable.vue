<template>
    <v-table>
        <thead>
            <th>Reeds gedocumenteerd</th>
            <th>Huidig rapport</th>
            <th>Locatie</th>
        </thead>
        <tbody>
            <tr v-if="hasNoModifications">
                <td colspan="4">Er is op dit moment nog geen achterstallig onderhoud gemeld.</td>
            </tr>
            <tr v-for="(item, index) in this.modifications" v-bind:key="index">
                <td>
                    <span v-if="item.isNew">Ja</span>
                    <span v-else>Nee</span>
                </td>
                <td>
                    {{ item.previousDocumentation }}
                </td>
                <td>
                    {{ item.location }}
                </td>
                <td>
                    <button class="btn btn-primary" @click="setReport(index, 'modifications')">Meer info</button>
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
            'modifications'
        ],

        computed: {
            hasNoModifications()
            {
                return Object.keys(this.modifications).length == 0;
            },
        }
    } 
</script>