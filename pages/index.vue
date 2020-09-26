<template>
  <Page v-if="data">
    <Header v-bind="data.info" />

    <Section title="Career Summary" v-if="data.summary">
      <p>{{ data.summary }}</p>
    </Section>

    <Section title="Employment History" v-if="data.professions">
      <Work v-for="work in data.professions" :key="work.title" v-bind="work" />
    </Section>

    <Section title="Technical Skills" v-if="data.skills">
      <GenericList :items="data.skills" />
    </Section>

    <Section title="Education" v-if="data.schools">
      <School
        v-for="school in data.schools"
        :key="school.course"
        v-bind="school"
      />
    </Section>

    <Section title="Certificates" v-if="data.certificates">
      <Certificate
        v-for="certificate in data.certificates"
        :key="certificate.url"
        v-bind="certificate"
      />
    </Section>

    <Footer :info="data.lastUpdate" />
  </Page>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      data: null,
    };
  },
  beforeMount() {
    fetch("data.json")
      .then((res) => res.json())
      .then((res) => {
        this.data = res;
      });
  },
});
</script>
