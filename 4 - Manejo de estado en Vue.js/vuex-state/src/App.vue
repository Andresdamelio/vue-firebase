<template>
<div class="app">
  <h2>La suma es {{ sumar }}
  </h2>
  <h1>Hola, me llamo {{ nombres }} {{ apellidos }} y mi profesión es {{ profesion }}</h1>
</div>
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
    /* computed: mapState(['nombres', 'apellidos', 'profesion']) */

    /* Como el mapState se usa como una propiedad computada, puede ocurrir que se necesite crear una propiedad computada que no este asociada a vuex, para esto se usa el operador de propagacion de objeto,cuyo objetivo es extender un objeto, en este caso al computed se le agregan aquellas que sean proporcionadas por el mapState */

  computed: {
    sumar() {
      return 1 + 1;
    },

    ...mapState(['nombres', 'apellidos', 'profesion'])
  },

  }
</script>