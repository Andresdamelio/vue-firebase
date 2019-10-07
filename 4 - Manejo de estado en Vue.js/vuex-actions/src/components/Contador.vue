<template>
    <div>
        <h2>Cantidad {{ cantidad }}</h2>
        <button @click="reducirAsync">Reducir</button>
        <button @click="aumentarAsync">Aumentar</button>
    </div>
</template>

<script>

import { mapState, mapMutations, mapActions } from 'vuex';

export default {
    computed: mapState(['cantidad']),
    methods: mapActions(['aumentarAsync', 'reducirAsync'])
    /* methods: {
        aumentar(){
            this.$store.dispatch('aumentarAsync')
        },
        reducir(){
            this.$store.dispatch('reducirAsync')
        }
    }, */
}
</script>