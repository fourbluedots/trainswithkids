<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="info">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-card-media src="https://upload.wikimedia.org/wikipedia/commons/7/74/Virgin_Trains_East_Coast_Super_Express_Train.jpg" height="200px" >
                </v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                          <div>
                            <h3 class="white--text">Nice trains near by</h3>
                            <div>July 12, 2017</div>
                          </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn to="/events/1">
                    <v-icon>arrow_forward</v-icon>
                    View Event
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
