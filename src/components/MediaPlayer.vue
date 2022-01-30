<template>
  <div>
    <img
      class="media"
      :style="mediaStyle"
      v-if="mediaType === 'image'"
      :src="media"
    >
    <video autoplay loop muted
      class="media"
      :style="mediaStyle"
      v-if="mediaType === 'video'"
    >
      <source :src="media" type="video/mp4">
    </video>
  </div>
</template>

<script>
  export default {
    name: 'MediaPlayer',

    props: {
        media: {
            type: String,
            required: true
        },
        maxHeight: {
            type: String,
            default: "100%"
        },
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
     },
     mediaStyle(){
      return `max-height: ${this.maxHeight}`
    }
   }
  }
</script>

<style>
.media {
  display: block;
  margin: auto;
  max-width: 100%;
  height: auto;
  width: auto;
}
</style>
