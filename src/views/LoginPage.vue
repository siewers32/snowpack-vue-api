<template>
  <h1>Hello from login {{ test }}</h1>
  <form action="/" method="post">
    <label for="first_name">Voornaam</label>
    <input type="text" id="first_name" name="first_name">
    <label for="last_name">Achternaam</label>
    <input type="text" id="last_name" name="last_name">
    <input type="submit">
  </form>
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

label {
  display:block;
}

input[type="submit"] {
  display:block;
  margin-top:20px;
}
</style>