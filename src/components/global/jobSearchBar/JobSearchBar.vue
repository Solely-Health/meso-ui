<template>
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
				<v-btn small class="mx-auto mt-2 " fab dark color="#6A8EAE">
					<v-icon dark>mdi-filter-variant</v-icon>
				</v-btn>
			</v-col>
		</v-row>
</template>

<script>
export default {

};
</script>

<style lang="scss">
@import "./_JobSearchBar.scss";
</style>