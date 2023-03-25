import { createStore } from 'vuex'

export default createStore({
    state: {
        counter: 0,
        user: {
            is2FAAuthenthicated: false,
            isLogged: true,
            currentStep: 'login', //login, authenthicated,
            username: ''
        }
    },
    mutations:{
        SETUSER(state, userObject)
        {
            state.user.is2FAAuthenthicated = true
            state.user.isLogged = true
            state.user.userName = userObject.userName
        },
        RESET(state)
        {
            state.counter = 0
        }
    },
    actions: {
        userLoggedIn(context, userObject)
        {
            context.commit('SETUSER', userObject)
        },
        reset(context)
        {
            context.commit('RESET')
        }
    }
});

//this.$store.state.counter = getter
//this.$store.commit('increment') = setter