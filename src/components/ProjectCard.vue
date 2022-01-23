<template>
  <v-dialog
    width="500"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        height="200"
        class="rounded-0"
      >
        <img
          class="media"
          :src="media"
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

    props: {
        media: {
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
.media {
  max-height: 200px;
  width: auto;
}
</style>


