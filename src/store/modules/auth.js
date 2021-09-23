import axios from 'axios';
const state = {
    user: null,
    persons: null,
};

const getters = {
    isAuthenticated: state => !!state.user,
    StatePersons: state => state.persons,
    StateUser: state => state.user,
};

const actions = {
    async Register({dispatch}, form) {
        await axios.post('register', form)
        let UserForm = new FormData()
        UserForm.append('name', form.name)
        UserForm.append('password', form.password)
        UserForm.append('password_confirmation', form.password_confirmation)
        await dispatch('LogIn', UserForm)
    },
    async LogIn({commit}, User) {
        await axios.post('login', User)
        await commit('setUser', User.get('email'))
    },
    async CreatePost({dispatch}, person) {
        await axios.post('person', person)
        await dispatch('GetPersons')
    },
    async LogOut({commit}){
        let user = null
        commit('logout', user)
    }

};
const mutations = {
    setUser(state, email){
        state.user = email
    },
    setPosts(state, persons){
        state.posts = persons
    },
    LogOut(state){
        state.user = null
        state.posts = null
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};