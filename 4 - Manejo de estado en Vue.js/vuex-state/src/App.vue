<template>
  <h1>Hola, me llamo {{ nombres }} {{ apellidos }} y mi profesión es {{ profesion }}</h1>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    /* Formas de acceder al state de vuex */

    /* Usando una funcion sencilla y accediendo a $store */

    /* computed: {
      nombre() {
        return this.$store.state.nombres;
      }
    }, */

    /* Utilizando mapState y accediendo al elemento state para obtener sus elementos */
    /* computed: mapState({
      nombres: (state) => state.nombres,
      apellidos: (state) => state.apellidos
    }), */

    /* Utilizando mapState y obteniedo sus elementos directamente */
    computed: mapState(['nombres', 'apellidos', 'profesion'])
  }
</script>