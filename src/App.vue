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

export default {
  setup() {

    onMounted(() => {
      console.log('Component is mounted!')
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
    },
  }
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






