<template>
  <div class="register">
    <div>
      <form @submit.prevent="submit">
        <div>
          <label for="name">Naem:</label>
          <input type="text" name="name" v-model="form.name">
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" name="email" v-model="form.email">
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" name="password" v-model="form.password">
        </div>
        <div>
          <label for="password_confirmation">Password check:</label>
          <input type="password_confirmation" name="password_confirmation" v-model="form.password_confirmation">
        </div>
        <button type="submit"> Submit</button>
      </form>
    </div>
    <p v-if="showError" id="error">Name already exists</p>
  </div>
</template>


<script>
import { mapActions } from "vuex";
export default {
  name: "RegisterPage",
  components: {},
  data() {
    return {
      form: {
        first_name: "",
        last_name: "",
        password: "",
      },
      showError: false
    };
  },
  methods: {
    ...mapActions(["Register"]),
    async submit() {
      try {
        await this.Register(this.form);
        this.$router.push("/");
        this.showError = false
      } catch (error) {
        this.showError = true
      }
    },
  },
};
</script>

<style>
h1 {
  color:blue;
}
</style>