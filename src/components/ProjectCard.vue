<template>
  <v-dialog
    width="500"
  >
    <template v-slot:activator="{ on, attrs }">
      <button
        v-bind="attrs"
        v-on="on"
        height="200"
        class="rounded-0"
      >
        <img
          class="media"
          v-if="mediaType === 'image'"
          :src="media"
        >
        <video autoplay muted
          class="media"
          v-if="mediaType === 'video'"
        >
          <source :src="media" type="video/mp4">
        </video>
      </button>
    </template>

    <ProjectDialog/>
  </v-dialog>
</template>

<script>
  import ProjectDialog from './ProjectDialog';

  export default {
    name: 'ProjectCard',

    props: {
        media: {
            image: String,
            required: true
        },
    },

    components: {
      ProjectDialog,
    },

    data: () => ({
    }),

  computed: {
     mediaType(){
       const splitedMedia = this.media.split(".");
       const extension = splitedMedia[splitedMedia.length - 1];

      console.log(extension)
      const videoExtensions = ["mp4", "mov", "avi", "webv"];
       if (videoExtensions.includes(extension) ){
          return "video";
         }

        return "image";
     }
   }
  }
</script>

<style scoped lang="scss">

.media {
  max-height: 200px;
  width: auto;
}

.media:hover {
    -webkit-filter: brightness(70%);
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    transition: all 0.5s ease;
}
</style>


