<template>
  <v-component>
    <div class="project-carousel">
      <v-banner>
        <h4>This is a project</h4>
      </v-banner>
      <v-slide-group
        v-model="model"
        show-arrows
      >
        <v-slide-item
          v-for="(project) in projects"
          :key="project"
          v-slot="{ toggle }"
        >
          <v-card
            :color="active ? 'primary' : 'grey lighten-1'"
            height="200"
            width="400"
            class="rounded-0"
            @click="toggle"
          >
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </div>
  </v-component>
</template>

<script>
  export default {
    name: 'ProjectCarousel',

    data: () => ({
      projects: ["red", "blue", "green", "yellow", "grey", "pink", "cyan", "orange"],
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
