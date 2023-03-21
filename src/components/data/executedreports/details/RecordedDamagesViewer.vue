<template>
    <p v-if="currentReport.recordedDamages.length == 0">N.v.t.</p>
    <ul v-else>
        <li v-for="(item, index) in currentReport.recordedDamages" v-bind:key="index">
            <b>Gemeld op:</b>
            <p>{{ formatDate(item.createdAt) }}</p>
            <b>Locatie:</b>
            <p>{{ item.location }}</p>
            <b>Nieuwe schade:</b>
            <p>{{ item.isNew }}</p>
            <b>Type schade:</b>
            <p>{{ translateTypeDamage(item.typeDamage) }}</p>
            <b>Datum:</b>
            <p>{{ formatDate(item.date) }}</p>
            <b>Acute actie vereist:</b>
            <p>{{ item.urgentActionRequired ? 'Ja' : 'Nee' }}</p>
            <b>Omschrijving:</b>
            <p>{{ item.description }}</p>
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
            translateFields,
            dateFormatter
        ]
    }
</script>