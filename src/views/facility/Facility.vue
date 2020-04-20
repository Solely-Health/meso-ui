<template>
	<v-container>
		<facility-card></facility-card>
    <v-layout align-center justify-center>
      <v-card class="ma-5">
        <v-card-title>Description</v-card-title>
        <v-card-subtitle>{{description}}</v-card-subtitle>
      </v-card>
    </v-layout>
    <v-layout align-center justify-center>
      <v-card class="ma-5">
        <v-card-title>Certificates</v-card-title>
        <v-flex wrap>
          <v-chip close v-for="license in licenses" 
            :key="license" 
            class="chips pa-3 ma-2"
            color="#75b78c"
            text-color="white">{{license}}</v-chip>
        </v-flex>
      </v-card>
    </v-layout>
    <v-layout align-center justify-center>
      <v-card class="ma-5">
        <v-card-title>Skills</v-card-title>
        <v-flex wrap>
          <v-chip close v-for="skill in skills" 
            :key="skill"
            class="chips pa-3 ma-2"
            color="#75b78c"
            text-color="white">{{skill}}</v-chip>
        </v-flex>
      </v-card>
    </v-layout>

    
	</v-container>
</template>
<script lang="ts">
import Vue from 'vue';
import FacilityCard from './../../components/FacilityCard/FacilityCard.vue';
export default Vue.extend({
  data: () => ({
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        licenses: ['CPR' , 'Respritory Therapist', 'Registered Nurse'],
        skills: ['Patient monitoring systems' , 'Vital sign monitoring', 'Ethical', 'Diagnostic Equipment', 'Strict Attention To Detail'],
}),
  components: {
    FacilityCard,
  },
});
</script>

<style lang="scss">
@import "./_Facility.scss";
</style>