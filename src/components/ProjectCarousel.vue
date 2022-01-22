<template>
  <v-slide-group
    v-model="model"
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
</template>

<script>
  export default {
    name: 'ProjectCarousel',

    data: () => ({
      projects: ["red", "blue", "green", "yellow", "grey", "pink", "cyan", "orange"],
    }),
  }
</script>
