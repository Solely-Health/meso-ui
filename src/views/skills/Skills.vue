<template>
<v-container grid-list-xs>
  <v-row justify="center">
    <v-img src="./../../assets/meso_logo.svg" class="ma-5" contain max-width="225"></v-img>
  </v-row>
  <v-row justify="center">
    <h2 class="text-center mt-3 mb-3">Add Skills</h2>
  </v-row>
  <v-row justify="center">
    <v-col col="6" sm="6">
      <v-combobox
        v-model="skillsList"
        :items="items"
        :search-input.sync="search"
        hide-selected
        label="Add your skills"
        multiple
        persistent-hint
        small-chips
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-combobox>
    </v-col>
  </v-row>
  <v-footer
      absolute
      class="font-weight-medium navigator-footer"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <Navigator @next-clicked="handleNextEvent" previousRoute="license" nextRoute="location"></Navigator>
  
      </v-col>
    </v-footer>
</v-container>


  
</template>
<script lang="ts">
import Vue from 'vue';
import Navigator from '../../components/global/Navigator/Navigator.vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'skills',
  data() {
    return {
      items: ['Gaming', 'Programming', 'Vue', 'Vuetify'],
      skillsList: null,
      search: null,
    };
  },
  components: {
    Navigator,
  },
  methods: {
    ...mapActions(['addSkills']),
    handleNextEvent(event) {
      this.addSkills(this.skillsList);
    },
  },
});
</script>

<style lang="scss">
  @import './_Skills.scss';
</style>