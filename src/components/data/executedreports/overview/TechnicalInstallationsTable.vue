<template>
    <v-table>
        <thead>
            <th>Locatie</th>
            <th>Soort installatie</th>
            <th>Goedgekeurd</th>
        </thead>
        <tbody>
            <tr v-if="hasNoTechnicalInstallations">
                <td colspan="4">Er is op dit moment nog geen achterstallig onderhoud gemeld.</td>
            </tr>
            <tr v-for="(item, index) in this.technicalInstallations" v-bind:key="index">
                <td>
                    {{ item.location }}
                </td>
                <td>
                    {{ translateTypeTechnicalInstallation(item.typeInstallation) }}
                </td>
                <td>
                    <span v-if="item.approved">Ja</span>
                    <span v-else>Nee</span>
                </td>
                <td>
                    <button class="btn btn-primary" @click="setReport(index, 'technicalInstallations')">Meer info</button>
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
            'technicalInstallations'
        ],

        computed: {
            hasNoTechnicalInstallations()
            {
                return Object.keys(this.technicalInstallations).length == 0;
            },
        }
    } 
</script>