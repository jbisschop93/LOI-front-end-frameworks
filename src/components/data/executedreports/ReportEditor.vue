<template>
    <div v-if="this.currentReport !== null">
        <p>Op deze pagina kan straks de rapportages worden aangepast.</p>
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