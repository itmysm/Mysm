<template>
  <div class="flex flex-col capitalize">
    <section class="flex flex-col items-center mt-10 md:mt-32 mb-3">
      <h1
        class="
          text-3xl
          md:text-5xl
          font-black
          mx-5
          md:text-center
          leading-tight
          md:leading-relaxed
        "
      >
        hi there, i'm <strong class="text-info-content">meysam kiani</strong>. a
        front end web developer
      </h1>

      <br />

      <p class="md:mt-3 mx-5 md:w-1/2 md:text-center text-lg text-neutral">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        aspernatur ipsa cupiditate adipisci quidem modi, soluta officia in
        itaque aliquid minima facilis odit tenetur non numquam accusamus unde
        quaerat repellendus!
      </p>

      <ul class="flex w-full px-5 md:justify-center mt-8">
        <li
          class="text-neutral text-lg hover:text-primary-content mr-5"
          v-for="(item, i) in socialMedias"
          :key="i"
        >
          <a :href="item.path" target="_blank">
            <component :is="item.icon" />
          </a>
        </li>
      </ul>
    </section>

    <div id="toDown" class="flex w-full justify-center my-20 md:my-40">
      <akar-icons-Triangle-Down class="text-info animate-bounce" />
    </div>

    <section class="flex flex-col items-center px-5">
      <h2 class="text-2xl font-bold leading-tight mb-5 md:mb-10">
        technologies, languages and frameworks.
      </h2>
      <commonCodeMockup :commends="commends" />
    </section>

    <section class="w-full flex flex-col sm:items-center mb-20 px-5">
      <h2 class="font-bold text-2xl mb-5 md:mb-10">Skills</h2>

      <div
        class="
          w-full
          lg:w-2/3
          grid grid-cols-1
          sm:grid-cols-2
          md:sm:grid-cols-3
          gap-8
        "
      >
        <div
          class="
            bg-secondary
            rounded-md
            w-58
            lg:max-w-sm
            min-h-44
            px-4
            py-4
            overflow-hidden
            hover:scale-[1.05]
            transition-all
            duration-500
            cursor-default
          "
          v-for="(item, i) in mySkills"
          :key="i"
        >
          <img :src="item.icon" alt="shit" class="w-16" />
          <h4 class="font-bold text-primary-content mb-1">
            {{ item.title }}
          </h4>
          <p class="text-neutral text-sm overflow-hidden">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
            eligendi? Quae soluta atque doloremque maxime ipsum totam
            repellendus officia optio, saepe maiores eos dolorem corrupti
            molestiae non perferendis laboriosam earum.
          </p>
        </div>
      </div>
    </section>

    <section class="w-full flex flex-col md:items-center pb-10 px-5">
      <h2 class="font-bold text-2xl mb-5 md:mb-10">my latest cool projects.</h2>

      <div
        class="
          w-full
          lg:w-4/5
          xl:w-3/4
          2xl:w-4/6
          grid grid-cols-2
          md:grid-cols-3
          gap-4
        "
      >
        <commonModal
          v-for="(project, i) in projects"
          :key="i"
          :project="project"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  title: "this is a test",
  layout: "default",
});

import { inject } from "vue";
import commends from "~/static/data/home/me/technologies.json";
import skills from "~/static/data/home/me/skills.json";
import projects from "~/static/data/components/projects.json";

const commendsCenter = reactive(commends);
const mySkills = skills;
const icons = inject("icons");

const socialMedias = [
  { icon: icons.linkedinBoxFill, path: "https://www.instagram.com/itmysm" },
  { icon: icons.githubFill, path: "https://github.com/itmysm" },
  { icon: icons.codepenFill, path: "https://www.codepen.io/itmysm" },
  { icon: icons.twitterFill, path: "https://www.twitter.com/itmysm" },
];
</script>

<style scoped>
</style>