import { createStore } from 'vuex'

export default createStore({
    state: {
        counter: 0,
        user: {
            isLogged: false,
            username: ''
        }
    },
    mutations:{
        INCREMENT(state, payload)
        {
            state.counter += payload
        },
        RESET(state)
        {
            state.counter = 0
        }
    },
    actions: {
        increment(context, value)
        {
            context.commit('INCREMENT', value)
        },
        reset(context)
        {
            context.commit('RESET')
        }
    }
});

//this.$store.state.counter = getter
//this.$store.commit('increment') = setter