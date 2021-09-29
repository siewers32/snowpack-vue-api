import {createApp} from 'vue';
import App from './App.vue';
import router from './router'
import store from './store'
import axios from 'axios';
import VueAxios from 'vue-axios'

// Setup Axios
// axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

const app = createApp(App)
app.use(VueAxios, axios).use(router).use(store)


app.mount('#app')


// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
    import.meta.hot.accept();
    import.meta.hot.dispose(() => {
        app.unmount();
    });
}


