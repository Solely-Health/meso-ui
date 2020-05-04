<template>
<v-container grid-list-xs>
  <v-row justify="center">
    <v-img src="./../../assets/meso_logo.svg" class="ma-5" contain max-width="225"></v-img>
  </v-row>
  <h2 class="text-center mt-3 mb-3" >Set Search Range</h2>
  <v-row>
    <v-col col="12">
        <v-card
        v-on:click="getUserLocation()"
        class="mx-auto"
        max-width="344"
        outlined
        raised
      >
        <v-list-item three-line>
            <v-list-item-avatar tile rounded size="90" class="rounded">
							<v-icon x-large class="grey lighten-3">mdi-map-marker</v-icon>
						</v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title color="black">Use my current Location</v-list-item-title>
          </v-list-item-content>      
        </v-list-item>
      </v-card>
    </v-col>
  </v-row>
  <v-row>
    <v-col col="12" >
      <h3 class="text-center">Or</h3>
    </v-col>
  </v-row>
  <v-row justify="center">
    <v-col col="6" sm="5" md="4">
      <v-text-field
        v-model="zipCode"
        type="number"
        label="Enter Zip Code"
        outlined
      ></v-text-field>
    </v-col>
    <v-col col=6 sm=3 md =2>
      <v-btn
          class="mr-4 mt-2"
					:disabled="zipCode.length < 5"
          v-on:click="getZipcodeLocation()"
        >
        Locate me
      </v-btn> 
    </v-col>
  </v-row>
  <v-row justify="center">
    <v-col col="12" sm="8" md="6">
      <h3 class="text-center"> Search Radius (miles)</h3>
    </v-col>
  </v-row>

		<v-row>
			<v-col class="pr-4">
				<v-slider v-model="mileRadius" class="align-center" :max="max" :min="min" hide-details>
					<template v-slot:append>
						<v-text-field
							v-model="mileRadius"
							class="mt-0 pt-0"
							hide-details
							single-line
							type="number"
							:thumb-size="24"
							thumb-label="always"
							style="width: 60px"
						></v-text-field>
					</template>
				</v-slider>
			</v-col>
		</v-row>
		<v-footer absolute class="font-weight-medium navigator-footer">
			<v-col class="text-center" cols="12">
				<Navigator @next-clicked="handleNextEvent" previousRoute="skills" nextRoute="complete"></Navigator>
			</v-col>
		</v-footer>
		<v-dialog
			class="v-dialog"
				v-model="dialog"
				max-width="500px"
				scrollable
			>
				<v-card>
          <v-card-text>
            <v-container>
              <v-row align="center" justify="center">
                <v-card-title primary-title>
									Location successfully added!
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
	</v-container>
</template>
<script lang="ts">
import Vue from 'vue';
import Navigator from '../../components/global/Navigator/Navigator.vue';
import { mapActions, mapState } from 'vuex';
const zipcodes = require('zipcodes');
export default Vue.extend({
	components: {
		Navigator,
	},
	data: () => {
		return {
			dialog: false,
			zipCode: '',
			min: 0,
			mileRadius: 20,
			max: 100,
			range: [0, 100],
			workerLocation: {
				latitude: '',
				longitude: '',
				mileRadius: '',
			},
		};
	},
	methods: {
		...mapActions(['addLocation']),
		getUserLocation() {
			navigator.geolocation.getCurrentPosition(
				(pos) => {
					const currLocation = pos.coords;
					this.workerLocation.latitude = pos.coords.latitude + '';
					this.workerLocation.longitude = pos.coords.longitude + '';
					this.dialog = true;
				},
				(err) => {
					// console.log(err);
				},
			);
		},
		getZipcodeLocation() {
			const currLocation = zipcodes.lookup(this.zipCode);
			this.workerLocation.latitude = currLocation.latitude + '';
			this.workerLocation.longitude = currLocation.longitude + '';
			this.dialog = true;

		},
		handleNextEvent(event) {
			this.workerLocation.mileRadius = this.mileRadius + '';
			this.addLocation(this.workerLocation);
		},
	},
});
</script>

<style lang="scss">
@import './_Location.scss';
</style>
