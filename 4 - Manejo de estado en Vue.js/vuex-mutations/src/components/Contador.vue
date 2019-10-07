<template>
    <section>
        <h1>Cantidad: {{ cantidad }}</h1>
        <button @click="reducir">Reducir 3</button>
        <button @click="aumentar">Aumentar 5</button>
    </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    computed: mapState(['cantidad']),
    //methods: {
        // aumentar(){
            /* Forma sencilla */
            /* this.$store.state.cantidad++; */

            /* Usando mutaciones */
          //  this.$store.commit('aumentar');
        //},
        /* reducir(){
            this.$store.commit('reducir');
        } */
    //},
    /* methods: mapMutations(['aumentar', 'reducir']) */

    /* Pasando informacion adicional */
    methods: {
        aumentar(){
            this.$store.commit('aumentar',5)
        },
        reducir(){
            this.$store.commit('reducir',3)
        }
    },
}
</script>