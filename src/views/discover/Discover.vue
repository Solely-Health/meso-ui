<template>
	<v-container>
		<job-search-bar></job-search-bar>
		<job-thumbnail
			v-for="result in this.discoverJobs"
			:key="result.PositionID"
			:id="result.PositionID"
			:position="result.Title"
			:locationName="result.FacilityTitle || 'Unavailable'"
			:startTime="validateTime(result.StartDateTime)"
			:endTime="validateTime(result.EndDateTime)"
			:date="'MM/DD/YYYY'"
		/>
	</v-container>
</template>
<script lang="ts">
import Vue from 'vue';
import JobSearchBar from './../../components/global/jobSearchBar/JobSearchBar.vue';
import JobThumbnail from './../../components/global/jobThumbnail/JobThumbnail.vue';
import { mapState, mapActions } from 'vuex';
export default Vue.extend({
	data: () => ({
		// results: [
		// 	{
		// 		id: 1,
		// 		position: 'Respiratory Therapist',
		// 		locationName: 'West Hills Hospital',
		// 		startTime: '10:00AM',
		// 		endTime: '2:00PM',
		// 		date: '4/20/2020',
		// 	},
		// 	{
		// 		id: 2,
		// 		position: 'Respiratory Therapist',
		// 		locationName: 'Cedar Sinai Hospital',
		// 		startTime: '11:00PM',
		// 		endTime: '11:00AM',
		// 		date: '5/23/2020',
		// 	},
		// 	{
		// 		id: 3,
		// 		position: 'Respiratory Therapist',
		// 		locationName: 'Valley Presbiterian Hospital',
		// 		startTime: '11:00PM',
		// 		endTime: '11:00AM',
		// 		date: '5/25/2020',
		// 	},
		// ],
	}),
	mounted() {
		this.getAllPositions();
	},
	computed: {
		...mapState({
			discoverJobs: (state) => state.job.discoverJobs,
		}),
	},
	methods: {
		...mapActions(['getAllPositions']),
    validateTime(time) {
      return (Object.keys(time).length == 0 ? 'Time N/A' : time);
    },
	},
	components: {
		JobSearchBar,
		JobThumbnail,
	},
});
</script>

<style lang="scss">
@import './_Discover.scss';
</style>
