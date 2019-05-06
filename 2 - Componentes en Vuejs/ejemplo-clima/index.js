Vue.component('datos-clima',{
    props:{
        nombre:{
            type: String,
            require:true
        },
        temperatura:{
            type: Object
        },
        clima:{
            type:Object
        },
        codigo:{
            type: String,
            require:true
        }
    },
    template:'#clima-ciudad'
    
})



new Vue({
    el: '#app',
    data:{
        nombre: '',
        busqueda:false,
        temperatura: {},
        clima:{},
        codigo:''
    },
    methods: {
        consultar(){
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.nombre}&appid=c788c2e15f9a3bfcc8544f2ff8dc1373&units=metric&lang=es`)
                .then(res => {
                    this.codigo = res.data.sys.country;
                    this.temperatura = res.data.main;
                    this.clima = res.data.weather[0];
                    this.busqueda = true;
                })
        }
    },
})