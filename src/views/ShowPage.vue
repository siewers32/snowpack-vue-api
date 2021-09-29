<template>
  <h1>Hello from test</h1>
  <person-request/>
</template>

<script>
import PersonRequest from "../components/PersonRequest";
export default {
  name: "Show",
  components: {
    PersonRequest,
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