<template>
  <Section class="section--footer footer">
    <span class="footer__item">
      Made with <span class="icon icon--footer">❤</span> using
      <a href="https://nuxtjs.org/" target="_blank" class="url">Nuxt.js</a>
    </span>
    <span class="footer__item footer__item--info" v-if="info">{{ info }}</span>
  </Section>
</template>

<script>
export default {
  name: "Footer",
  props: {
    info: {
      type: String,
      required: false,
    },
  },
};
</script>
