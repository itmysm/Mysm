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

    <section class="flex flex-col items-center px-5 mt-16">
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
        Latest Projects
      </h2>

      <div
        class="
          w-full
          grid
          lg:grid-cols-2
          gap-4
          text-info-content
          xl:container
          group
        "
        v-for="(project, index) in projects.body"
        :key="index"
        :class="index > 0 ? 'mt-16' : 'mt-0'"
      >
        <div
          class="
            flex
            2xl:justify-end
            overflow-hidden
            rounded-md
            transition-all
            2xl:max-w-[700px]
            shadow-md
            border border-[#000]/[10%]
          "
        >
          <img
            src="~/assets/media/banners/screenshots/mysm.png"
            class="group-hover:scale-[1.24] duration-700"
          />
        </div>
        <div class="lg:pl-4 2xl:pl-10">
          <ul>
            <li class="mb-2 2xl:mb-6">
              <h1 class="text-lg xl:text-xl font-bold">Title</h1>
              <p class="text-sm 2xl:text-base text-neutral-content">
                Personal Website
              </p>
            </li>

            <li class="mb-2 2xl:mb-6">
              <h1 class="text-lg xl:text-xl font-bold">Description</h1>
              <p class="text-sm 2xl:text-base text-neutral-content">
                Simple website for creating lab lab in organzir hflk irhj lher
                pwrjo juwropeiu
              </p>
            </li>

            <li class="mb-2 2xl:mb-6">
              <h1 class="text-lg xl:text-xl font-bold">
                Technologies & Frameworks
              </h1>
              <p class="text-sm 2xl:text-base text-neutral-content">
                Vue, Nuxt, Tailwind, Pinia, TypeScript
              </p>
            </li>

            <li class="mb-2 2xl:mb-6">
              <h1 class="text-lg xl:text-xl font-bold">Live Demo</h1>
              <p class="text-sm 2xl:text-base text-neutral-content">
                <a class="text-info" href="#" :class="'underline'">
                  Is Available
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
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
const { data } = await useAsyncData("tec", () =>
  queryContent("/about/technologies").findOne()
);

const { data: projects } = await useAsyncData("projects", () =>
  queryContent("/about/projects").findOne()
);

let technologies = data.value;

const socialMedias = [
  {
    icon: icons.linkedinBoxFill,
    path: "https://www.linkedin.com/in/meysam-kiani-398243202",
  },
  { icon: icons.githubFill, path: "https://github.com/itmysm" },
  { icon: icons.codepenFill, path: "https://www.codepen.io/itmysm" },
  { icon: icons.twitterFill, path: "https://www.twitter.com/itmysm" },
];
</script>

