<template>
  <Section class="section--footer footer">
    <span class="footer__item">
      Made with <span class="icon icon--footer">❤</span> using
      <a href="https://nuxtjs.org/" target="_blank" class="url url--nuxt"
        >Nuxt.js</a
      >
    </span>
    <span class="footer__item footer__item--info" v-if="info">{{ info }}</span>
  </Section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer",
  props: {
    info: {
      type: String,
      required: false,
    },
  },
});
</script>
