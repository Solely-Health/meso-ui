<template>
  <v-container fluid>
    <v-row justify="center">
      <v-img src="./../../assets/meso_logo.svg" class="ma-5" contain max-width="225"></v-img>
    </v-row>
    <v-layout class="mt-3" justify-center>
      <v-flex center xs10 md4>
        <h2 class="text-center mt-3 mb-3">Register</h2>
        <v-col center>
          <v-form>
            <v-text-field v-model="form.email" label="Email" outlined dense></v-text-field>
            <v-text-field v-model="form.firstName" label="First Name" outlined dense></v-text-field>
            <v-text-field v-model="form.lastName" label="Last Name" outlined dense></v-text-field>
            <v-select :items="education" v-model="currEducation" label="Education" outlined dense></v-select>
            <v-select :items="subject" v-model="currSubject" label="Subject" outlined dense></v-select>
            <v-text-field v-model="password" :type="'password'" label="Password" outlined dense></v-text-field>
            <v-text-field
              :type="'password'"
              v-model="confirmPass"
              label="Confirm Password"
              outlined
              dense
            ></v-text-field>
          </v-form>
        </v-col>
      </v-flex>
      <v-footer absolute class="font-weight-medium navigator-footer">
        <v-col class="text-center" cols="12">
          <Navigator @next-clicked="handleNextEvent" :nextRoute="nextRoute" :previousRoute="previouseRoute"></Navigator>
        </v-col>
      </v-footer>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Navigator from './../../components/global/Navigator/Navigator.vue';
import { mapActions } from 'vuex';
export default Vue.extend({
  data() {
    return {
      form: {
        email: '',
        firstName: '',
        lastName: '',
        // TODO: change eventually, for now default
        occupation: 'nurse',
        license: '123ABC',
      },
      nextRoute: 'license',
      previouseRoute: 'login',
      education: ['California, State University Northridge', 'cheese'],
      currEducation: '',
      subject: ['testSubject1', 'testSubject2', 'testSubject3'],
      currSubject: '',
      password: '',
      confirmPass: '',
    };
  },
  components: {
    Navigator,
  },
  methods: {
    ...mapActions(['createUser', 'getAllUsers']),
    handleNextEvent(event) {
      this.createUser(this.form);
    },
  },
});
</script>

<style lang="scss">
@import "./_SignUp.scss";
</style>