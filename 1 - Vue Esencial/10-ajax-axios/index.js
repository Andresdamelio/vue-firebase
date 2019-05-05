

const vm = new Vue({
    el:'#app',
    data:{
        personas:[]
    },

    methods: {
        cargarPersonas(){

            axios.get('https://randomuser.me/api/?results=50')
                .then( resp => {
                    this.personas = resp.data.results;
                })
        }
    },

    mounted() {
        this.cargarPersonas();  
    }
})