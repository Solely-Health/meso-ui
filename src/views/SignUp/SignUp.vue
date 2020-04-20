<template>
  <v-container fluid>
    <v-row justify="center">
      <v-img src="./../../assets/meso_logo.svg" class="ma-5" contain max-width="225"></v-img>
    </v-row>
    <v-layout class="mt-3" justify-center>
          <v-flex center xs10 md4>
            <h2 class="text-center mt-3 mb-3"> Register </h2>
            <v-col center>
              <v-form>
                <v-text-field v-model="email" label="Email" outlined dense></v-text-field>
                <v-text-field v-model="firstName" label="First Name" outlined dense></v-text-field>
                <v-text-field v-model="lastName" label="Last Name" outlined dense></v-text-field>
                <v-select :items="education" v-model="currEducation" label="Education" outlined dense></v-select>
                <v-select :items="subject" v-model="currSubject" label="Subject" outlined dense></v-select>
                <v-text-field v-model="password" :type="'password'" label="Password" outlined dense></v-text-field>
                <v-text-field :type="'password'" v-model="confirmPass" label="Confirm Password" outlined dense></v-text-field>
              </v-form>
            </v-col>
          </v-flex>
          <v-footer
      absolute
      class="font-weight-medium navigator-footer"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <Navigator previousRoute="login" nextRoute="license"></Navigator>
  
      </v-col>
    </v-footer>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Navigator from './../../components/global/Navigator/Navigator.vue';
export default Vue.extend({
  data() {
    return {
      email: '',
      firstName: '',
      lastName: '',
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
  // methods: {
  //   displayName: function() {
  //     alert('this name is ' + this.firstName);
  //   },
  // },
});
</script>

<style lang="scss">
  @import './_SignUp.scss';
</style>