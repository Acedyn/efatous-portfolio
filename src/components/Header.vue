<template>
  <div class="header">
    <v-app-bar
      elevation="0"
      color="white"
    >
      <v-spacer></v-spacer>
        <v-col>
          <v-app-bar-title>
            EMILIE FATOUS
            <br/>
            2D Animation Student
          </v-app-bar-title>
        </v-col>
      <v-spacer></v-spacer>
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
    margin-bottom: 30px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(100, 100, 100, .2);
    font-family: 'Amatic SC', cursive;
    text-align: center;
    font-weight: bold;
  }
</style>
