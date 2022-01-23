<template>
  <div class="header">
    <v-app-bar
      elevation="1"
      color="white"
    >
      <v-col
        cols="auto"
        class="mr-auto"
      >
        <h1>EMILIE FATOUS</h1>
        <h2>2D Animation student</h2>
      </v-col>
      <v-col
        cols="auto"
      >
        <v-btn>Contact me</v-btn>
      </v-col>
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    name: 'Header',

    data: () => ({
    }),
  }
</script>

<style scoped>
  .header {
    padding-bottom: 20px;
  }

  h1 {
    font-size: 120%;
    font-weight: bold;
  }

  h2 {
    font-size: 80%;
    font-weight: normal;
  }
</style>
