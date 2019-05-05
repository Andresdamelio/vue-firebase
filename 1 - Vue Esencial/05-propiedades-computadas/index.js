

const vm = new Vue({

    el:'#app',
    data:{
        mensaje: 'Hola mundo',
        tareas: [
            {
                nombre: 'Aprender vuejs', 
                prioridad: true, 
                atiguedad: 5
            },
            {
                nombre: 'Aprender nodejs', 
                prioridad: true, 
                atiguedad: 1
            },
            {
                nombre: 'Aprender angular', 
                prioridad: false, 
                atiguedad: 10
            },
        ]
    },
    computed: {
        mensajeInvertido() {
            return this.mensaje.split('').reverse().join('')
        },

        tareasPrio() {
            return this.tareas.filter( tarea => tarea.prioridad) 
        },

        tareasPorAntiguedad() {
            return this.tareas.sort( (a,b) => b.antiguedad - a.antiguedad )
        }
    },

   
})