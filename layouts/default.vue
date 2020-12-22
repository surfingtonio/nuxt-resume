<template>
  <div>
    <ActionButtons :buttons="buttons" />

    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

let timeout: number[] = [];

export default Vue.extend({
  name: "Layout",
  mounted() {
    window.addEventListener("mousemove", function (ev) {
      let show =
        ev.clientY > window.innerHeight * 0.75 ||
        ev.clientX > window.innerWidth * 0.75;
      let fab = document.querySelectorAll(".action-button");

      fab.forEach((e, i) => {
        if (show) {
          e.classList.toggle("action-button--show", true);
          e.classList.toggle("action-button--hide", false);

          if (timeout[i]) {
            clearTimeout(timeout[i]);
            delete timeout[i];
          }
        } else if (!timeout[i]) {
          timeout[i] = window.setTimeout(() => {
            e.classList.toggle("action-button--show", false);
            e.classList.toggle("action-button--hide", true);
            delete timeout[i];
          }, 3000);
        }
      });
    });
  },
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
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap');
@import url("assets/app.css");
@import url("assets/responsive.css");
@import url("assets/animation.css");
@import url("assets/print.css");
</style>
