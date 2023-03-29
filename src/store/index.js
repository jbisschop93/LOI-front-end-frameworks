import { createStore } from 'vuex'

export default createStore({
    state: {
        counter: 0,
        user: {
            is2FAAuthenthicated: false,
            isLogged: false,
            userName: ''
        }
    },
    mutations:{
        SETUSER(state, params)
        {
            state.user.is2FAAuthenthicated = false
            state.user.isLogged = true
            state.user.userName = params.userObject.userName
        },
        AUTHENTICATED(state){
            state.user.is2FAAuthenthicated = true
        },
        RESETUSER(state)
        {
            state.user.is2FAAuthenthicated = false
            state.user.isLogged = false
            state.user.userName = ''
        }
    },
    actions: {
        userAuthenticated(context)
        {
            context.commit('AUTHENTICATED')
        },
        userLoggedIn(context, params)
        {
            context.commit('SETUSER', params)
        },
        logOut(context)
        {
            context.commit('RESETUSER')
        }
    }
});

//this.$store.state.counter = getter
//this.$store.commit('increment') = setter