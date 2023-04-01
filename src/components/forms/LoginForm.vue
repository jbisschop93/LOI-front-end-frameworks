<template> 
    <form id="loginFrm" action="" method="post">
        <v-text-field 
            name="username"
            label="Gebruikersnaam"
            placeholder="Demo"
            type="text"  
            required
        ></v-text-field>
        <v-text-field 
            name="password"
            label="Wachtwoord"
            placeholder="Demo123"
            type="password" 
            required
        ></v-text-field>
        <v-row>
            <v-col cols="12" md="6">
                <v-btn 
                    @click="notInPrototype"
                    class="mt-2" 
                    variant="text" 
                    block
                >
                    Wachtwoord vergeten?
                </v-btn>
            </v-col>
            <v-col cols="12" md="6">
                <v-btn 
                    @click="handleLoginButton" 
                    class="float-right mt-2" 
                    color="primary" 
                    block
                >
                    Inloggen
                </v-btn>
            </v-col>
        </v-row>
    </form>
</template>
<script>
    import UserService from '@/services/UserService';
    export default 
    {
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
        }
    }
</script>
