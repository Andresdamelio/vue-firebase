<template>
    <section>
        <h2>Carro de la compra</h2>
        <h3>Total compra: {{ totalCompra.toFixed(2) }} $</h3>

        <ul>
            <li v-for="(producto, indice) in carro"
                :key="indice">
                {{ producto.nombre }}
                <button @click="eliminarProducto(indice)">x</button>
            </li>
        </ul>

    </section>
</template>

<script>

import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
    computed: {
        ...mapGetters('carro', ['totalCompra']),
        ...mapState('carro', ['carro'])
    },
    methods: mapMutations('carro', ['eliminarProducto'])
}
</script>