<template>
  <a @click="increment">Click me!</a>
  <h1>Hello from test</h1>
  <get-request/>
</template>

<script>
import GetRequest from "../components/GetRequest";
export default {
  name: "Test",
  components: {
    GetRequest,
  },
  methods: {
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  }
}
</script>

<style>
  h1 {
    color:blue;
  }
</style>