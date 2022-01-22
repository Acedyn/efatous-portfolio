<template>
  <div class="project-view">
    <ProjectCarousel
      v-for="(project) in projects"
      :key="project"
      />
  </div>
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
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
