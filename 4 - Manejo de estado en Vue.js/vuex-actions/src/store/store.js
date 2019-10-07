import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        cantidad: 0,
    },

    mutations:{
        aumentar: ( state ) => state.cantidad++,
        reducir: ( state ) => state.cantidad--
    },

    actions: {
        aumentarAsync: (context) => {
            setTimeout(()=> {
                context.commit('aumentar')
            }, 2000);
        },
        reducirAsync: (context) => {
            setTimeout(()=> {
                context.commit('reducir')
            }, 2000);
        }
    }
})