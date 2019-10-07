const state = {
    productos: [
        {nombre: 'Steam Link', precio: 50},
        {nombre: 'Steam Controller', precio: 59},
        {nombre: 'Axios verge', precio: 17}
    ]
}

const getters = {}

const actions = {}

const mutations = {
    anadirProducto: (state, producto) => state.productos.unshift(producto)
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
