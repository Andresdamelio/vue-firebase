

const vm = new Vue({
    el:'#app',
    data:{
        laborales: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'],
        tareas: [
            {nombre: 'Aprender vuejs', prioridad: 'alta'},
            {nombre: 'Aprender nodejs', prioridad: 'alta'},
            {nombre: 'Aprender angular', prioridad: 'media'},
        ],
        persona: {
            nombre: 'José',
            profesion: 'Desarrollador',
            edad: 22,
        },
    },
})