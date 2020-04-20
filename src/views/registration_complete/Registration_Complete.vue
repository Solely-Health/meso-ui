<template>
<v-container class="container-complete"  grid-list-xs>
  <v-row justify="center" align="center" class="check-div">    
      <v-img src="./../../assets/check-circle.png"  max-height="250" max-width="250"  
      alt="Registration Complete"/>
  </v-row>
  <v-row justify="center">
    <v-col col="12">
      <h1 class="text-center mt-3 mb-3" >You're all set!</h1>
    </v-col>
  </v-row>
  <v-row no-gutters justify="center">
      <div class="my-2">
        <v-btn  class="text-center redirection-button" large color="primary" router :to="{name: 'profile'}">Go to My Profile</v-btn>
      </div>
  </v-row>
  <v-row no-gutters justify="center">
    <div class="my-2">
        <v-btn  class="text-center redirection-button" large color="primary" router :to="{name: 'dashboard'}">Go to My Schedule</v-btn>
      </div>
  </v-row>

  

  
</v-container>
</template>


<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="scss">
@import "./_Registration_Complete.scss";
</style>
