<template>
	<v-row>
		<v-col justify-center cols="12" sm="6" offset-sm="3" md="6" offset-md="3" lg="4" offset-lg="4">
			<v-card class="mx-auto" tile>
				<v-list-item three-line>
					<v-list-item-avatar tile rounded size="90" class="mt-8 rounded">
						<v-icon x-large class="grey lighten-3">mdi-map-marker</v-icon>
					</v-list-item-avatar>
					<v-list-item-content>
						<v-list-item-title class="font-weight-bold mt-4 mb-1"
							>{{ position }} <v-icon color="green">mdi-arrow-right-bold-circle-outline</v-icon>
						</v-list-item-title>
						<v-list-item-subtitle class="mb--1">{{ locationName }}</v-list-item-subtitle>
						<v-list-item-title>{{ startTime }} - {{ endTime }}</v-list-item-title>
						<v-list-item-subtitle no-gutters>{{ date }}</v-list-item-subtitle>
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
<style lang="scss">
@import './_JobThumbnail.scss';
</style>
