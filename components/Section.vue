<template>
  <section class="section" :class="defaultClassNames">
    <h2 class="section__title" v-if="title">{{ title }}</h2>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "Section",
  props: {
    title: {
      type: String,
      required: false,
    },
  },
  computed: {
    defaultClassNames: function () {
      let words =
        this.title === undefined ? [] : this.title.toLowerCase().split(/\s/);
      return words.join("-");
    },
  },
};
</script>
