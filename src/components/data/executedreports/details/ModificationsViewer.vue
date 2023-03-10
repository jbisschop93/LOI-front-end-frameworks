<template>
    <ul>
        <li>
            <b>Nieuwe modificatie:</b><br/>
            {{ this.modifications.isNew ? 'Ja' : 'Nee' }}
        </li>
        <li>
            <b>Reeds gedocumenteerd:</b><br/>
            {{ this.modifications.previousDocumentation }}
        </li>
        <li>
            <b>Locatie:</b><br/>
            {{ this.modifications.location }}
        </li>
        <li>
            <b>Uitgevoerd door:</b><br/>
            {{ translateExecutedBy(this.modifications.executedBy) }}
        </li>
        <li>
            <b>Omschrijving:</b><br/>
            {{ this.modifications.description }}
        </li>
        <li>
            <b>Vereiste actie:</b><br/>
            {{ translateActionRequired(this.modifications.actionRequired) }}
        </li>
        <li>
            <b>Opmerkingen:</b><br/>
            {{ this.modifications.extraInformation }}
        </li>
    </ul>
</template>
<script>
    import translateFields from '@/mixins/components/executedreports/translateFields'
    export default 
    {
        props: [
            'modifications'
        ],
        mixins: [
            translateFields
        ]
    }
</script>