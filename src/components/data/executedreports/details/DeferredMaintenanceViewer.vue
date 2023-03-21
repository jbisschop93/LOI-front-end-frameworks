<template>
    <p v-if="currentReport.deferredMaintenance.length == 0">N.v.t.</p>
    <ul v-else>
        <li v-for="(item, index) in currentReport.deferredMaintenance" v-bind:key="index">
            <b>Gemeld op:</b>
            <p>{{ formatDate(item.createdAt) }}</p>
            <b>Locatie:</b>
            <p>{{ item.location }}</p>
            <b>Type onderhoud:</b>
            <p>{{ translateTypeMaintenance(item.typeMaintenance) }}</p>
            <b>Acute actie vereist:</b>
            <p>{{ item.urgentActionRequired ? 'Ja' : 'Nee' }}</p>
        </li>
    </ul>
</template>
<script>
    import translateFields from '@/mixins/components/executedreports/translateFields'
    import dateFormatter from '@/mixins/dates/dateFormatter'
    export default 
    {
        props: [
            'currentReport'
        ],
        mixins: [
            dateFormatter,
            translateFields
        ]
    }
</script>