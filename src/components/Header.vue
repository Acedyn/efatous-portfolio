<template>
  <v-component>
    <div class="header">
      <v-app-bar
        elevation="0"
        color="white"
      >
        <v-spacer></v-spacer>
          <v-col>
            <v-app-bar-title>
              <h1>EMILIE FATOUS</h1>
              <h2>2D Animation Student</h2>
            </v-app-bar-title>
          </v-col>
        <v-spacer></v-spacer>
      </v-app-bar>
    </div>
  </v-component>
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
  }
  h1 {
    font-size: 100%;
    font-weight: bold;
  }
  h2 {
    font-size: 100%;
    font-weight: normal;
  }
</style>
