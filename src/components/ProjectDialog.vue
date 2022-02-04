<template>
  <v-card>
    <v-card-title class="grey lighten-2 card-title">
      <h4>{{ this.project.name }}</h4>
    </v-card-title>

      <v-carousel
        light
        v-model="index"
        class="carousel"
        :continuous="false"
        hide-delimiters
        height="80%"
        delimiter-icon="mdi-minus"
      >
        <v-carousel-item
          v-for="(slide, i) in project.media"
          :key="i"
        >
          <v-sheet
            height="100%"
            tile
          >
            <MediaPlayer :media="slide" maxHeight="500px"/>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>

    <v-card-text>
      <MarkdownRenderer :markdown="markdown" class="markdown"/>
    </v-card-text>
  </v-card>
</template>

<script>
  import axios from "axios";
  import MarkdownRenderer from './MarkdownRenderer';
  import MediaPlayer from './MediaPlayer';

  export default {
    name: 'ProjectDialog',

    props: {
        project: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        },
    },

    components: {
        MarkdownRenderer,
        MediaPlayer,
    },

    data: () => ({
      markdown: ""
    }),

    mounted () {
      if(!this.project.doc){return;}
      axios
        .get(this.project.doc)
        .then(response => (this.markdown = response.data))
    },
  }
</script>

<style scoped>
.carousel {
  width: 100%;
  height: auto;
  max-height: 500px;
}
h4{
  font-family: 'Amatic SC', cursive;
  font-weight: bold;
  font-size: 25px;
}

.markdown {
  margin-top: 30px;
  font-size: 20px;
}

</style>
