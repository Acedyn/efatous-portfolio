<template>
  <div class="project-view">
    <ProjectCarousel
      v-for="(project, idx) in projects"
      :key="idx"
      :project="project"
      />
  </div>
</template>

<script>
import ProjectCarousel from './ProjectCarousel';
import projects from '/public/projects/projects.json'

export default {
  name: 'App',

  components: {
    ProjectCarousel,
  },

  data: () => ({
  }),

  computed: {
     projects(){
       return projects;
     }
   }
};
</script>

<style scoped>
  .project-view {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
