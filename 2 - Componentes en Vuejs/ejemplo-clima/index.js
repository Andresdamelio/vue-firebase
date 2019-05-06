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
        clima:{}
    },
    methods: {
        consultar(){
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.nombre}&appid=c788c2e15f9a3bfcc8544f2ff8dc1373&units=metric&lang=es`)
                .then(res => {
                    this.temperatura = res.data.main;
                    this.clima = res.data.weather[0];
                    this.busqueda = true;
                })
        }
    },
})