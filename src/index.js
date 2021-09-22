import {createApp} from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'

// 1. Define route components.
// These can be imported from other files
import HomePage from './home/HomePage'
import LoginPage from './login/LoginPage'
import RegisterPage from './register/RegisterPage'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '*', redirect: '/' },
]

// 3. Create the router instance and pass the `routes` option

const router = new VueRouter({
  routes // short for `routes: routes`
})

const app = createApp(App);
app.use(router);
app.mount('#app');

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.unmount();
  });
}

