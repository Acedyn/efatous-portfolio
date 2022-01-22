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
      >
        <v-img
          :src="image"
        ></v-img>

      </v-btn>
    </template>

    <ProjectDialog/>
  </v-dialog>
</template>

<script>
  import ProjectDialog from './ProjectDialog';

  export default {
    name: 'ProjectCard',

    props: {
        image: {
            image: String,
            required: true
        },
    },

    components: {
      ProjectDialog,
    },

    data: () => ({
    }),
  }
</script>

<style scoped>
</style>


