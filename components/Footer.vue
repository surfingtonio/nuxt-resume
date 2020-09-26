<template>
  <Section class="section--footer footer">
    <span class="footer__item">
      Made with
      <a href="https://vuejs.org" target="_blank" class="url">Vue.js</a>
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
