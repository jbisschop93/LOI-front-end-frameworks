<template>
    <ul>
        <li>
            <b>Locatie:</b><br/>
            {{ this.technicalInstallations.location }}
        </li>
        <li>
            <b>Soort installatie</b>:<br/>
            {{ translateTypeTechnicalInstallation(this.technicalInstallations.typeInstallation) }}
        </li>
        <li>
            <b>Gemelde storingen:</b><br/>
            {{ this.technicalInstallations.reportedFailures }}
        </li>
        <li>
            <b>Test procedure:</b><br/>
            {{ this.technicalInstallations.testProcedure }}
        </li>
        <li>
            <b>Goedgekeured:</b><br/>
            {{ this.technicalInstallations.approved ? 'Ja' : 'Nee' }}
        </li>
        <li>
            <b>Opmerkingen:</b><br/>
            {{ this.technicalInstallations.description }}
        </li>
    </ul>
</template>
<script>
    import translateFields from '@/mixins/components/executedreports/translateFields'
    export default 
    {
        props: [
            'technicalInstallations'
        ],
        mixins: [
            translateFields
        ]
    }
</script>