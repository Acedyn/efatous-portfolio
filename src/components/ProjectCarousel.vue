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
        v-for="(image, idx) in project.images"
        :key="idx"
      >
        <ProjectCard :image="image"/>
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
            default: () => {}
        },
    },

    components: {
      ProjectCard,
    },

    data: () => ({
    }),

   computed: {
     projects(){
       console.log(this.project);
       return ["red", "blue", "green", "yellow", "grey", "pink", "cyan", "orange"];
     }
   }
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
