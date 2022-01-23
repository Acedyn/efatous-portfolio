<template>
  <div class="project-carousel">
    <v-banner>
      <h4>{{ this.project.name }}</h4>
    </v-banner>
    <v-slide-group
      show-arrows
    >
      <template v-slot:prev>
        <!--- Remove the prev arrow --->
      </template>
      <template v-slot:next>
        <!--- Remove the next arrow --->
      </template>

      <v-slide-item
        v-for="(media, idx) in project.media"
        :key="idx"
      >
        <ProjectCard :media="media"/>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>
  import ProjectCard from './ProjectCard';

  export default {
    name: 'ProjectCarousel',

    props: {
        project: {
            type: Object,
            required: true
        },
    },

    components: {
      ProjectCard,
    },

    data: () => ({
    }),
  }
</script>

<style scoped>
  .project-carousel {
    margin-bottom: 50px;
  }
  h4 {
    font-family: 'Amatic SC', cursive;
    font-weight: normal;
    font-size: 20px;
  }
</style>
