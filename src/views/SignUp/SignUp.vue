<template>
  <v-container>
    <v-layout
      text-center
      wrap>
    
    <h1>Sign Up</h1>

      <v-container fill-height fluid>
        <v-row align="center" justify="center" md="8" xs="12">
        <v-col align="center" col="6" sm="5" md="4">
          <v-form class="px-5">
            <v-text-field v-model="email" label="Email" outlined dense></v-text-field>
            <v-text-field v-model="firstName" label="First Name" outlined dense></v-text-field>
            <v-text-field v-model="lastName" label="Last Name" outlined dense></v-text-field>
            <v-select :items="education" v-model="education" label="Education" outlined dense></v-select>
            <v-select :items="subject" v-model="subject" label="Subject" outlined dense></v-select>
            <v-text-field v-model="password" :type="'password'" label="Password" outlined dense></v-text-field>
            <v-text-field :type="'password'" label="Confirm Password" outlined dense></v-text-field>
          </v-form>
        </v-col>
        </v-row>
      </v-container>

      <!-- <v-container>
      <v-layout>
        <v-row align="center" justify="center">
          <v-btn color="#6A8EAE">Back </v-btn>
          <v-btn click='inc'>Next</v-btn>
        </v-row>
      </v-layout>
      </v-container> -->

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