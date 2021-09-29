import axios from 'axios';
import VueAxios from 'vue-axios'
import {createStore} from 'vuex'

// Setup Axios
// axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';


// Create a new store instance.
const store = createStore({
    state() {
        return {
            user: null
        }
    },

    mutations: {
        setUserData(state, userData) {
            state.user = userData
            localStorage.setItem('user', JSON.stringify(userData))
            axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
        },

        clearUserData() {
            localStorage.removeItem('user')
            location.replace('/')
        }
    },
    actions: {
        login({commit}, credentials) {
            return axios
                .post('/login', credentials)
                .then(({data}) => {
                    commit('setUserData', data)
                })
        },

        logout({commit}) {
            commit('clearUserData')
        }
    },

    getters: {
        isLogged: state => !!state.user
    },

    modules: {}
})
export default store
