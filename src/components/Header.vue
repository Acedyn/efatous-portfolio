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

        <v-dialog class="popup">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-on="on"
              v-bind="attrs"
            >Contact me</v-btn>
          </template>

          <CVDialog/>
        </v-dialog>
      </v-col>
    </v-app-bar>
  </div>
</template>

<script>
  import CVDialog from './CVDialog';

  export default {
    name: 'Header',

    data: () => ({
    }),

    components: {
        CVDialog,
    },
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

.popup{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
}
</style>
