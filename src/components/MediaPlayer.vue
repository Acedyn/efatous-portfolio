<template>
  <div class="media">
    <img
      class="media"
      v-if="mediaType === 'image'"
      :src="media"
    >
    <video autoplay loop muted
      class="media"
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

<style>


.media {
  height: 100%;
  width: auto;
}
</style>
