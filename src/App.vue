<template>
  <v-app>
    <v-main>
      <ThePageHeader 
        :menu-items="menuItems"
      />
      <router-view 
        :menu-items="menuItems"
        />
    </v-main>
    <ThePageFooter 
      :menu-items="menuItems"
    />
  </v-app>
</template>

<script>
import ThePageHeader from '@/components/template/sections/ThePageHeader.vue'
import ThePageFooter from '@/components/template/sections/ThePageFooter.vue'

export default {
  name: 'App',
  data: () => {
    return {
      menuItems: [
        {
          title: 'Toegewezen rapportages',
          to: 'toegewezen-rapportages',
          icon: 'fa-solid fa-list-check'
        },
        {
          title: 'Uitgevoerde rapportages',
          to: 'uitgevoerde-rapportages',
          icon: 'fa-solid fa-clipboard-check'
        },
        {
          title: 'Kennisbase',
          to: '/kennisbase',
          icon: 'fa-solid fa-graduation-cap'
        },
        {
          title: 'Instellingen',
          to: '/instellingen',
          icon: 'fa-solid fa-gears'
        },
        {
          title: 'Uitloggen',
          to: 'uitloggen',
          icon: 'fa fa-right-from-bracket'
        }
      ]
    }
  },
  components: {
    ThePageHeader,
    ThePageFooter
  }
}
</script>
<style>
  /* Application wide CSS */
  @import'~bootstrap/dist/css/bootstrap.css';
  html 
  {
    min-height: 100%;
  }
  h1 
  {
    font-size:28px;
  }

  h2 
  {
    font-size:24px;
  }

  h3 
  {
    font-size:22px;
  }

  h4 
  {
    font-size:20px;
  }
  .v-application 
  {
    background: rgb(71,94,108);
    background: linear-gradient(0deg, rgba(71,94,108,1) 0%, rgba(20,27,31,1) 100%); 
    background-size:cover;
  }
</style>
