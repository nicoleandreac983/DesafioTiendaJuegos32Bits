import axios from "axios";

export default {
    async getJuegos({ commit }) {
        try {
            const response = await axios.get("juegos.json");
            commit("cambiarJuegos", response.data); 
        } catch (error) {
            console.error("Error al obtener juegos", error);
        }
    }
};