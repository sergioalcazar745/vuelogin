<template>
    <div class="container">
        <h1 class="my-5">Empleados</h1>
        <table class="table">
            <thead>
                <th>Apellido</th>
                <th>Oficio</th>
                <th>Detalles</th>
            </thead>
            <tbody>
                <tr v-for="(empleado, index) in empleados" :key="empleado">
                    <td>{{empleado.apellido}}</td>
                    <td>{{empleado.oficio}}</td>
                    <td><button class="btn btn-primary" @click="getDetalleEmpleado(index)">Detalles</button></td>
                </tr>
            </tbody>
        </table>
        <div v-if="empleado">
            <DetallesEmpleado :empleado="empleado" v-on:metodoSaludo="saludoEmpleado"/>
        </div>
    </div>
</template>

<script>
import EmpleadosService from "./../service/EmpleadosService";
import DetallesEmpleado from "./DetallesEmpleado.vue";

const service = new EmpleadosService();

export default {
    name: 'EmpleadosComponent',

    components:{
        DetallesEmpleado
    },

    data() {

        return {
            empleados:[],
            empleado: null
        };

    },

    methods: {

        getEmpleados(){

            service.getEmpleados().then(result => {
                this.empleados = result;
            })

        },

        getDetalleEmpleado(id){

            this.empleado = this.empleados[id];

        },

        saludoEmpleado(nombre, prueba){
            alert("Empleado: " + nombre + "Prueba: " + prueba)
        }


    },

    mounted() {

        this.getEmpleados();

    },

};
</script>

<style scoped>

</style>