
const vm = new Vue({

    el:'#app',
    data:{
        minimo: 5,
        busqueda: '',
        juegos: [
            {
                nombre:'GTA San Andreas',
                genero: 'Acción',
                puntuacion: 100
            },
            {
                nombre:'Call of dutty',
                genero: 'Guerra',
                puntuacion: 150
            },
            {
                nombre:'Mario Bross',
                genero: 'Carreras',
                puntuacion: 5
            },
        ]
    },

    computed: {
        mejoresJuegos(){
            return this.juegos.filter( juego => juego.puntuacion >= this.minimo)
        },

        buscarJuego(){
            return this.juegos.filter( (j) => j.nombre.includes(this.busqueda))
        }
    },
})