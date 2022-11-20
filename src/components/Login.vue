<template>
    <div class="container bg-light border rounded">
        <form class="my-5" @submit.prevent="setLogin()">
            <h1>Login</h1>
            <label class="form-label">Usuario</label>
            <input type="text" v-model="user.userName" class="form-control"/><br/>
            <label class="form-label">Password</label>
            <input type="password" v-model="user.password" class="form-control"/>
            <button class="btn btn-primary mt-3">Login</button> 
        </form>
    </div>
</template>

<script>
import LoginService from './../service/LoginService';

const service = new LoginService()

export default {
    name: 'LoginComponent',

    data() {
        return {
            user:{
                userName: null,
                password: null
            }
        };
    },

    methods: {
        
        setLogin(){

            service.login(this.user).then(result => {
                localStorage.setItem("token", result)
                this.$router.push("/")
            })

        }

    },

    mounted() {
    },

};
</script>

<style scoped>

</style>