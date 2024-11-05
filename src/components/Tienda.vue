<template>
    <div>
        <h1 class="p-5 text-center">Tienda 32 bits</h1>
        <table class="table table-dark table-bordered">
            <thead>
                <tr class="table-dark fw-bold text-center text-uppercase">
                    <th scope="col ">Codigo</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Color</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="juego in juegos" :key="juego.codigo">
                    <td>{{ juego.codigo }}</td>
                    <td>{{ juego.nombre }}</td>
                    <td>{{ juego.precio }}</td>
                    <td>{{ juego.stock }}</td>
                    <td>{{ juego.color }}</td>
                    <td>
                        <button class="btn btn-danger"  @click="disminuirStock(juego.codigo)">-</button>
                        <button class="btn btn-success" @click="aumentarStock(juego.codigo)">+</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
    computed: {
        ...mapState(["juegos"])
    },
    methods: {
        ...mapMutations(["aumentarStock", "disminuirStock"])
    },
    created() {
    this.$store.dispatch("getJuegos");
}
}
</script>
<style scoped>
</style>
