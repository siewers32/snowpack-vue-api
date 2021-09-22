<template>
  <div className="card text-center m-3">
    <h5 className="card-header">Geef personen weer...</h5>
    <ul id="array-rendering">
      <li v-for="person in persons">
        {{ person.first_name }}, {{ person.last_name }}, {{ person.email }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "get-request",
  data() {
    return {
      persons: null
    };
  },
  created() {
    // Simple GET request using fetch
    fetch('http://127.0.0.1:8888/api/person/search/a', {mode: 'cors'})
        .then(response => response.json())
        .then(data => (this.persons = data.data))
        .catch(error => (console.log('Request failed', error)));
  }
};
</script>

<style>
ul {
  background-color: cadetblue;
}
</style>