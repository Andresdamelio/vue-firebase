<template>
    <section>
        <h1>Cantidad: {{ cantidad }}</h1>
    </section>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: mapState(['cantidad'])
}
</script>