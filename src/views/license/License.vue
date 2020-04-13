<template>
<v-container grid-list-xs>
  <h1 class="text-center mt-3 mb-3" >Add Licenses</h1>
    <v-col center>
      <v-form>
        <div v-for="(license, index) in licenses" :key="index">
          <v-text-field v-model="license.licenseNumber" label="License Number" outlined dense></v-text-field> 
        </div>
      </v-form>
    </v-col>
  <v-row justify="center">
    <v-btn       
      dark
      centered
      color="primary"
      v-on:click="addLicense()"

      >
        <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-row>
  <v-footer absolute class="font-weight-medium navigator-footer">
    <v-col class="text-center" cols="12">
      <Navigator previousRoute="signup" nextRoute="skills"></Navigator>
    </v-col>
  </v-footer>
</v-container>
  
  
</template>
<script lang="ts">
import Vue from 'vue';
import Navigator from '../../components/global/Navigator/Navigator.vue';
export default Vue.extend({
  components: {
    Navigator,
  },
  data() {
    return {
      licenses: [
        {
          firstName: 'First',
          lastName: 'Last',
          licenseNumber: null,
          licenseType: {
          boardCode: 0,
          licenseName: 'Registered Nurse',
          licenseCode: 224,
          },
        },
      ],
    };
  },
  methods: {
    addLicense() {
      this.licenses.push({
          firstName: 'First',
          lastName: 'Last',
          licenseNumber: null,
          licenseType: {
          boardCode: 0,
          licenseName: 'Registered Nurse',
          licenseCode: 224,
          },
        });
    },
  },
});
</script>

<style lang="scss">
  @import './_License.scss';
</style>

