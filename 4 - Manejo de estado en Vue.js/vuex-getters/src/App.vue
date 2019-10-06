<template>
  <main>
      <tareas-restantes></tareas-restantes>
      <ul>
        <li v-for="tarea in tareas" :key="tarea.id">{{ tarea. nombre }}</li>
      </ul>
  </main>
</template>

<script>
import TareasRestantes from './components/TareasRestantes';
import { mapState } from 'vuex';

export default {
  components:{TareasRestantes},
  computed: mapState(['tareas'])
}

</script>