<template>
  <Calendar />
</template>

<script lang="ts">
import Vue from 'vue';
import Calendar from '../components/Calendar/Calendar.vue';

export default Vue.extend({
  name: 'Home',

  components: {
    Calendar,
  },
});
</script>
