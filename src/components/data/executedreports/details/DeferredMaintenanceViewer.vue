<template>
    <ul>
        <li>
            <b>Locatie:</b><br/>
            {{ this.deferredMaintenance.location }}
        </li>
        <li>
            <b>Soort onderhoud:</b><br/>
            {{ translateTypeMaintenance(this.deferredMaintenance.typeMaintenance) }}
        </li>
        <li>
            <b>Acute actie vereist:</b><br/>
            {{ this.deferredMaintenance.urgentActionRequired ? 'Ja' : 'Nee' }}
        </li>
        <li>
            <b>Kostenindicatie:</b><br/>
            {{ this.deferredMaintenance.costIndication }}
        </li>
    </ul>
</template>
<script>
    import translateFields from '@/mixins/components/executedreports/translateFields'
    export default 
    {
        props: [
            'deferredMaintenance'
        ],
        mixins: [
            translateFields
        ]
    }
</script>