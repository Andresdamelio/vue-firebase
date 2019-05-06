Vue.component('autor',{
    props:['nombre'],
    mounted() {
        // Los props son accesibles desde this (proxy)
        // console.log(this.nombre);
    },
    template:`<h1>{{ nombre }}</h1>`
})

new Vue({
    el: '#app',
    data:{
        autor:`Andres D' amelio`
    }
})