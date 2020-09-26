<template>
  <div class="school">
    <h3 class="school__course">{{ course }}</h3>
    <h4 class="school__name">{{ name }}</h4>
    <a :href="url" target="_blank" class="url url--external school__url">{{ url }}</a>
    <div class="school__term">
      <span>{{ new Date(term.start).getFullYear() }}</span>
      –
      <span>
        {{
        term.end ? new Date(term.end).getFullYear() : 'Present'
        }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "School",
  props: {
    course: {
      type: String,
      required: true,
    },
    name: {
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
  },
};
</script>
