<template>
  <v-dialog
  >
    <template v-slot:activator="{ on, attrs }">
      <button
        v-bind="attrs"
        v-on="on"
        class="rounded-0"
      >
        <MediaPlayer class="media" :media="media"/>
      </button>
    </template>

    <ProjectDialog :project="project"/>
  </v-dialog>
</template>

<script>
  import ProjectDialog from './ProjectDialog';
  import MediaPlayer from './MediaPlayer';

  export default {
    name: 'ProjectCard',

    props: {
        media: {
            type: String,
            required: true
        },
        project: {
            type: Object,
            required: true
        },
    },

    components: {
      ProjectDialog,
      MediaPlayer,
    },

    data: () => ({
    }),

  computed: {
     mediaType(){
       const splitedMedia = this.media.split(".");
       const extension = splitedMedia[splitedMedia.length - 1];

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
  height: 200px;
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


