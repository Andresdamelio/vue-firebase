

const vm = new Vue({
    el:'#app',
    data:{
        personas:[]
    },

    methods: {
        cargarPersonas(){
            this.$http.get('https://randomuser.me/api/?results=50')
                .then( resp => {
                    this.personas = resp.body.results;
                })
        }
    },

    mounted() {
        this.cargarPersonas();  
    }
})