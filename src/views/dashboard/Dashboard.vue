<template>
<div>
    <v-card>
      <Calendar v-bind="calendar"/>
    </v-card>  
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Calendar from './../../components/Calendar/Calendar.vue';

// Load sample data
import { sampleCalendar } from './../utils/sampleData';

export default Vue.extend({
  name: 'Home',
  data: () => ({
    name: 'Mikkal',
    calendar: sampleCalendar,
    drawer: false,
    items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', link: 'dashboard' },
        { title: 'My Profile', icon: 'mdi-account', link: 'profile' },
        {title: 'Discover', icon: 'mdi-briefcase', link: 'discover'},
        {title: 'Scheduling', icon: 'mdi-calendar-blank', link: 'schedule'},
        { title: 'Logout', icon: 'mdi-logout', link: 'login' },
      ],
  }),
  components: {
    Calendar,
  },
});
</script>

<style lang="scss">
  @import './_Calendar.scss';
</style>
