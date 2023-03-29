<template>
    <div class="container pt-5">
      <div class="row justify-content-center">
        <div class="col-6">
            <div class="card p-3">
                <h1>Welkom terug {{ userName }}</h1>
                <p>We hebben je een SMS gestuurd op het bij ons bekende telefoonnummer, vul hieronder je verificatiecode in om door te gaan:</p>
                <p class="disclaimer">Deze functie word in het prototype gesimuleerd, vul code "1234" in om verder te gaan.</p>
                
                <LoginForm2FA/>
            </div>
        </div>
      </div>
      <div class="py-4"></div>
    </div>
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
  