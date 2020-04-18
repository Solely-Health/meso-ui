<template>
<v-container grid-list-xs>
  <h1 class="text-center mt-3 mb-3" >Set Search Range</h1>
  
  <v-footer
      absolute
      class="font-weight-medium navigator-footer"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <Navigator previousRoute="skills" nextRoute="complete"></Navigator>
  
      </v-col>
  </v-footer>

</v-container>
  
  
</template>
<script lang="ts">
import Vue from 'vue';
const zipcodes =  require('zipcodes');
export default Vue.extend({
  data() {
    return {
    };
  },
  methods: {
    
  },
});
</script>

<style lang="scss">
  @import './_Discover.scss';
</style>

