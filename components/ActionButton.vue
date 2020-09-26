<template>
  <div class="action-button action-button--show" @click="handleClick"></div>
</template>

<script>
export default {
  name: "ActionButton",
  methods: {
    handleClick() {
      window.print();
    },
  },
};
</script>
