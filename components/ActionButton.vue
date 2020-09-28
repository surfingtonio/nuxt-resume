<template>
  <div class="action-button action-button--show" @click="action" :title="title">
    <fa :icon="icon" class="icon icon--action-button" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ActionButton",
  props: {
    icon: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    action: {
      type: Function,
      required: true,
    },
  },
});
</script>
