export default {
    aumentarStock(state, codigo) {
        const juego = state.juegos.find(j => j.codigo === codigo);
        if (juego) {
            juego.stock++;
        }
    },
    disminuirStock(state, codigo) {
        const juego = state.juegos.find(j => j.codigo === codigo);
        if (juego && juego.stock > 0) {
            juego.stock--;
        }
    },
    cambiarJuegos(state, juegos) {
        state.juegos = juegos;
    }
};
