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

router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('user')

    if (to.matched.some(record => record.meta.auth) && !loggedIn) {
        next('/login')
        return
    }
    next()
})

export default router