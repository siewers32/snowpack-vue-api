import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () =>
            import("../views/HomePage.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import("../views/LoginPage.vue"),
    },
    {
        path: "/register",
        name: "Register",
        component: () =>
            import("../views/RegisterPage.vue"),
    },
    {
        path: "/test",
        name: "Test",
        component: () =>
            import("../views/TestPage.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router