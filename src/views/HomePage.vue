<template>
  <h1>Hello from home {{ test }}</h1>
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