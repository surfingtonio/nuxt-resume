<template>
  <Section class="section--header header">
    <h1 class="section__title">{{ fullname }}</h1>
    <ul class="header__items">
      <li class="header__item phone">
        <a :href="phone.url" target="_blank" class="url url--external">{{
          phone.title
        }}</a>
      </li>
      <li class="header__item email">
        <a :href="email.url" target="_blank" class="url url--external">{{
          email.title
        }}</a>
      </li>
      <li class="header__item location">
        <a :href="location.url" target="_blank" class="url url--external">{{
          location.title
        }}</a>
      </li>
      <li class="header__item linked-in" v-if="linkedIn">
        <a :href="linkedIn.url" target="_blank" class="url url--external">{{
          linkedIn.title
        }}</a>
      </li>
    </ul>
    <slot></slot>
  </Section>
</template>

<script>
export default {
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
};
</script>
