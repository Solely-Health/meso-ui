<template>
  <v-sheet>
    <v-calendar
      ref="calendar"
      v-model="start"
      :type="type"
      :start="start"
      :end="end"
      :min-weeks="minWeeks"
      :max-days="maxDays"
      :now="now"
      :weekdays="weekdays"
      :short-months="true"
      :short-weekdays="true"
      :color="color"
      :events="events"
      :event-overlap-mode="mode"
      :event-overlap-threshold="45"
      :event-color="getEventColor"
      @change="getEvents"
    ></v-calendar>
  </v-sheet>
</template>

<script lang="ts">
const weekdaysDefault = [0, 1, 2, 3, 4, 5, 6];

// const stylings = {
//   default(interval: any) {
//     return undefined;
//   },
//   workday(interval: any): any {
//     const inactive =
//       interval.weekday === 0 ||
//       interval.weekday === 6 ||
//       interval.hour < 9 ||
//       interval.hour >= 17;
//     const startOfHour = interval.minute === 0;
//     const mid = 'rgba(0,0,0,0.1)';

//     return {
//       borderTop: startOfHour ? undefined : '1px dashed ' + mid,
//     };
//   },
// };

import Vue from 'vue';

export default Vue.extend({
  name: 'Calendar',

  props: {
      start: String,
      end: String,
      events: [],
  },

  data: () => ({
    start: '2018-12-12',
    end: '2019-01-27',
    nowMenu: false,
    minWeeks: 1,
    now: null,
    events: [],
    colors: [
      'blue',
      'indigo',
      'deep-purple',
      'cyan',
      'green',
      'orange',
      'grey darken-1',
    ],
    names: [
      'Meeting',
      'Holiday',
      'PTO',
      'Travel',
      'Event',
      'Birthday',
      'Conference',
      'Party',
    ],
    type: 'month',
    mode: 'stack',
    weekdays: weekdaysDefault,
    maxDays: 7,
    styleInterval: 'default',
    color: 'primary',
  }),
  computed: {
    hasIntervals() {
      return (
        this.type in
        {
          'week': 1,
          'day': 1,
          '4day': 1,
          'custom-daily': 1,
        }
      );
    },
    hasEnd() {
      return (
        this.type in
        {
          'custom-weekly': 1,
          'custom-daily': 1,
        }
      );
    },
  },
  methods: {
    viewDay({ date }) {
      this.start = date;
      this.type = 'day';
    },
    getEventColor(event) {
      return event.color;
    },
    getEvents({ start, end }) {
      const events = [];

      const min = new Date(`${start.date}T00:00:00`);
      const max = new Date(`${end.date}T23:59:59`);
      const days = (max.getTime() - min.getTime()) / 86400000;
      const eventCount = this.rnd(days, days + 20);

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0;
        const firstTimestamp = this.rnd(min.getTime(), max.getTime());
        const first = new Date(firstTimestamp - (firstTimestamp % 900000));
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
        const second = new Date(first.getTime() + secondTimestamp);

        events.push({
          // @ts-ignore
          name: this.names[this.rnd(0, this.names.length - 1)],
          // @ts-ignore
          start: this.formatDate(first, !allDay),
          // @ts-ignore
          end: this.formatDate(second, !allDay),
          // @ts-ignore
          color: this.colors[this.rnd(0, this.colors.length - 1)],
        });
      }
      // @ts-ignore
      this.events = events;
    },
    rnd(a: any, b: any) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
    formatDate(a: any, withTime: any) {
      return withTime
        ? `${a.getFullYear()}-${a.getMonth() +
            1}-${a.getDate()} ${a.getHours()}:${a.getMinutes()}`
        : `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()}`;
    },
  },
});
</script>
