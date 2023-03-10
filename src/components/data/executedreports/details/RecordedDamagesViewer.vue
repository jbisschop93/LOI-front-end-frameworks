<template>
    <ul>
        <li>
            <b>Locatie:</b><br/>
            {{ this.recordedDamages.location }}
        </li>
        <li>
            <b>Nieuwe schade:</b><br/>
            {{ this.recordedDamages.isNew ? 'Ja' : 'Nee' }}
        </li>
        <li>
            <b>Soort schade:</b><br/>
            {{ translateTypeDamage(this.recordedDamages.typeDamage) }}
        </li>
        <li>
            <b>Datum:</b><br/>
            {{ formatDate(this.recordedDamages.date) }}
        </li>
        <li>
            <b>Acute actie vereist:</b><br/>
            {{ this.recordedDamages.urgentActionRequired ? 'Ja' : 'Nee' }}
        </li>
        <li>
            <b>Omschrijving:</b><br/>
            {{ this.recordedDamages.description }}
        </li>
    </ul>
</template>
<script>
    import translateFields from '@/mixins/components/executedreports/translateFields' 
    import dateFormatter from '@/mixins/dates/dateFormatter'
    export default 
    {
        props: [
            'recordedDamages'
        ],
        mixins: [
            translateFields,
            dateFormatter
        ]
    }
</script>