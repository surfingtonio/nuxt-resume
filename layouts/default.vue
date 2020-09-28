<template>
  <div>
    <ActionButtons :buttons="buttons" />

    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Layout",
  data() {
    return {
      buttons: [
        {
          id: 1,
          icon: ["fas", "file-pdf"],
          title: "View as PDF",
          action: () => {
            let el = document.createElement("a");
            el.href = "./marc-danting-resume.pdf";
            el.target = "_blank";
            el.click();
          },
        },
        {
          id: 2,
          title: "Print",
          icon: ["fas", "print"],
          action: () => {
            window.print();
          },
        },
      ],
    };
  },
});
</script>

<style>
@import url("assets/app.css");
@import url("assets/responsive.css");
@import url("assets/animation.css");
@import url("assets/print.css");
</style>
