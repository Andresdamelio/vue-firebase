<template>
    <main>
        <!-- <h3>{{ tc }} tareas completadas</h3> -->
        <h1>{{ tituloTareas }}</h1>
        <h3>{{ tareasComletadas }} tareas completadas</h3>
    </main>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    /* Formas de acceder a un getters desde un componente */

    /* Primera forma, llamandolo desde una propiedad computada, y accediendo al $store */
    /* computed: {
        tareasComletadas(){
            return this.$store.getters.tareasComletadas;
        }
    }, */

    /* Segunda forma, usando mapGetters, como objeto */

    /* computed: mapGetters({
        tc: 'tareasComletadas',
    }) */

    /* tercera forma, usando mapGetters como un array */
    /* computed: mapGetters(['tareasComletadas']) */

    /* Utilizando el operador de propagacion */
    computed: {
        tituloTareas(){
            return 'Mis tareas'
        },
        ...mapGetters(['tareasComletadas'])
    }
}
</script>