<template>
  <v-container>
    <v-layout
      text-center
      wrap>
    
    <h1>MeSo</h1>
      <!-- <v-flex mb-4>
        <v-form class="px-3">
          <v-text-field label="Email">
          </v-text-field>
          <v-text-field label="Password"></v-text-field>
        </v-form>
      </v-flex> -->
      <v-container fill-height fluid>
        <v-row align="center" justify="center">
        <v-col alight="center" justify="center">
          <v-form class="px-5">
            <v-text-field label="Email" outlined dense></v-text-field>
            <v-text-field :type="'password'" label="Password" outlined dense></v-text-field>
            <a href="">Forgot your Password? </a>
          </v-form>
        </v-col>
        </v-row>
      </v-container>
      <v-container>
      <v-layout>
        <v-row align="center" justify="center">
          <v-btn color="#6A8EAE">Login </v-btn>
          <v-btn>Sign Up</v-btn>
        </v-row>
      </v-layout>
      </v-container>
    </v-layout>
  </v-container>
</template>