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
          <h1>Welkom terug {{ userName }}</h1>
          <p>We hebben je een SMS gestuurd op het bij ons bekende telefoonnummer, vul hieronder je verificatiecode in om door te gaan:</p>
          <p class="disclaimer">Deze functie word in het prototype gesimuleerd, vul code "1234" in om verder te gaan.</p>
          
          <LoginForm2FA/>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
    import store from '@/store'
    import LoginForm2FA from '@/components/forms/LoginForm2FA.vue'
    export default {
        name: 'PageHome',
        
        components: {
            LoginForm2FA
        },  
        props: [
            'menuItems'
        ],
        computed: {
            userName()
            {
                //Store user object in local storage
               // localStorage.setItem('userObject', JSON.stringify(response))
                return store.state.user.userName
            }
        }
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .container, .container h1
  {
    color:#000;
  }
  .disclaimer 
  {
    color:red;
  }
  </style>
  