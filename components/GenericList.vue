<template>
  <ul class="generic-list">
    <li class="generic-list__item" v-for="item in items" :key="item">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  name: "GenericList",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
