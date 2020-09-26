<template>
  <div class="certificate">
    <h3 class="certificate__title">{{ title }}</h3>
    <a :href="url" target="_blank" class="url url--external certificate__url">{{
      url
    }}</a>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Certificate",
  props: {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
});
</script>
