<template>
    <v-bottom-navigation 
        v-if="this.$store.state.user.is2FAAuthenthicated && this.$route.path != '/kennisbase'" 
    >
        <v-btn to="/kennisbase">
            <font-awesome-icon 
                icon="fa fa-circle-question" 
                size="2x" 
                class="helpicon" 
            />
            Hulp nodig?
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
    .helpicon
    {
        color:#007eff
    }
</style>