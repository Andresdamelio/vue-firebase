// Como crear reactividad con vanilla js, esta es una opcion valida
// pero se puede convertir en un problema al tener muchos elementos
// por esta razon es que se usara vue

/* const h1 = document.querySelector('h1');
const input = document.querySelector('input');

input.addEventListener('keyup', () => h1.innerHTML = input.value); */

// Vuejs

new Vue({
    el: '#app',
    data: {
        mensaje: 'Escribe tu mensaje',
    }
})