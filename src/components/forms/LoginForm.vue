<template> 
    <form id="loginFrm" action="" method="post">
        <v-text-field 
            name="username"
            label="Gebruikersnaam"
            placeholder="demo"
            type="text" 
        ></v-text-field>
        <v-text-field 
            name="password"
            label="Wachtwoord"
            placeholder="demo123"
            type="password" 
        ></v-text-field>
        <v-btn @click="notInPrototype">
            Wachtwoord vergeten?
        </v-btn>
        <v-btn @click="handleLogin" class="float-right" color="primary">
            Inloggen
        </v-btn>
    </form>
</template>
<script>
    import ApiServiceRealEstate from '@/services/ApiServiceRealEstate';
    export default 
    {
        data() {

        },

        methods: {
            notInPrototype()
            {
                alert('Deze functie is niet beschikbaar in het prototype!');
            },

            handleLogin(e)
            {
                e.preventDefault()
                
                const frmElement = document.getElementById('loginFrm');
                const username = frmElement.querySelector('input[name=username]').value;
                const password = frmElement.querySelector('input[name=password]').value;

                ApiServiceRealEstate.userLogin(username, password)
            }
        }
    }
</script>