import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        nombres: 'José Andrés',
        apellidos: 'D Amelio Carrasco',
        profesion: 'Desarollador Web',
        ciudad: 'Barquisimeto'
    }
});