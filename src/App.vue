<template>
  <header>
    <nav-bar/>
  </header>
  <main>
    <router-view/>
  </main>

</template>

<script>
import NavBar from "./components/NavBar"
import {mapGetters} from 'vuex'
import { onMounted } from 'vue'
import store from './store'

export default {
  setup () {
    onMounted(() => {
      console.log('mounted in the composition api!')
      const userInfo = localStorage.getItem('user')
      if (userInfo) {
        const userData = JSON.parse(userInfo)
        store.commit('setUserData', userData)
      }
    })
  },

  name: "app",

  components: {
    NavBar
  },
  computed: {
    ...mapGetters([
      'isLogged'
    ])
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
}
</script>

<style>
main {
  background-color: yellow;
  width: 80%;
  margin: auto;
  min-height: 200px;
}

nav {
  background-color: palegreen;
}
</style>






