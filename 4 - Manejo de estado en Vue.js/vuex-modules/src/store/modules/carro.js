const state = {
    carro:[]
};


const getters = {
    totalCompra: (state) => state.carro.reduce( (total, producto) => total + producto.precio, 0 )
};

const mutations = {
    comprarProducto: (state, producto) => state.carro.unshift(producto),
    eliminarProducto: (state, indice) => state.carro.splice(indice, 1),
};

const actions = {};

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}