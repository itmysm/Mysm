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
      <commonCodeMockup :commends="technologies.body" />
    </section>
  </div>
</template>

<script setup>
import { inject } from "vue";
definePageMeta({
  title: "this is a test",
  layout: "default",
});

const icons = inject("icons");
const { data } = await useAsyncData('projects', () => queryContent('/about/technologies').findOne())
let technologies = data.value

const socialMedias = [
  { icon: icons.linkedinBoxFill, path: "https://www.linkedin.com/in/meysam-kiani-398243202" },
  { icon: icons.githubFill, path: "https://github.com/itmysm" },
  { icon: icons.codepenFill, path: "https://www.codepen.io/itmysm" },
  { icon: icons.twitterFill, path: "https://www.twitter.com/itmysm" },
];
</script>

