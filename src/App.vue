<template>
  <v-app>
    <Header/>
    <v-main>
      <ProjectList/>
    </v-main>
  </v-app>
</template>

<script>
import ProjectList from './components/ProjectList';
import Header from './components/Header';

export default {
  name: 'App',

  components: {
    ProjectList,
    Header,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap');
</style>
