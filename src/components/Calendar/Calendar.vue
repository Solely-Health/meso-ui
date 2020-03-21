<template>
    <div>
      <v-card
      class="mx-auto overflow-hidden"
  >
    <v-system-bar color="deep-purple darken-3"></v-system-bar>

    <v-app-bar
      color="deep-purple accent-4"
      dark
      prominent
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>My files</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
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
      
  },

  data: () => ({
    type: 'month',
    mode: 'stack',
    weekdays: weekdaysDefault,
    color: 'primary',
    drawer: false,
    group: null,
  }),
  methods: {
    getEventColor(event: CalendarEvent) {
      return event.color;
    },
  },
   watch: {
      group () {
        this.drawer = false
      },
    },
});
</script>
