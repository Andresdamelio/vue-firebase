import Vue from 'vue';
import Vuex from 'vuex':

Vue.use(Vuex)

const store = new Vuex.store({
    state: {
        nombres: 'José Andrés',
        apellidos: 'D Amelio Carrasco',
        profesion: 'Desarollador Web',
        ciudad: 'Barquisimeto'
    }
});