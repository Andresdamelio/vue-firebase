

const vm = new Vue({
    el:'#app',
    data:{
        counter: 0,
        tareas: [
            {
                titulo:'Aprender mongoDB', 
                completado: false
            },
            {
                titulo:'Ir al supermercado', 
                completado: false
            },
            {
                titulo:'Hacer ejercicios de node', 
                completado: false
            },
            {
                titulo:'Practicar Vue', 
                completado: false
            },
        ]
    },

    methods: {
        completarTarea(tarea) {
            tarea.completado = !tarea.completado;
        }
    },

    computed: {
        tareasCompletadas(){
            return this.tareas.filter( tarea => tarea.completado ).length;
        }
    }
})