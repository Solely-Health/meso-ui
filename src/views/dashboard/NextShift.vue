<template>
  <v-card class="mx-auto" tile>
    <v-list-item three-line>
      <v-list-item-avatar tile rounded size="90" class="mt-8 rounded">
        <v-icon x-large class="grey lighten-3">mdi-map-marker</v-icon>
      </v-list-item-avatar>

      <v-list-item-content>
        <router-link tag="span" to="/position">
          <v-list-item-title class="font-weight-bold mt-4 mb-1" router :to="{name: 'Position'}">
            {{ position }}
            <v-icon color="green" >mdi-arrow-right-bold-circle-outline</v-icon>
          </v-list-item-title>
        </router-link>

        <v-list-item-subtitle class="mb--1">{{ locationName }}</v-list-item-subtitle>
        <v-list-item-title>{{ startTime }} - {{ endTime }}</v-list-item-title>
        <v-list-item-subtitle no-gutters>{{ date }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions class="px-0 py-0 m-0">
      <v-spacer></v-spacer>
      <v-btn class="mb-2" color="#80ACD3" fab small elevation="0">
        <v-icon color="white">mdi-map-marker</v-icon>
      </v-btn>
      <v-btn class="mb-2 mr-2" color="#75b78c" fab small elevation="0">
        <v-icon color="white">mdi-phone</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    id: Number,
    position: String,
    locationName: String,
    startTime: String,
    endTime: String,
    date: String,
  },
};
</script>
