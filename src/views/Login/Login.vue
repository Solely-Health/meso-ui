<template>
    <v-container fill-height fluid>
        <v-layout justify-center >
            <v-flex xs10 md4>
                <h1>Login</h1>
                <v-col center>
                    <v-form>
                        <v-text-field label="Email" outlined dense></v-text-field>
                        <v-text-field :type="'password'" label="Password" outlined dense></v-text-field>
                        <a href="" target="_blank">Forgot your Password?</a>
                    </v-form>
                    <v-col center>
                        <v-row> <v-btn>Login</v-btn> </v-row>
                        <v-row> <v-btn>Sign Up</v-btn> </v-row>
                    </v-col>
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
      password: '',
    };
  },
  // methods: {
  //   forgotPassword: function() {
  //     alert('this name is ' + this.firstName);
  //   },
 // signUp: function() {

// }
  // },
});
</script>

<style lang="scss">
  @import './Login.scss';
</style>