import {createApp} from 'vue';
import App from './App.vue';
import router from './router'
import store from './store'
import axios from 'axios';
import VueAxios from 'vue-axios'

// Setup Axios
// axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

const app = createApp(App, {
    created () {
        const userInfo = localStorage.getItem('user')
        if (userInfo) {
            const userData = JSON.parse(userInfo)
            this.$store.commit('setUserData', userData)
        }
        axios.interceptors.response.use(
            response => response,
            error => {
                if (error.response.status === 401) {
                    this.$store.dispatch('logout')
                }
                return Promise.reject(error)
            }
        )
    },
    render: h => h(App)
});

app.use()


app.mount('#app')


// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
    import.meta.hot.accept();
    import.meta.hot.dispose(() => {
        app.unmount();
    });
}


