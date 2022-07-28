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
          text-primary-content
          !leading-[1.3]
        "
      >
        hi there, i'm <strong class="text-info-content">meysam kiani</strong>. a
        front end web developer
      </h1>

      <p
        class="
          mt-3
          mx-5
          md:w-2/3
          2xl:md:w-3/5
          md:text-center
          text-lg text-neutral-content
        "
      >
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
      <akar-icons-Triangle-Down class="text-info-content animate-bounce" />
    </div>

    <section class="flex flex-col items-center px-5">
      <h2
        class="
          text-2xl
          lg:text-3xl
          font-bold
          text-primary-content
          leading-tight
          mb-5
          md:mb-10
        "
      >
        technologies, languages and frameworks.
      </h2>
      <commonCodeMockup :commends="commends" />
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

