<template>
  <h1>Hello from home {{ test }}</h1>
  <nav>
    <router-link to="/register">Register</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/test">Test</router-link>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {
  data () {
    return {
      test: "World"
    }
  }
}
</script>

<style>
h1 {
  color:blue;
}
</style>