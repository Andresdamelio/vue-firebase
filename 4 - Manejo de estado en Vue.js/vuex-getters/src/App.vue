<template>
  <main>
      <ul>
        <li v-for="tarea in tareas" :key="tarea.id">{{ tarea. nombre }}</li>
      </ul>
  </main>
</template>

<script>
export default {
  computed: {
    tareas(){
      return this.$store.state.tareas;
    }
  },
}
</script>