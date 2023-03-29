import ApiServiceRealEstate from "@/services/ApiServiceRealEstate"
import store from "@/store"
import router from "@/router"
export default 
{
    async doLogin(username, password, autoRedirect=true)
    {
        return await ApiServiceRealEstate.verifyCredentials(username, password).then((response) => {
            if(response.userName)
            {
                //Dispatch login event
                store.dispatch({
                    type: 'userLoggedIn',
                    userObject: response     
                }).then(() => {
                    if(autoRedirect)
                    {
                        //Navigate to main page
                        router.push({
                            path: '/inloggen-stap2'
                        })
                    }
                    return true
                })
            } else {
                alert('We konden geen account vinden met de door u ingevulde inloggegevens, controleer uw invoer en probeer het opnieuw!')
                return false
            }
        }).catch(() => {
            alert('We konden op dit moment helaas geen verbinding maken met de server, probeert u het later nog een keer.')
            return false
        })
    },

    async verifyLogin(username, code)
    {
        return await ApiServiceRealEstate.verifyLogin(username, code).then((response) => {
            if(response.userName)
            {
                if(response.tmp2FA != code)
                {
                    alert('De door u opgegeven authenticatie code is onjuist!')
                } else {
                    //Dispatch login event
                    store.dispatch({
                        type: 'userAuthenticated',
                        userObject: response     
                    }).then(() => {
                    
                        //Store user in local storage
                        localStorage.setItem('userObject', JSON.stringify(response))

                        //Navigate to main page
                        router.push({
                            path: '/'
                        })
                    })
                }
            } else {
                alert('We konden geen account vinden met de door u ingevulde inloggegevens, controleer uw invoer en probeer het opnieuw!')
            }
        }).catch(() => alert('We konden op dit moment helaas geen verbinding maken met de server, probeert u het later nog een keer.'))
    },

    logOut()
    {
        //First remove local storage (if set)
        if(localStorage.getItem('userObject') != null)
        {
            localStorage.removeItem('userObject')
        }
        //Dispatch logout event
        store.dispatch({
            type: 'logOut' 
        }).then(() => {
            //Navigate to main page
            router.push({
                path: '/inloggen'
            })
        })
    },

    tryAutoLogin()
    {
        if(localStorage.getItem('userObject') != null)
        {
            try 
            {
                //Retrieve saved user object
                const userObj = JSON.parse(localStorage.getItem('userObject'))

                //Try automaticly logging in again
                this.doLogin(userObj.userName, userObj.tmpPassword, false).then(response => {
                    if(response == false)
                    {
                        //Delete localStorage item when invalid
                        localStorage.removeItem('userObject')
                    } else {
                        //TODO: We should actually validate something here
                        store.dispatch({
                            type: 'userAuthenticated',
                            userObject: response     
                        }).then(() => {
                            router.push({
                                path: '/'
                            })
                        })
                    }
                })
            } catch (err) {
                console.log('Tried logging in, but failed')
                console.log(err)
            }
        }
    }
}