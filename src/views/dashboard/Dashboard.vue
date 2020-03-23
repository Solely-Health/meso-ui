<template>
<div>
    <v-card
      color="grey lighten-2"
      flat
      height="80"
      tile
    >
      
      <v-toolbar dense height="80" color="grey lighten-3">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Dashboard</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar> 
    </v-card>
    <v-card>
      <Calendar v-bind="calendar"/>
    </v-card>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        width="50%"
        temporary
        color="#6A8EAE"
      >
        <v-list-item class="mt-5">
          <v-list-item-avatar>
            <v-img src="https://media-exp1.licdn.com/dms/image/C5603AQHK_Xl80cwTeg/profile-displayphoto-shrink_800_800/0?e=1590624000&v=beta&t=OJ67_vNLfcBQjy2nZfTOBCW2eW3McrOOjWaQlzMtGj4"></v-img>
          </v-list-item-avatar>
  
          <v-list-item-content>
            <v-list-item-title class="menuItem">{{name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
  
        <v-divider></v-divider>
  
        <v-list>
  
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            dark
            class="mt-4"
            
          >
            <v-list-item-icon class="menuItem">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title >{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
</div>
 
</template>

<script lang="ts">
import Vue from 'vue';
import Calendar from './../../components/Calendar/Calendar.vue';

// Load sample data
import { sampleCalendar } from './../utils/sampleData';

export default Vue.extend({
  name: 'Home',
  data: () => ({
    name: 'Mikkal',
    calendar: sampleCalendar,
    drawer: false,
    group: null,
    items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'My Profile', icon: 'mdi-account' },
        {title: 'Discover', icon: 'mdi-briefcase'},
        {title: 'Scheduling', icon: 'mdi-calendar-blank'},
        { title: 'Logout', icon: 'mdi-logout' },
      ],
  }),
  components: {
    Calendar,
  },
  watch: {
      group() {
        this.drawer = false;
      },
    },
});
</script>

<style lang="scss">
  @import './_Calendar.scss';
</style>
