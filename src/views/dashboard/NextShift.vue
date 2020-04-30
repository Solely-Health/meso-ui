<template>
  <v-card class="mx-auto" tile>
    <v-list-item three-line  @click="$router.push('facility')">
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
      <v-btn :href="locationMap" target="_blank" class="mb-2" color="#80ACD3" fab small elevation="0">
        <v-icon color="white">mdi-map-marker</v-icon>
      </v-btn>
      <v-btn class="mb-2 mr-2" color="#75b78c" fab small elevation="0" @click="dialog = !dialog">
        <v-icon color="white">mdi-phone</v-icon>
      </v-btn>
    </v-card-actions>
    <v-dialog
			class="v-dialog"
				v-model="dialog"
				max-width="500px"
				scrollable
			>
				<v-card>
          <v-card-title justify="center">
            <span class="headline text-center">Phone Number</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row align="center" justify="center">
                <v-card-title primary-title>
                  <a :href="`+1${phoneNumber}`">{{phoneNumber}}</a>
                </v-card-title>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1 mb-5 ml-5" text @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
			</v-dialog>
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
    locationMap: String,
    phoneNumber: String,
  },
  data: () => ({
		dialog: false,
	}),
};
</script>
