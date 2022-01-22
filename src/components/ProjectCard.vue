<template>
  <v-dialog
    width="500"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        height="200"
        width="400"
        class="rounded-0"
        color="grey"
      >
      </v-btn>
    </template>

    <ProjectDialog/>
  </v-dialog>
</template>

<script>
  import ProjectDialog from './ProjectDialog';

  export default {
    name: 'ProjectCard',

    components: {
      ProjectDialog,
    },

    data: () => ({
    }),
  }
</script>

<style scoped>
</style>


