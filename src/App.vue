<template>
  <v-app light>
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon left>train</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            See Trains
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon left>event</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            Events
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>

    <v-toolbar dark class="primary">
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>Trains With Kids</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only" >
        <v-btn flat>
           <v-icon left>train</v-icon>
          See Trains
          </v-btn>
        <v-btn flat>
          <v-icon left>event</v-icon>
          Events
          </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main></main>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        sideNav: false,
      };
    },
  };
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
