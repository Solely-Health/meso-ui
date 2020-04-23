<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="red lighten-2"
          dark
          v-on="on"
        >
          Click Me
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
            Take today, Thursday 4/23, off?
        </v-card-title>

        <v-card-subtitle>
            This will hide you from facilities and remove you from any pending jobs for the day.
        </v-card-subtitle>

        <!-- <v-divider></v-divider> -->

        <v-card-actions>
            <v-btn @click="dialog = false"> Cancel </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>