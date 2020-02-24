<template>
  <HelloWorld />
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '../components/HelloWorld.vue';
import SignUp from '../components/SignUp.vue';

export default Vue.extend({
  name: 'Home',

  components: {
    HelloWorld,
    SignUp,
  },
});
</script>
