<template> 
    <form id="loginFrm" action="" method="post">
        <v-text-field 
            name="username"
            label="Gebruikersnaam"
            placeholder="demo"
            type="text"  
            required
        ></v-text-field>
        <v-text-field 
            name="password"
            label="Wachtwoord"
            placeholder="demo123"
            type="password" 
            required
        ></v-text-field>
        <v-btn @click="notInPrototype">
            Wachtwoord vergeten?
        </v-btn>
        <v-btn @click="handleLoginButton" class="float-right" color="primary">
            Inloggen
        </v-btn>
    </form>
</template>
<script>
    import UserService from '@/services/UserService';
    export default 
    {
        data() {

        },

        methods: {
            notInPrototype()
            {
                alert('Deze functie is niet beschikbaar in het prototype!');
            },

            handleLoginButton(e)
            {
                e.preventDefault()
                
                const frmElement = document.getElementById('loginFrm');
                const username = frmElement.querySelector('input[name=username]').value;
                const password = frmElement.querySelector('input[name=password]').value;

                UserService.doLogin(username, password)
            }
        },

        //Autologin (from localstorage)
        created(){
            UserService.tryAutoLogin()
        }
    }
</script>