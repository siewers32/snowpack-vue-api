<template>
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

  }
}
</script>

<style>
  h1 {
    color:blue;
  }
</style>