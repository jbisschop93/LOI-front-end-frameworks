<template>
    <div class="panel p-4 text-center">
        <router-link 
            :to="to"
        >
           <div class="icon">
                <font-awesome-icon 
                    :icon="icon" 
                    size="4x"
                />
            </div>
            <h2>{{ title }}</h2>
        </router-link>
    </div>
</template>
  
  <script>
  export default {
    name: 'HomeButton',
    props: [
        'icon',
        'title',
        'to'
    ]
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .panel 
    {
        text-align: center;
        background-color:rgba(255,255,255,0.5); 
        cursor:pointer;
        padding-top:50px !important;
        padding-bottom:50px !important;
    }

    .icon
    {
        margin-bottom:15px;
    }

    h2 
    {
        font-size:16px;
        text-align:center;
    }

    .panel a 
    {
        color:#FFFFFF;
        text-decoration:none;
    }

    @media(min-width: 768px){
        h2 
        {
            font-size:24px;
        }
    }
  </style>
  