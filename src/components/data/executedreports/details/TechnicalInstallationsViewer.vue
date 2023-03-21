<template>
    <p v-if="currentReport.technicalInstallations.length == 0">N.v.t.</p>
    <ul v-else>
        <li v-for="(item, index) in currentReport.technicalInstallations" v-bind:key="index">
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
        </li>
    </ul>
</template>
<script>
    import dateFormatter from '@/mixins/dates/dateFormatter';
    import translateFields from '@/mixins/components/executedreports/translateFields'
    export default 
    {
        props: [
            'currentReport'
        ],
        mixins: [
            translateFields,
            dateFormatter
        ]
    }
</script>