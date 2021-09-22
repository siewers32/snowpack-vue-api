<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/test">Test</router-link>
    </nav>
  </header>
  <main>
    <router-view/>
  </main>

</template>

<script>
  import GetRequest from "./components/GetRequest";
  export default {
    name: "app",

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






