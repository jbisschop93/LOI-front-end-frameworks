<template> 
    <form id="loginFrm" action="" method="post">
        <v-text-field 
            name="verification"
            label="SMS Verificatiecode"
            placeholder="Vul hier je SMS code in"
            type="text"  
            required
        ></v-text-field>
        <v-btn 
            @click="resetLogin"
        >
            Terug naar inloggen
        </v-btn>
        <v-btn 
            @click="handleLoginButton" 
            class="float-right" 
            color="primary"
        >
            Ga verder
        </v-btn>
    </form>
</template>
<script>
    import UserService from '@/services/UserService';
    export default 
    {
        methods: {
            resetLogin()
            {
                UserService.logOut()
            },

            handleLoginButton(e)
            {
                e.preventDefault()
                
                const frmElement = document.getElementById('loginFrm');
                const username = this.$store.state.user.userName
                const verification = frmElement.querySelector('input[name=verification]').value;
                UserService.verifyLogin(username, verification)
            }
        }
    }
</script>