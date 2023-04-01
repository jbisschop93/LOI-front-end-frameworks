<template>
    <div v-if="this.currentReport !== null">
        <p>Op deze pagina kan straks de rapportages worden opgemaakt of aangepast, deze functie is nog niet beschikbaar in het prototype.</p>
    </div>
</template>
<script>

export default
{
    props: [
        'currentReport'
    ]
} 
</script>