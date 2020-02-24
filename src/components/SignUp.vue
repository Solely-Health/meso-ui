<template>
  <v-container>
    <v-layout
      text-center
      wrap>
    
    <h1>Register</h1>

      <v-container fill-height fluid>
        <v-row align="center" justify="center">
        <v-col alight="center" justify="center">
          <v-form class="px-5">
            <p>email</p>
            <v-text-field label="Email" outlined dense></v-text-field>
            <v-text-field label="First Name" outlined dense></v-text-field>
            <v-text-field label="Last Name" outlined dense></v-text-field>
            <v-select label="Education" outlined dense></v-select>
            <v-select label="Subject" outlined dense></v-select>
            <v-text-field :type="'password'" label="Password" outlined dense></v-text-field>
            <v-text-field :type="'password'" label="Confirm Password" outlined dense></v-text-field>
          </v-form>
        </v-col>
        </v-row>
      </v-container>

      <v-container>
      <v-layout>
        <v-row align="center" justify="center">
          <v-btn color="#6A8EAE">Back </v-btn>
          <v-btn>Next</v-btn>
        </v-row>
      </v-layout>
      </v-container>

    </v-layout>
  </v-container>
</template>