<template>
  <div class="container">
    <h1>Direct naar:</h1>
    <div class="row">
      <div class="col-6">
        <HomeButton icon="fa-solid fa-house-chimney-crack" title="Schade opnemen"/>
      </div>
      <div class="col-6">
        <HomeButton icon="fa-solid fa-house-circle-exclamation" title="Achterstallig onderhoud opnemen"/>
      </div>
    </div>
    <div class="py-4"></div>
    <div class="row">
      <div class="col-6">
        <HomeButton icon="fa-solid fa-list-check" title="Technische installaties inspecteren"/>
      </div>
      <div class="col-6">
        <HomeButton icon="fa-solid fa-list-ol" title="Modificaties inventariseren"/>
      </div>
    </div>
    <div class="py-4"></div>
  </div>
</template>

<script>
import HomeButton from '@/components/template/buttons/HomeButton.vue'
export default {
  name: 'HomePage',
  components: {
    HomeButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container, .container h1
{
  color:#FFFFFF;
}
</style>
