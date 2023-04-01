<template>
  <v-container>
    <h1>Direct naar:</h1>
    <v-row>
      <v-col cols="6" md="6" class="homebuttoncontainer" v-for="(item, index) in menuItems" v-bind:key="index">
        <HomeButton :icon="item.icon" :title="item.title" :to="item.to"/>
      </v-col>
    </v-row>
    <div class="py-4"></div>
  </v-container>
</template>

<script>
import HomeButton from '@/components/template/buttons/HomeButton.vue'

export default {
  name: 'PageHome',
  components: {
    HomeButton
  },
  props: [
    'menuItems'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-container, .container h1
{
  color:#FFFFFF;
}
</style>
