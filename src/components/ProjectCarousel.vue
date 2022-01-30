<template>
  <div class="project-carousel">
    <v-banner>
      <h4>{{ this.project.name }}</h4>
    </v-banner>
    <v-slide-group
      center-active
      v-model="model"
    >
      <v-slide-item
        v-for="(media, idx) in project.media"
        :key="idx"
        v-slot:default="{ active }"
      >
        <v-card
          :color="active ? 'teal lighten-2' : 'grey lighten-1'"
          class="ma-4"
        >
          <ProjectCard :media="media" :project="project"/>
        </v-card>
      </v-slide-item>

    </v-slide-group>

    <v-card-actions class="justify-space-between">
      <v-btn
        text
        @click="prev"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn
        text
        @click="next"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-card-actions>
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
      model: 0,
    }),

    methods: {
      next () {
        console.log(this.model)
        this.model = this.model + 1 === this.project.media.length
          ? 0
          : this.model + 1
      },
      prev () {
        this.model = this.model - 1 < 0
          ? this.project.media.length - 1
          : this.model - 1
      },
    },

  }
</script>

<style scoped>
  .project-carousel {
    margin-bottom: 50px;
  }
  h4 {
    font-family: 'Amatic SC', cursive;
    font-weight: normal;
    font-size: 25px;
    text-align: center;
  }
  button {
    z-index: 1;
    opacity: 70%;
    }
  button:hover {
    opacity: 100%;
  }
</style>
