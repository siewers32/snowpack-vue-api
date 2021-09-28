<template>
  <nav>
  <router-link to="/">Home</router-link>
  <router-link to="/register">Register</router-link>
  <router-link to="/login">Login</router-link>
  <router-link v-if="isLogged" to="/test">Test</router-link>
  <span v-if="isLogged">
          <a @click="logout">Logout</a>
        </span>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'nav-bar',
  computed : {
    ...mapGetters([
      'isLogged'
    ])
  },
  methods: {
    async logout (){
      this.$store.dispatch('logout')
    }
  },
}
</script>