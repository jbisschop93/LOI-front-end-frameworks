<template>
    <v-container>
      <v-row 
        class="justify-content-center"
      >
        <v-col 
          cols="6"
        >
            <v-card 
              class="p-3"
            >
                <h1>Bezig met uitloggen...</h1>
                <p>Een ogenblik geduld alstublieft.</p>
            </v-card>
          </v-col>
      </v-row>
      <div class="py-4"></div>
    </v-container>
  </template>
  
  <script>
    import UserService from '@/services/UserService';
    export default {
        name: 'PageHome',
        props: [
            'menuItems'
        ],
        created(){
            UserService.logOut()
        }
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .container, .container h1
  {
    color:#000;
  }
  </style>
  