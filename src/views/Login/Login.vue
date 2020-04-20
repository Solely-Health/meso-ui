
<template>
    <v-container class="my-5">
        <v-row justify="center">
          <v-img src="./../../assets/meso_logo.svg" class="ma-5" contain max-width="225"></v-img>
        </v-row>
        <v-layout justify-center row>
            <v-flex xs10 md4>
                <h2 class="text-center mt-3 mb-3">Login</h2>
                    <v-form>
                        <v-text-field label="Email" v-model="email" outlined dense></v-text-field>
                        <v-text-field :type="'password'" label="Password" v-model="password" outlined dense></v-text-field>
                        <a href="" target="_blank">Forgot your Password?</a>
                    </v-form>

                <div class="spacing">
                <v-row justify="center">
                    <div class="my-3">
                    <v-btn x-large color="primary"> LOGIN </v-btn>
                    </div>
                </v-row>

                <v-row justify="center">
                    <div class="my-2">
                    <v-btn x-large :to="{name: 'signup'}"> SIGN UP </v-btn>
                    </div>
                </v-row>
                </div>

                <div class="center">
                <a href="" target="_blank">Faculty Login</a>
                </div>
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
//   methods: {
//     signUp: function() {
//       alert('this name is ' + this.firstName);
//       router.go()
//     },
});
</script>

<style lang="scss">
  @import './Login.scss';
</style>