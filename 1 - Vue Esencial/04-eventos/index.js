

const vm = new Vue({
    el:'#app',
    data:{
        nuevaTarea: null,
        tareas: [
            'Aprender Vuejs',
            'Aprender ES6',
            'Hacer ejercicio'
        ]
    },

    methods: {
        agregarTarea() {
            this.tareas.unshift(this.nuevaTarea);
            this.nuevaTarea = null;
        }
    },
})

/* Como agregar una tarea usando vanillaJS */

/* const agregarTarea = () => {
    const input = document.querySelector('input[type=text]');
    vm.tareas.unshift(input.value);

    input.value = '';
} */

/* Forma de hacerlo con vue utilizando eventos */