import { createStore } from 'vuex'

export default createStore({
    state: {
        counter: 0,
        user: {
            is2FAAuthenthicated: false,
            isLogged: false,
            currentStep: 'login', //login, authenthicated,
            username: ''
        }
    },
    mutations:{
        SETUSER(state, userName)
        {
            state.user.isAuthenthicated = true
            state.user.isLogged = true
            state.user.userName = userName
        },
        RESET(state)
        {
            state.counter = 0
        }
    },
    actions: {
        setUser(context, user)
        {
            context.commit('SETUSER', {
                userName: user.userName
            })
        },
        reset(context)
        {
            context.commit('RESET')
        }
    }
});

//this.$store.state.counter = getter
//this.$store.commit('increment') = setter