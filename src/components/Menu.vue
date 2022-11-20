<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <router-link to="/" class="navbar-brand"><img src="./../assets/images/logo.png" width="30"/></router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/empleados" class="nav-link">Empleados</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/auth/login" class="nav-link">Login</router-link>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-warning" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
    <router-view></router-view>
</template>

<script>
export default {
    name: 'MenuComponent',

    data() {
        return {
            
        };
    },

    mounted() {
    },

};
</script>

<style scoped>

</style>