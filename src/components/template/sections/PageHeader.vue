<template>
    <header>
        <v-toolbar>
            <router-link to="/">
                <img class="logo" :src="require('@/assets/logo.png')"/> 
            </router-link>
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon v-if="this.$store.state.user.is2FAAuthenthicated" class="navtoggle" @click.stop="navbarVisible = !navbarVisible"></v-app-bar-nav-icon>
        </v-toolbar>
        <v-navigation-drawer
            v-model="navbarVisible"
            location="bottom"
            temporary
        >
            <v-list v-for="item in menuItems" v-bind:key="item"> 
                <v-list-item :to="item.to">
                    <font-awesome-icon :icon="item.icon" />
                    {{ item.title }}
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </header>
</template>

<script>
export default {
  name: 'PageHeader',
  data: () => ({
    navbarVisible: false
  }),
  props: [
    'menuItems'
  ]
}
</script>

<style scoped>
    header 
    {
        background-color:#FFFFFF;
        background-image:url('../../../assets/headerbg.png');
        background-repeat:no-repeat;
        background-position: top -240px;
        background-size:auto;
    }

    @media(min-width: 768px){
        header 
        {
            background-position: top right;
        }
    }
    .logo 
    {
        height:40px;
    }

    .navtoggle
    {
        color:#FFFFFF
    }
</style>