<template>
  <section>
    <productos></productos>
    <carro></carro>
  </section>
</template>

<script>

import Carro from './components/Carro';
import Productos from './components/Productos';

export default {
  components:{
    Carro, Productos
  }
}
</script>
