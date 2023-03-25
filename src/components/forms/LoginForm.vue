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
        <v-btn @click="handleLoginButton" class="float-right" color="primary">
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

            async doLogin(username, password)
            {
                return await ApiServiceRealEstate.userLogin(username, password).then((response) => {
                    if(response.userName)
                    {
                        //Store user object in local storage
                        localStorage.setItem('userObject', JSON.stringify(response))

                        //Dispatch login event
                        this.$store.dispatch({
                            type: 'userLoggedIn',
                            userObject: response     
                        }).then(() => {
                            //Navigate to main page
                            this.$router.push({
                                path: '/'
                            })
                            return true
                        })
                    }
                    return false
                })
            },

            handleLoginButton(e)
            {
                e.preventDefault()
                
                const frmElement = document.getElementById('loginFrm');
                const username = frmElement.querySelector('input[name=username]').value;
                const password = frmElement.querySelector('input[name=password]').value;

                this.doLogin(username, password)
            }
        },

        //Autologin (from localstorage)
        created(){
            if(localStorage.getItem('userObject') != null)
            {
                try 
                {
                    //Retrieve saved user object
                    const userObj = JSON.parse(localStorage.getItem('userObject'))

                    //Try automaticly logging in again
                    this.doLogin(userObj.userName, userObj.tmpPassword).then(response => {
                        if(response == false)
                        {
                            //Delete localStorage item when invalid
                            localStorage.removeItem('userObject')
                        }
                    })
                } catch (err) {
                    console.log('Tried logging in, but failed')
                    console.log(err)
                }
            }
        }
    }
</script>