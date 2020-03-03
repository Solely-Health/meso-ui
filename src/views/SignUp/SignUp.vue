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
                <v-select :items="education" v-model="education" label="Education" outlined dense></v-select>
                <v-select :items="subject" v-model="subject" label="Subject" outlined dense></v-select>
                <v-text-field v-model="password" :type="'password'" label="Password" outlined dense></v-text-field>
                <v-text-field :type="'password'" label="Confirm Password" outlined dense></v-text-field>
              </v-form>
            </v-col>
          </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      email: '',
      firstName: '',
      lastName: '',
      education: ['California, State University Northridge', 'Hogwarts'],
      subject: ['testSubject1', 'testSubject2', 'testSubject3'],
      password: '',
    };
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