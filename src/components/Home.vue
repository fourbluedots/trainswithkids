<template>
<v-container>
  <v-layout row wrap>
    <v-flex xs12 sm6 class="text-xs-center text-sm-right" >
      <v-btn large router to="/events" class="secondary">All Events</v-btn>
    </v-flex>
    <v-flex xs12 sm6 class="text-xs-center text-sm-left">
      <v-btn large router to="/events/new" class="secondary">Add Event</v-btn>
    </v-flex>
  </v-layout>
</v-container>
</template>
