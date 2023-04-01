<template>
    <v-container 
      class="pt-5"
    >
      <v-row 
        class="justify-content-center"
      >
        <v-col 
          md="6"
        >
          <v-card 
            class="p-3"
          >
            <h1>U bent nog niet ingelogd!</h1>
            <p>Vul hieronder uw gebruikersnaam- en wachtwoord in om te beginnen.</p>
            <p>In de demo applicatie kunt u inloggen met "demo" (gebruikersnaam) / "demo123" (wachtwoord).</p>
            
            <login-form/>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import LoginForm from '@/components/forms/LoginForm'
  export default {
    name: 'PageHome',
    components: {
      LoginForm
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
    color:#000;
  }
  </style>
  