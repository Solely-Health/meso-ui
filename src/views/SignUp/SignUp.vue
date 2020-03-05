<template>
  <v-container fill-height fluid>
    <v-layout align-center justify-center>
          <v-flex wrap center xs10 md4>
            <h1> Register </h1>
            <v-col center>
              <v-form>
                <v-text-field v-model="email" label="Email" outlined dense></v-text-field>
                <v-text-field v-model="firstName" label="First Name" outlined dense></v-text-field>
                <v-text-field v-model="lastName" label="Last Name" outlined dense></v-text-field>
                <v-select :items="education" v-model="currEducation" label="Education" outlined dense></v-select>
                <v-select :items="subject" v-model="currSubject" label="Subject" outlined dense></v-select>
                <v-text-field v-model="password" :type="'password'" label="Password" outlined dense></v-text-field>
                <v-text-field :type="'password'" label="Confirm Password" outlined dense></v-text-field>
              </v-form>
            </v-col>
          </v-flex>
    </v-layout>
    <v-footer
      absolute
      class="font-weight-medium navigator-footer"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <Navigator previousRoute="login" nextRoute="certs"></Navigator>
  
      </v-col>
    </v-footer>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Navigator from './../../components/global/Navigator/Navigator.vue'
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
    };
  },
  components: {
    Navigator,
  }
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