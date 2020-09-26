<template>
  <div class="action-button action-button--show" @click="handleClick">
    <fa :icon="['fas', 'print']" class="icon icon--action-button" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ActionButton",
  methods: {
    handleClick() {
      window.print();
    },
  },
});
</script>
