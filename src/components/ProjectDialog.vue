<template>
  <v-component>
    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        Project name
      </v-card-title>

      <v-card-text>
        Hello world
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="dialog = false"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-component>
</template>

<script>
  export default {
    name: 'ProjectDialog',

    data: () => ({
    }),
  }
</script>

<style scoped>
</style>



