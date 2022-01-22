<template>
  <v-component>
    <div class="project-view">
      <ProjectCarousel
        v-for="(project) in projects"
        :key="project"
        />
    </div>
  </v-component>
</template>

<script>
import ProjectCarousel from './ProjectCarousel';

export default {
  name: 'App',

  components: {
    ProjectCarousel,
  },

  data: () => ({
    projects: ["red", "blue", "green", "yellow"],
  }),
};
</script>

<style scoped>
  .project-view {
    margin-left: 200px;
    margin-right: 200px;
  }
</style>
