<template>
  <nav>
  <router-link to="/register">Register</router-link>
  <router-link to="/">Login</router-link>
  <router-link v-if="isLogged" to="/show">Show</router-link>
  <span v-if="isLogged">
          <a href="#" @click="logout">Logout</a>
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