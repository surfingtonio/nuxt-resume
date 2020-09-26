<template>
  <div class="work">
    <h3 class="work__title">{{ title }}</h3>
    <h4 class="work__company">{{ company }}</h4>
    <a :href="url" target="_blank" class="url url--external work__url">{{
      url
    }}</a>
    <div class="work__term">
      <span>{{ new Date(term.start).getFullYear() }}</span>
      –
      <span>
        {{ term.end ? new Date(term.end).getFullYear() : "Present" }}
      </span>
    </div>
    <p class="work__details" v-if="details">{{ details }}</p>
    <GenericList :items="items" v-if="items" />
  </div>
</template>

<script>
export default {
  name: "Work",
  props: {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    term: {
      type: Object,
      required: true,
    },
    details: {
      type: String,
      required: false,
    },
    items: {
      type: Array,
      required: false,
    },
  },
};
</script>
