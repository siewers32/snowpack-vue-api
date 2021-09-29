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
import axios from 'axios';
export default {
  name: "person-request",
  data() {
    return {
      persons: null
    };
  },
  created() {
    axios
        .get('http://127.0.0.1:8000/api/person/search/a')
        .then(response => (this.persons = response.data.data))
  },
};

</script>

<style>
ul {
  background-color: cadetblue;
}
</style>