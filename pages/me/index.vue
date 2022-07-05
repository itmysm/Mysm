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
      <h2 class="text-2xl font-black leading-tight mb-10">
        technologies, languages and frameworks.
      </h2>
      <commonCodeMockup :commends="commendsCenter" />
    </section>

    <section v-show="false" class="flex flex-col items-center h-fit">
      <h2 class="text-2xl font-black leading-tight mb-10">Work Experience</h2>
      <commonTimeline :experiences="experiences" />
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  title: "this is a test",
  layout: "default",
});

import { inject } from "vue";
const icons = inject("icons");

const socialMedias = [
  /*{ icon: icons.instagramFill, path: "https://www.instagram.com/itmysm" },
  { icon: icons.telegramFill, path: "https://t.me/itmysm" },*/
  { icon: icons.linkedinBoxFill, path: "https://www.instagram.com/itmysm" },
  { icon: icons.githubFill, path: "https://github.com/itmysm" },
  { icon: icons.codepenFill, path: "https://www.codepen.io/itmysm" },
  { icon: icons.twitterFill, path: "https://www.twitter.com/itmysm" },
];

const commendsCenter = [
  {
    commends: [
      { type: "success", commend: "npm install JavaScript", response: "Done!" },

      {
        type: "success",
        commend: "npm install Vue Nuxt Vuetify",
        response: "Done!",
      },

      { type: "success", commend: "npm install Jquery", response: "Done!" },

      { type: "success", commend: "npm install Sass", response: "Done!" },
      { type: "success", commend: "npm install Tailwind", response: "Done!" },
      { type: "success", commend: "npm install Bootstrap", response: "Done!" },

      {
        type: "warning",
        commend: "npm install TypeScript",
        response: "Installing...",
      },
    ],
  },
];

const experiences = [
  {
    date: "November 10, 2021",
    title: "Start working in vofour as Front & Developer",
  },
  {
    date: "November 10, 2021",
    title: "Start working in vofour as Front & Developer",
  },
];
</script>

<style scoped>
</style>