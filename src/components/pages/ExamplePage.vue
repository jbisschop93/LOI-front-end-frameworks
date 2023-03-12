<template>
    <div class="container">
      <h1>Voorbeeld pagina!</h1>
      Hello world
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'HomePage',
    components: {
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
    color:#FFFFFF;
  }
  
  .homebuttoncontainer
  {
    margin-bottom:25px;
  }
  </style>
  