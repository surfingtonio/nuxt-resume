<template>
  <div class="action-buttons">
    <ActionButton
      v-for="button in buttons"
      v-bind="button"
      :key="button.id"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ActionButtons",
  props: {
    buttons: {
      type: Array,
      required: true,
    },
  },
});
</script>