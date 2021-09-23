<template>
  <header>
    <nav-bar/>
  </header>
  <main>
    <router-view/>
  </main>

</template>

<script>
import NavBar from "./components/NavBar";
  export default {
    name: "app",
    components: {
      NavBar
    }
}
</script>

<style>
main {
  background-color: yellow;
  width:80%;
  margin:auto;
  min-height:200px;
}
nav {
  background-color: palegreen;
}
</style>






