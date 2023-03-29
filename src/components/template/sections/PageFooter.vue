<template>
    <v-bottom-navigation v-if="this.$store.state.user.is2FAAuthenthicated">
        <v-btn v-for="item in menuItems" v-bind:key="item" :to="item.to">
            <font-awesome-icon :icon="item.icon" size="2x"/>
        </v-btn>
    </v-bottom-navigation>
</template>
 
<script>
export default {
  name: 'PageFooter',
  props: [
    'menuItems'
  ]
}
</script>

<style scoped>
    .v-bottom-navigation .v-bottom-navigation__content > .v-btn 
    {
        max-width:85px;
    }
</style>