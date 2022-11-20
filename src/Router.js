import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/Home.vue";
import MenuComponent from "./components/Menu.vue";
import EmpleadosComponent from "./components/Empleados.vue";
import LoginComponent from "./components/Login.vue";
import LogoutComponent from "./components/Logout.vue";
import DetallesEmpleado from "./components/DetallesEmpleado.vue";

const routes = [
    {
        path: "/", 
        component: MenuComponent,
        children: 
        [
            { 
                path: "/", component:  HomeComponent
            },

            { 
                path: "/empleados", component:  EmpleadosComponent
            },

            { 
                path: "/detalle/:id", component:  DetallesEmpleado
            },
        ]
    },

    {
        path: "/auth/login", component: LoginComponent
    },

    {
        path: "/logout", component: LogoutComponent
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;