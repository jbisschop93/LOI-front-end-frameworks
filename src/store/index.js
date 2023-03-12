import { createStore } from 'vuex'

export default createStore({
    state: {
        counter: 0
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