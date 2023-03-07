<template>
    <div class="panel h-100 p-5" @click="handleButtonClick">
        <div class="icon">
            <font-awesome-icon :icon="icon" size="6x" />
        </div>
        <h2>{{ title }}</h2>
    </div>
</template>
  
  <script>
  export default {
    name: 'HomeButton',
    props: [
        'icon',
        'title'
    ],
    data: () => {
    
    },
    methods: {
        handleButtonClick(){
            alert(this.title + ' is aangeklikt!');
        }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .panel 
    {
        text-align: center;
        background-color:rgba(255,255,255,0.5); 
        cursor:pointer;
    }

    .icon
    {
        margin-bottom:15%;
    }
  </style>
  