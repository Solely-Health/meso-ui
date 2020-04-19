<template>
<div>
    <!-- <v-card
      color="grey lighten-2"
      flat
      height="80"
      tile
    >
      <v-toolbar dense height="80" color="grey lighten-3">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Profile</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar> 
    </v-card> -->
<v-container>
<v-layout align-center justify-center>
    <v-flex lg6>

    <v-layout row wrap class="ma-5">
    <v-list-item-avatar size="100">
    <v-img src="https://media-exp1.licdn.com/dms/image/C5603AQHK_Xl80cwTeg/profile-displayphoto-shrink_800_800/0?e=1590624000&v=beta&t=OJ67_vNLfcBQjy2nZfTOBCW2eW3McrOOjWaQlzMtGj4"></v-img>
    </v-list-item-avatar>
    <v-row justify="left" align="center">
        <v-col>
            <v-card flat class="headline font-weight-bold">{{name}}</v-card>
            <v-card flat class="font-weight-medium">{{occupation}}</v-card>
            <v-card flat class="font-weight-light">{{city}}, {{state}}</v-card>
        </v-col>
    </v-row>
    </v-layout>


    <v-card class="ma-5">
        <v-card-title class="headline">Education
            <v-spacer></v-spacer>
            <button class="justify-end">
                <v-icon>mdi-pencil-outline</v-icon>
            </button>
        </v-card-title>
            <v-col class="ma-1">
            <v-card flat class="font-weight-medium">{{school}}</v-card>
            <v-card flat class="font-weight-light">{{degree.name}}</v-card>
            <v-card flat class="font-weight-light">{{degree.graduation}}</v-card>
            </v-col>
    </v-card>

    <v-card class="ma-5">
        <v-card-title class="headline">    
            Certificates & Licenses
            <v-spacer></v-spacer>
            <button class="justify-end">
                <v-icon>mdi-pencil-outline</v-icon>
            </button>
        </v-card-title>
        <v-flex wrap >
        <v-chip close v-for="license in licenses" 
                v-bind:key="license" 
                class="chips pa-3 ma-2"
                color="#80ACD3"
                text-color="white">{{license}}</v-chip>
        </v-flex>
    </v-card>

    <v-card class="ma-5">
        <v-card-title class="headline">Skills
                        <v-spacer></v-spacer>
            <button class="justify-end">
                <v-icon>mdi-pencil-outline</v-icon>
            </button>
        </v-card-title>
        <v-flex wrap>
        <v-chip close v-for="skill in skills" 
        v-bind:key="skill"
        class="chips pa-3 ma-2"
        color="#80ACD3"
        text-color="white">{{skill}}</v-chip>
        </v-flex>
    </v-card>

    </v-flex>
</v-layout>  
</v-container>

</div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
    data: () => ({
        name: 'Mikkal McNulty',
        occupation: 'Respritory Therapist',
        city: 'Los Angeles',
        state: 'CA',
        school: 'California State University, Northridge',
        degree: {name: 'Bachelor of Science, Nursing',
                graduation: '2016-2020'},
        licenses: ['CPR' , 'Respritory Therapist', 'Registered Nurse'],
        skills: ['Patient monitoring systems' , 'Vital sign monitoring', 'Ethical', 'Diagnostic Equipment', 'Strict Attention To Detail'],
    }),
    components: {

    },
});
</script>

<style>
  @import './_Profile.scss';
</style>