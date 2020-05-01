<template>
	<v-container class="px-6 pb-6">
    <div class="title pt-3 pb-2">Scheduling</div>
		<ScheduleSnapshot :today="todayString" />
    <div class="title pt-6 pb-2">Next Shift</div>
		<NextShift v-bind="nextShift" />
    <div class="title pt-6 pb-2">Upcoming</div>
		<v-card tile class="pa-4">
			<Calendar v-bind="calendar" displayMonth />
		</v-card>
	</v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Calendar from './../../components/Calendar/Calendar.vue';
import NextShift from './NextShift.vue';
import ScheduleSnapshot from './ScheduleSnapshot.vue';

// Load sample data
import { sampleCalendar } from './../utils/sampleData';

export default Vue.extend({
	name: 'Home',
	data: () => ({
		calendar: sampleCalendar,
		todayString: '',
		nextShift: {
			id: 1,
			position: 'Respiratory Therapist',
			locationName: 'West Hills Hospital',
			startTime: '10:00AM',
			endTime: '2:00PM',
			date: '',
			phoneNumber: '(818) 676-4000',
			locationMap: 'https://www.google.com/maps/dir//West+Hills+Hospital+and+Medical+Center,+7300+Medical+Center+Dr,+West+Hills,+CA+91307/@34.1897213,-118.724557,10z/data=!4m9!4m8!1m0!1m5!1m1!1s0x80c29db3ae29c899:0xd606d9769cbbdfcb!2m2!1d-118.6292184!2d34.202827!3e0',
		},
	}),
	components: {
		Calendar,
		NextShift,
    ScheduleSnapshot,
	},
	mounted() {
		this.setDates();
	},
	methods: {
		setDates() {
			const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
			const today = new Date();
			const tomorrow = new Date(today);
			tomorrow.setDate(tomorrow.getDate() + 1);
			this.todayString = `${days[today.getDay()]}, ${today.getMonth() + 1}/${today.getDate()}`;
			this.nextShift.date = `${days[tomorrow.getDay()]}, ${tomorrow.getMonth() +
				1}/${tomorrow.getDate()}/${tomorrow.getFullYear()}`;
		},
	},
});
</script>

<style lang="scss">
@import './_Calendar.scss';
</style>
