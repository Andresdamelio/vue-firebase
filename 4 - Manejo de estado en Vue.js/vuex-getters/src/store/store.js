import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        tareas: [
            {id: 1, nombre: 'Aprender Vue Routing', completado: false },
            {id: 2, nombre: 'Organizar lecciones restantes', completado: false},
            {id: 3, nombre: 'Realizar curso de ingles', completado: false },
            {id: 4, nombre: 'Estudiar sobre inteligencia artificial', completado: false},
            {id: 5, nombre: 'Realizar ejercicios de programación', completado: false},
            {id: 6, nombre: 'Completar curso de Javascript', completado: false},
        ]
    }
});