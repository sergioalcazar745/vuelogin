<template>
    <div class="container">
        <h1>Detalles empleado</h1>
        <h3>{{empleado.apellido}}</h3>
        <button class="btn btn-success mt-3" @click="saludar">Saludar</button>
    </div>
</template>

<script>
export default {
    name: 'DetallesEmpleado',

    data() {
        return {
            
        };
    },

    methods: {

        saludar(){

            this.$emit("metodoSaludo", this.empleado.apellido, "Hola")

        }

    },

    props: ['empleado'],

    watch: {

        empleado(newVal, oldVal){
            console.log("New: " + newVal + "/ Old: " + oldVal)
        }

    },

    mounted() {

    },

};
</script>

<style scoped>

</style>