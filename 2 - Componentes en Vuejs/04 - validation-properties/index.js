Vue.component('candidato', {
    //props:['nombre','correo','imagen'],
    props:{
        nombre: {
            type: [String, Array],
            require: true,
        },
        correo: {
            type: String,
            default: 'andresdamelio24@gmail.com'
        },
        imagen: String,
        location: {
            type: Object,
            default(){
                return {
                    ciudad: 'Valencia'
                }
            }
        }
    },
    template: '#candidato-template'
})


new Vue({
    el: '#app',
    data:{
        candidatos: []
    },

    methods: {
        obtenerCandidatos(){
            axios.get('https://randomuser.me/api/?results=50')
                .then( resp => {
                    this.candidatos = resp.data.results;
                })
                .catch( err => {
                    console.log(err);
                })
        }
    },

    mounted() {
        this.obtenerCandidatos();
    },
})