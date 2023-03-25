<template>
    <div class="container pt-5">
      <div class="row justify-content-center">
        <div class="col-6">
            <div class="card p-3">
                <h1>U bent nog niet ingelogd!</h1>
                <p>Vul hieronder uw gebruikersnaam- en wachtwoord in om te beginnen.</p>
                <p>In de demo applicatie kunt u inloggen met "demo" (gebruikersnaam) / "demo123" (wachtwoord).</p>
                
                <LoginForm/>
            </div>
        </div>
      </div>
      <div class="py-4"></div>
    </div>
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
  