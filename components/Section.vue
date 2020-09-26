<template>
  <section class="section" :class="defaultClassNames">
    <h2 class="section__title" v-if="title">{{ title }}</h2>
    <slot></slot>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Section",
  props: {
    title: {
      type: String,
      required: false,
    },
  },
  computed: {
    defaultClassNames: function (): string {
      let words: Array<string> =
        this.title === undefined ? [] : this.title.toLowerCase().split(/\s/);
      return words.join("-");
      return "section";
    },
  },
});
</script>
