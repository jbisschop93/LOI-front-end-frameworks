<template>
  <div class="container">
    <h1>Direct naar:</h1>
    <div class="row">
      <div class="col-6 homebuttoncontainer" v-for="(item, index) in menuItems" v-bind:key="index">
        <HomeButton :icon="item.icon" :title="item.title"/>
      </div>
    </div>
    <!-- Tijdelijk! -->
    <ExecutedReports/>
    <div class="py-4"></div>
  </div>
</template>

<script>
import HomeButton from '@/components/template/buttons/HomeButton.vue'
import ExecutedReports from '@/components/data/executedreports/ExecutedReports.vue';

export default {
  name: 'HomePage',
  components: {
    HomeButton,
    ExecutedReports
  },
  props: [
    'menuItems'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container, .container h1
{
  color:#FFFFFF;
}

.homebuttoncontainer
{
  margin-bottom:25px;
}
</style>
