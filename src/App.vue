<template>
  <v-app>
    <div class="background">
      <Header/>
      <v-main>
        <ProjectList/>
      </v-main>
    </div>
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
.v-application{
  font-family: 'Amatic SC', cursive;
}

.background {
  background-image: url("./assets/background.jpg");
  background-repeat: repeat;
  }
</style>
