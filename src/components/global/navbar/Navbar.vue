<template>
  <nav>
    <v-app-bar
      color="grey lighten-3"
      tile
      height="80"
      app
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>{{$route.name}}</v-toolbar-title>
        <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        fixed
        width="50%"
        temporary
        color="#6A8EAE"
    >
      <v-list>
        <v-list-item class="mt-5">
          <v-list-item-avatar>
            <v-img src="https://media-exp1.licdn.com/dms/image/C5603AQHK_Xl80cwTeg/profile-displayphoto-shrink_800_800/0?e=1590624000&v=beta&t=OJ67_vNLfcBQjy2nZfTOBCW2eW3McrOOjWaQlzMtGj4"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="menuItem">{{name}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          router
          :to="item.link"
          dark
          class="mt-4"
          
        >
          <v-list-item-icon class="menuItem">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="text-left">
            <v-list-item-title class="white--text" >{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: () => ({
    name: 'Mikkal',
    drawer: false,
    group: null,
    items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', link: 'dashboard' },
        { title: 'My Profile', icon: 'mdi-account', link: 'profile' },
        {title: 'Discover', icon: 'mdi-briefcase', link: 'discover'},
        {title: 'Scheduling', icon: 'mdi-calendar-blank', link: 'discover'},
        { title: 'Logout', icon: 'mdi-logout', link: 'login' },
      ],
  }),
  methods: {
    toggleNavbarContent() {
      this.$emit('toggleNavbarContent');
    },
  },
};
</script>

<style lang="scss">
  @import './_Navbar.scss';
</style>
