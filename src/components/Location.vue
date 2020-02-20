<template>
<v-container grid-list-xs>
  <h1 class="text-center mt-3 mb-3" >Set Search Range</h1>
  <v-row>
    <v-col col="12">
        <v-card
        class="mx-auto"
        max-width="344"
        outlined
      >
        <v-list-item three-line>
          <v-list-item-avatar
            tile
            size="80"
            color="grey"
          ></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title color="black">Use my current Location</v-list-item-title>
          </v-list-item-content>      
        </v-list-item>
      </v-card>
    </v-col>
  </v-row>
  <v-row>
    <v-col col="12" >
      <h2 class="text-center">Or</h2>
    </v-col>
  </v-row>
  <v-row justify="center">
    <v-col col="12" sm="8" md="6">
      <v-text-field
        v-model="zipCode"
        type="number"
        label="Enter Zip Code"
        outlined
      ></v-text-field>
    </v-col>
  </v-row>
  <v-row justify="center">
    <v-col col="12" sm="8" md="6">
      <h2 class="text-center"> Search Radius (miles)</h2>
    </v-col>
  </v-row>

  <v-row>
        <v-col class="pr-4">
            <v-slider
              v-model="slider"
              class="align-center"
              :max="max"
              :min="min"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="slider"
                  class="mt-0 pt-0"
                  hide-details
                  single-line
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </v-col>
      </v-row>

</v-container>
  
  
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      zipCode: null,
      min: 0,
      max: 100,
      slider: 40,
      range: [0, 100],
    };
  },
});
</script>

