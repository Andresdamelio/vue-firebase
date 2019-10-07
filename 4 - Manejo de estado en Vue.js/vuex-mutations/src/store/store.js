import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        cantidad: 0,
    },
    mutations:{
        /* Las mutaciones ademas de recibir el state, pueden recibir un payload */
        aumentar: ( state, n ) => state.cantidad += n,
        reducir: ( state, n ) => state.cantidad -= n
    }
});