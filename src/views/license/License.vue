<template>
<v-container grid-list-xs justify="center">
  <v-row justify="center">
    <v-img src="./../../assets/meso_logo.svg" class="ma-5" contain max-width="225"></v-img>
  </v-row>
  <h2 class="text-center mt-3 mb-3" >Add Licenses</h2>
    <v-layout v-for="(license, index) in licenses" :key="index" align-center justify-center>
      <v-flex sm12 lg6>
          <v-row justify="center" no-gutters>
            <v-col cols="2" md="1">
              <v-list-item-avatar size="50">
                <v-icon large color="green" v-if="license.valid===1">mdi-checkbox-marked-circle-outline</v-icon>
                <v-icon large color="red" v-if="license.valid===0" @click="removeLicenseFromList(index)"> mdi-close-circle-outline</v-icon>
                <v-icon large color="#80ACD3" v-if="license.valid===-1" @click="removeLicenseFromList(index)"> mdi-close-circle-outline</v-icon>
              </v-list-item-avatar>
            </v-col>   
            <v-col cols="8" class="mt-3">
                <v-form>
                  <div >
                    <v-text-field v-model="license.licenseNumber" label="License Number" outlined dense></v-text-field> 
                  </div>
                </v-form>
            </v-col>
        </v-row>
      </v-flex>
    </v-layout>
    <v-layout row  justify-center>
      <v-flex sm12 lg5>
        <v-row justify="end" no-gutters>
          <v-btn color="blue darken-1" text @click="addLicense()" v-if="licenses.length<4">Add</v-btn>
          <v-btn color="blue darken-1" text @click="verifyLicenses()">Verify All</v-btn>
        </v-row>
      </v-flex>
      
    </v-layout>
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
          checked: false,
          valid: -1,
          licenseType: {
          boardCode: 0,
          licenseName: 'Registered Nurse',
          licenseCode: 224,
          },
        },
      ],
      loading: false,
    };
  },
  methods: {
    addLicense() {
      if (this.licenses.length <= 4) {
        this.licenses.push({
          firstName: 'First',
          lastName: 'Last',
          licenseNumber: null,
          checked: false,
          valid: -1,
          licenseType: {
          boardCode: 0,
          licenseName: 'Registered Nurse',
          licenseCode: 224,
          },
        });
      }
    },
    verifyLicenses() {
      this.licenses.forEach((license) => {
        license.valid = (Math.random() > .5 ? 0 : 1);
      });
    },
    removeLicenseFromList(index) {
      if (this.licenses.length > 1 ) {
        this.licenses.splice(index, 1);
      }
    },
  },
});
</script>

<style lang="scss">
  @import './_License.scss';
</style>

