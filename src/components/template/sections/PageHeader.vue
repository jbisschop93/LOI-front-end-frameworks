<template>
    <header>
        <v-toolbar>
            <img class="logo" :src="require('@/assets/logo.png')"/> 
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon class="navtoggle" @click.stop="navbarVisible = !navbarVisible"></v-app-bar-nav-icon>
        </v-toolbar>
        <v-navigation-drawer
            v-model="navbarVisible"
            location="bottom"
            temporary
        >
            <v-list
            :items="menuItems"
            ></v-list>
        </v-navigation-drawer>
    </header>
</template>

<script>
export default {
  name: 'PageHeader',
  data: () => ({
    navbarVisible: false,
    menuItems: [
      {
        title: 'Schade opnemen',
        value: 'Comming soon'
      },
      {
        title: 'Achterstallig onderhoud opnemen',
        value: 'Comming soon'
      },
      {
        title: 'Technische installaties inspecteren',
        value: 'Comming soon'
      },
      {
        title: 'Modificaties inventariseren',
        value: 'Comming soon'
      },
      {
        title: 'Uitloggen',
        value: 'Comming soon'
      }
    ]
  }),
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