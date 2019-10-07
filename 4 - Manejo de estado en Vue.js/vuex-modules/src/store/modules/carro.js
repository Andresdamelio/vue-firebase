const state ={
    carro: [],
};

const getters = {
    totalCompra: (state) => state.carro.reduce( (total, producto) => total + producto.precio, 0 )
};

const mutations = {
    comprarProducto: (state, indice) => state.carro.unshift(state.productos[indice]),
    eliminarProducto: (state, indice) => state.carro.splice(indice, 1),
};

export default {
    state,
    getters,
    mutations
}