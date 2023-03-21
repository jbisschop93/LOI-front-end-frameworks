<template>
    <p v-if="currentReport.modifications.length == 0">N.v.t.</p>
    <ul v-else>
        <li v-for="(item, index) in currentReport.modifications" v-bind:key="index">
            <b>Gemeld op:</b>
            <p>{{ formatDate(item.createdAt) }}</p>
            <b>Reeds gedocumenteerd:</b>
            <p v-if="item.isNew">
                N.v.t. (nieuwe aanpassing)
            </p>
            <p v-else>
                Reeds gedocumenteerd:<br/>
                {{ item.previousDocumentation }}
            </p>
            <b>Locatie:</b>
            <p>{{ item.location }}</p>
            <b>Uitgevoerd door:</b>
            <p>{{ translateExecutedBy(item.executedBy) }}</p>
            <b>Omschrijving:</b>
            <p>{{ item.description }}</p>

            <b>Actie vereist:</b>
            <p>{{ translateActionRequired(item.actionRequired) }}</p>
            <b>Opmerkingen:</b>
            <p>{{ item.extraInformation }}</p>
        </li>
    </ul>
</template>
<script>
    import translateFields from '@/mixins/components/executedreports/translateFields'
    import dateFormatter from '@/mixins/dates/dateFormatter';
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