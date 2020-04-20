<template>
	<div>
		<div v-if="displayMonth" class="subtitle-1 font-weight-bold text-center pb-2">{{getCurrentMonth()}}</div>
		<v-calendar
			ref="calendar"
			v-model="start"
			:type="type"
			:start="start"
			:end="end"
			:weekdays="weekdays"
			:short-months="true"
			:short-weekdays="true"
			:color="color"
			:events="events"
			:event-color="getEventColor"
			:event-overlap-mode="mode"
			:event-overlap-threshold="45"
			q
		></v-calendar>
	</div>
</template>

<script lang="ts">
const weekdaysDefault = [0, 1, 2, 3, 4, 5, 6];

import Vue from 'vue';
import { CalendarEvent } from './Calendar';

export default Vue.extend({
	name: 'Calendar',

	props: {
		start: String,
		end: String,
		events: Array,
		displayMonth: Boolean,
	},

	data: () => ({
		type: 'month',
		mode: 'stack',
		weekdays: weekdaysDefault,
		color: 'primary',
	}),
	methods: {
		getEventColor(event: CalendarEvent) {
			return event.color;
		},
    getCurrentMonth() {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const date = this.start.split('-');
      const year = date[0];
      const month = Number(date[1]);
      return `${months[month - 1]} ${year}`;
    },
	},
});
</script>
