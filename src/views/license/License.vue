<template>
<v-container grid-list-xs>
  <h1 class="text-center mt-3 mb-3" >Add Licenses</h1>
    <!-- <v-row justify-center>
      <v-col cols="12" md="6">
      <v-form>
        <div v-for="(license, index) in licenses" :key="index">
          <v-text-field v-model="license.licenseNumber" label="License Number" outlined dense></v-text-field> 
        </div>
      </v-form>
    </v-col>
    </v-row> -->
    <v-layout v-for="(license, index) in licenses" :key="index" align-center justify-center>
      <v-flex sm12 lg6>
          <v-row justify="center" no-gutters>
            <v-col cols="2" md="1">
              <v-list-item-avatar size="50">
                <v-icon large color="green">mdi-checkbox-marked-circle-outline</v-icon>
              </v-list-item-avatar>
            </v-col>   
            <v-col cols="10" md="10" class="mt-3">
                <v-form>
                  <div >
                    <v-text-field v-model="license.licenseNumber" label="License Number" outlined dense></v-text-field> 
                  </div>
                </v-form>
            </v-col>
        </v-row>
      </v-flex>
    </v-layout>
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

