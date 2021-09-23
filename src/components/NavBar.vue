<template>
  <nav>
  <router-link to="/">Home</router-link>
  <router-link to="/register">Register</router-link>
  <router-link to="/login">Login</router-link>
  <router-link to="/test">Test</router-link>
  <span v-if="isLoggedIn">
          <a @click="logout">Logout</a>
        </span>
  </nav>
</template>

<script>
export default {
  name: 'nav-bar',
  computed : {
    isLoggedIn : function(){ return this.$store.getters.isAuthenticated}
  },
  methods: {
    async logout (){
      await this.$store.dispatch('LogOut')
      this.$router.push('/login')
    }
  },
}
</script>