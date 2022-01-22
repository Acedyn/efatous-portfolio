<template>
  <v-app>
    <Header/>
    <v-main>
      <ProjectCarousel/>
    </v-main>
  </v-app>
</template>

<script>
import ProjectCarousel from './components/ProjectCarousel';
import Header from './components/Header';

export default {
  name: 'App',

  components: {
    ProjectCarousel,
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
