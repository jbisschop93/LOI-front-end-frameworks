<template>
    <v-bottom-navigation>
        <v-btn v-for="item in menuItems" v-bind:key="item" value="recent">
            <font-awesome-icon :icon="item.icon" />
            {{ item.title }}
        </v-btn>
    </v-bottom-navigation>


    <footer>
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <img class="logo img-fluid" :src="require('@/assets/logo.png')"/> 
                </div>
                <div class="col-sm-8 text-right">
                    &copy; 2023 - Real Estate Care
                </div>
            </div>
        </div>
    </footer>
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
    footer 
    {
        padding:10px;
        padding-bottom:60px;
        background-color:#FFFFFF;
    }

    footer img 
    {
        margin:10px;
    }

    .v-bottom-navigation .v-bottom-navigation__content > .v-btn 
    {
        max-width:85px;
    }
</style>