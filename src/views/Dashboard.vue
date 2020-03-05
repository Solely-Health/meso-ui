<template>
  <v-card>
    <Calendar v-bind="calendar"/>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Calendar from '../components/Calendar/Calendar.vue';

// Load sample data
import { sampleCalendar } from './utils/sampleData';

export default Vue.extend({
  name: 'Home',
  data: () => ({
    calendar: sampleCalendar,
  }),
  components: {
    Calendar,
  },
});
</script>
