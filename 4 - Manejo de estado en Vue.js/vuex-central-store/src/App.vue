<template>
  <div id="app">
      <!-- <contador :cantidad="cantidad"
                @aumentar="cantidad++"
                @reducir="cantidad--">

      </contador> -->

      <contador></contador>
  </div>
</template>

<script>
import Contador from './components/Contador.vue'

export default {
  name: 'app',
  components: {
    Contador
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
