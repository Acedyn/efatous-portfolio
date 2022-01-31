<template>
  <div>
    <div v-html="markdownToHtml"></div>
  </div>
</template>

<script>
import { marked } from 'marked';

export default {
  name: 'MarkdownRenderer',

    props: {
        markdown: {
            type: String,
            required: true
        },
    },

 computed: {
   markdownToHtml(){
     return marked(this.markdown);
   }
 }
}
</script>
