<template>
  <v-row align="center">
    <v-combobox
        v-model="model"
        :items="items"
        :search-input.sync="search"
        hide-selected
        hint="Maximum of 5 tags"
        label="Add some tags"
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

  </v-row>
  
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      items: ['Gaming', 'Programming', 'Vue', 'Vuetify'],
      model: ['Vuetify'],
      search: null,
    }
  },
  watch: {
    model(val) {
      if (val.length > 5) {
        this.$nextTick(() => this.model.pop())
      }
    }
  }

  
})
</script>

