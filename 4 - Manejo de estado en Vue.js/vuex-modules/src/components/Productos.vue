<template>
    <section>
        <h1>Añadir un producto</h1>
        <form @submit.prevent="anadir">
            <input type="text" placeholder="Nombre" v-model="nombre" required>
            <input type="number" placeholder="Precio" v-model="precio" required>
            <input type="submit" value="Añadir">
        </form>
        <hr>
        <ul>
            <li v-for="(producto, indice) in productos" :key="indice">
                {{ producto.nombre }} - {{ producto.precio.toFixed(2) + ' $' }}
                <button @click="comprarProducto(producto)">+</button>
            </li>
        </ul>
    </section>
</template>

<script>

import { mapState, mapMutations } from 'vuex';


export default {
    data(){
        return {
            nombre: '',
            precio: 0
        }
    },
    computed: mapState('productos',['productos']),
    methods: {
        anadir(){
            this.$store.commit('productos/anadirProducto', {
                nombre: this.nombre,
                precio: Number(this.precio)
            })

            this.nombre = '';
            this.precio = 0;
        },

        ...mapMutations('carro', ['comprarProducto'])
    }
}
</script>