<template>
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
  q></v-calendar>
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
  },
});
</script>
