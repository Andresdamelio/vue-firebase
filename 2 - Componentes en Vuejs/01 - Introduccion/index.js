Vue.component('mis-tareas', {
    template: `<ul>
        <li v-for="tarea in tareas">{{tarea.title}}</li>
    </ul>`,
    data() {
        return {
            tareas: []
        }
    },

    methods: {
        cargarTareas(){
            axios.get('https://jsonplaceholder.typicode.com/todos')
                .then( resp => {
                    this.tareas = resp.data;
                })
                .catch( err => {
                    console.log(err);
                })
        }
    },

    mounted() {
        this.cargarTareas();
    },

});

new Vue({
    el: '#app',
})