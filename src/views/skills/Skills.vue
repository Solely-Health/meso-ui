<template>
<v-container grid-list-xs>
  <v-row justify="center">
    <h1 class="align-center">Add Skills</h1>
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
        <Navigator previousRoute="registration" nextRoute="location"></Navigator>
  
      </v-col>
    </v-footer>
</v-container>


  
</template>
<script lang="ts">
import Vue from 'vue';
import Navigator from '../../components/global/Navigator/Navigator.vue';

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
});
</script>

<style lang="scss">
  @import './_Skills.scss';
</style>