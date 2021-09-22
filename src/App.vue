<template>
    <div class="jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            <!-- <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>-->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  <h3 class="p-3 text-center">Personen ophalen uit API</h3>
  <get-request/>
</template>

<script>
import GetRequest from "./GetRequest";
import { mapState, mapActions } from 'vuex';

export default {
  name: "app",
  components: {
    GetRequest,
  },
  computed: {
    ...mapState({
      alert: state => state.alert
    })
  },
  methods: {
    ...mapActions({
      clearAlert: 'alert/clear'
    })
  },
  watch: {
    $route (to, from){
      // clear alert on location change
      this.clearAlert();
    }
  }

};
</script>







