<template>
  <Section class="section--header header">
    <h1 class="section__title">{{ fullname }}</h1>
    <ul class="header__items">
      <li class="header__item phone">
        <fa :icon="['fas', 'phone-alt']" class="icon icon--phone" />
        <a :href="phone.url" target="_blank" class="url url--external">{{
          phone.title
        }}</a>
      </li>
      <li class="header__item email">
        <fa :icon="['fas', 'envelope']" class="icon icon--email" />
        <a :href="email.url" target="_blank" class="url url--external">{{
          email.title
        }}</a>
      </li>
      <li class="header__item location">
        <fa :icon="['fas', 'map-marker-alt']" class="icon icon--location" />
        <a :href="location.url" target="_blank" class="url url--external">{{
          location.title
        }}</a>
      </li>
      <li class="header__item linked-in" v-if="linkedIn">
        <fa :icon="['fab', 'linkedin']" class="icon icon--linked-in" />
        <a :href="linkedIn.url" target="_blank" class="url url--external">{{
          linkedIn.title
        }}</a>
      </li>
    </ul>
    <slot></slot>
  </Section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  props: {
    fullname: {
      type: String,
      required: true,
    },
    location: {
      type: Object,
      required: true,
    },
    phone: {
      type: Object,
      required: true,
    },
    email: {
      type: Object,
      required: true,
    },
    linkedIn: {
      type: Object,
      required: false,
    },
  },
});
</script>
