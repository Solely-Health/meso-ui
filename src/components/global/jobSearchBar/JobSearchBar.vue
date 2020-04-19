<template>
	<div>
		<v-row class="mt-6" no-gutters>
			<v-col
				cols="10"
				sm="5"
				offset-sm="3"
				md="5"
				offset-md="3"
				lg="5"
				offset-lg="3"
			>
				<v-text-field
					dense
					filled
					label="Search Jobs..."
					prepend-inner-icon="mdi-magnify"
				></v-text-field>
			</v-col>
			<v-col
				cols="2"
				sm="1"
				md="1"
				class="text-right text-lg-center"
				justify-end
				justify-md-center
				justify-lg-start
			>
				<v-btn small class="mx-auto mt-2 " fab dark color="#6A8EAE" @click="dialog = !dialog">
					<v-icon dark>mdi-filter-variant</v-icon>
				</v-btn>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12" sm="5" offset-sm="3">
				<v-chip v-for="(filteredSetting, index) in filteredSettings" :key="index"
				class="ma-2"
				close
				@click:close="removeFilteredSetting(index)"
				>
					{{filteredSetting}}
				</v-chip>
			</v-col>
		</v-row>
		<v-row>
			<v-dialog
			class="v-dialog"
				v-model="dialog"
				max-width="500px"
				scrollable
			>
				<v-card>
          <v-card-title>
            <span class="headline">Filter Results</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row justify-center no-gutters>
								<v-col cols="12">
									<v-card-subtitle class="title">Distance (miles):</v-card-subtitle>
									<v-slider
										class="mt-2"
										v-model="slider"
										:thumb-size="24"
										thumb-label="always"
									></v-slider>
								</v-col>
								<v-col cols="12">
									<v-text-field v-model="dateRangeText" label="Date range" prepend-icon="mdi-calendar" readonly></v-text-field>
									
								</v-col>
								<v-col cols="12" justify-center class="text-center">
									<v-date-picker v-model="dates" range></v-date-picker>
								</v-col> 
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1 mb-5 ml-5" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1 mb-5 mr-5" text  @click.stop="saveFilteredSettings()">Save</v-btn>
          </v-card-actions>
        </v-card>
			</v-dialog>
		</v-row>
	</div>
  
		
</template>

<script>
export default {
	data: () => ({
			dialog: false,
			slider: null,
			dates: [],
			filteredSettings: [],
		}),
		computed: {
      dateRangeText() {
        return this.formatDateRange();
      },
		},
		methods: {
			saveFilteredSettings() {
				this.filteredSettings = [];
				if (this.slider > 0) {
					this.filteredSettings.push(`${this.slider} mi.`);
				}
				if (this.dates.length !== 0) {
					this.filteredSettings.push(this.formatDateRange());
				}
				this.dialog = false;
			},
			formatDateRange() {
        return `from ${this.dates[0] !== undefined ? this.dates[0] : '?'} to ${this.dates[1] !== undefined ? this.dates[1] : '?' }`;
			},
			removeFilteredSetting(index) {
				this.filteredSettings.splice(index, 1);
			},
		},
	};
</script>

<style lang="scss">
@import "./_JobSearchBar.scss";
</style>