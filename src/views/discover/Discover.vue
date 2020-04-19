<template>
<v-container >
  <v-row class="mt-6" no-gutters>
    
          <v-col cols="10" sm="5" offset-sm="3" md="5" offset-md="3" lg="5"  offset-lg="3" >
            <v-text-field
            dense
            filled
            label="Search Jobs..."
            prepend-inner-icon="mdi-magnify"
            ></v-text-field>
          </v-col>
          <v-col cols="2" sm="1" md="1" class="text-right text-md-center text-lg-right" justify-end justify-md-center justify-lg-start >
            <v-btn small class="mx-auto mt-2 " fab dark color="#6A8EAE">
              <v-icon dark>mdi-filter-variant</v-icon>
            </v-btn>
          </v-col>
  </v-row>

    <v-row no-gutters>
      <v-col justify-center 
        cols="12"
        sm="6"
        offset-sm="3"
        md="6"
        offset-md="3"
        lg="4"
        offset-lg="4"
        >
        
        <v-card
        class="mx-auto"
        raised
        >
        <v-list-item three-line>
          <v-list-item-avatar
            tile
            rounded
            size="90"
            class="mt-8 rounded"
          >
            <v-icon
            x-large
            class="grey lighten-3"
            
          >mdi-map-marker</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            
            <v-list-item-title class="title mt-2 mb-1">Respiratory Therapist</v-list-item-title>
            <v-list-item-subtitle class="mb--1">West Hills Hospital</v-list-item-subtitle>
            <v-list-item-title>10:00AM - 2:00PM</v-list-item-title>
            <v-list-item-subtitle no-gutters>11/27/2020</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-card-actions class="px-0 py-0 m-0">
              <v-spacer></v-spacer>

              <v-btn class="mb-3 mr-3">
                Interested
              </v-btn>
            </v-card-actions>
      </v-card>

      </v-col>
    </v-row>
    
</v-container>
  
  
</template>
<script lang="ts">
import Vue from 'vue';
const zipcodes =  require('zipcodes');
export default Vue.extend({
  data() {
    return {
      filters: [''],
      results: [],
      
      
    };
  },
  methods: {
    
  },
});
</script>

<style lang="scss">
  @import './_Discover.scss';
</style>

