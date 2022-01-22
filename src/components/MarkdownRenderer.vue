<template>
  <div>
    <textarea v-model="markdown"></textarea>
    <div v-html="markdownToHtml"></div>
  </div>
</template>

<script>
import { marked } from 'marked';

export default {
  name: 'MarkdownRenderer',
 data(){
   return {
     markdown:  "# Hello World",
   };
 },
 computed: {
   markdownToHtml(){
     return marked(this.markdown);
   }
 }
}
</script>
