<template>
  <!-- The button to open modal -->
  <label for="my-modal-0" class="w-full bg-secondary cursor-pointer rounded-md">
    <img
      class="rounded-t-md"
      src="https://img.freepik.com/free-vector/graphic-design-colorful-geometrical-lettering_52683-34588.jpg?w=2000"
      :alt="project.title"
    />

    <h3 class="px-3 mt-3 font-semibold text-primary-content mb-1">
      {{ project.title }}
    </h3>
    <p class="text-neutral text-sm px-3 pb-5">
      {{
        /*project.description*/ "this is a shorted description for more click me"
      }}
    </p>
  </label>

  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="my-modal-0" class="modal-toggle" />
  <label for="my-modal-0" class="modal cursor-pointer flex items-center">
    <label
      class="modal-box bg-secondary max-w-full sm:max-w-lg md:max-w-2xl"
      for=""
    >
      <img :src="project.img" :alt="project.title" />
      <h3 class="text-lg text-primary-content font-bold mt-3 mb-1">
        {{ project.title }}
      </h3>
      <p class="text-neutral mb-1">
        {{ project.description }}
      </p>

      <div class="border-l-2 border-info pl-3 my-2">
        <p
          class="text-success flex"
          v-for="(item, i) in project.items"
          :key="i"
        >
          <component class="w-4" :is="iconFinder(item)" />
          <span class="ml-3">{{ item }}</span>
        </p>
      </div>

      <a class="btn btn-outline btn-sm mt-3 text-info" :disabled="!project.live"
        >Live Demo</a
      >
    </label>
  </label>
</template>

<script setup>
import javascript from "~icons/simple-icons/javascript";
import typescript from "~icons/simple-icons/typescript";
import vue from "~icons/simple-icons/vuejs";
import vuetify from "~icons/simple-icons/vuetify";
import html from "~icons/simple-icons/html5";
import css from "~icons/simple-icons/css3";
import tailwind from "~icons/simple-icons/tailwindcss";
import bootstrap from "~icons/simple-icons/bootstrap";
import sass from "~icons/simple-icons/Sass";

const props = defineProps({
  project: {
    require: true,
    type: Object,
  },
});

const project = shallowReactive(props.project);
const test = ["js", "html", "css", "sass"];

function iconFinder(name) {
  switch (name) {
    case "js":
      return javascript;
      break;
    case "typescript":
      return typescript;
      break;
    case "vue":
      return vue;
      break;
    case "vuetify":
      return vuetify;
      break;
    case "html":
      return html;
      break;
    case "css":
      return css;
      break;
    case "tailwind":
      return tailwind;
      break;
    case "bootstrap":
      return bootstrap;
      break;
    case "sass":
      return sass;
      break;
    default:
      return bootstrap;
      break;
  }
}

onMounted(() => {
  console.log("");
});
</script>

<style scoped>
.modal {
  background-color: rgb(0 0 0 / 40%);
}

.preview--project {
  position: relative;
}
</style>