<template>
<v-container  grid-list-xs>
  <v-row align="center" justify="center" class="mt-8">    
      <v-img src="./../../assets/check-circle.png"  max-height="250" max-width="250"  
      style="height: 100vh;"
      alt="Registration Complete"/>
  </v-row>
  <v-row justify="center">
    <v-col col="12">
      <h1 class="text-center mt-3 mb-3" >You're all set!</h1>
    </v-col>
  </v-row>
  <v-row no-gutters justify="center">
      <div class="my-2">
        <v-btn style="width: 16rem;" class="text-center" large color="primary">Go to My Profile</v-btn>
      </div>
  </v-row>
  <v-row no-gutters justify="center">
    <div class="my-2">
        <v-btn style="width: 16rem;" class="text-center" large color="primary">Go to My Schedule</v-btn>
      </div>
  </v-row>
  

</v-container>
  
  
</template>
<script lang="ts">
import Vue from 'vue';
var zipcodes = require('zipcodes');
export default Vue.extend({
  data() {
    return {
      location: {},
      zipCode: null,
      min: 0,
      max: 100,
      mileRadius: 40,
      range: [0, 100],
      
    };
  },
  methods: {
    getUserLocation: function() {
        navigator.geolocation.getCurrentPosition(pos => {
        this.location = pos.coords
        console.log(pos);
      }, err => {
        console.log(err);
      });
    },
    getZipcodeLocation: function() {
      this.location = zipcodes.lookup(this.zipCode)
      console.log(this.location)
    }  
  } 
});
</script>

