<template>
  <header
    :class="motionBlur ? 'motion--blur' : ''"
    class="
      flex
      justify-center
      h-16
      px-5
      lg:border-b
      border-accent
      transition-colors
      z-[990]
      !bg-primary/75
    "
  >
    <div
      class="
        navbar
        flex
        justify-between
        xl:container
        border-b border-accent
        lg:border-none
        px-0
      "
    >
      <div class="flex-1 lg:flex-none px-0">
        <a class="text-primary-content text-lg font-bold" href="https://mysm.ir"
          >Mysm</a
        >
      </div>
      <div class="flex justify-end px-0 text-xs h-full">
        <div class="flex items-center h-full">
          <ul class="flex items-center capitalize hidden lg:flex font-semibold">
            <li class="ml-6">
              <a
                class="text-primary-content text-sm hover:text-info"
                href="/blog"
                >blog</a
              >
            </li>
            <li class="ml-6">
              <commonDropdown
                class="text-neutral hover:text-neutral-focus"
                :itemList="desktopMenuDropdown"
              />
            </li>
            <li class="ml-6">
              <a class="text-primary-content text-sm hover:text-info" href="/me"
                >About Me</a
              >
            </li>
          </ul>

          <hr
            class="
              bg-accent
              text-transparent
              w-[1px]
              h-[20px]
              ml-6
              border-none
              hidden
              lg:flex
            "
          />

          <commonSearchBox class="text-neutral hover:text-neutral-focus ml-6" />

          <commonDropdown
            class="text-neutral hover:text-neutral-focus lg:hidden ml-6"
            :itemList="mobileMenuDropdown"
          />

          <commonDropdownAdvanced
            class="text-neutral hover:text-neutral-focus hidden lg:flex ml-6"
            :itemList="themes"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { inject } from "vue";
const icons = inject("icons");
const motionBlur = ref(false);

const mobileMenuDropdown = shallowReactive({
  info: {
    nameIsIcon: true,
    icon: icons.moreVerticalFill,
    membersHaveIcons: true,
  },

  members: [
    {
      name: "Blog",
      icon: icons.bookClose,
      path: "/blog",
    },
    {
      name: "Tools",
      icon: icons.sparkles,
      path: "/tools",
    },
    {
      name: "About Me",
      icon: icons.person,
      path: "/me",
    },
  ],
});

const desktopMenuDropdown = shallowReactive({
  info: {
    nameIsIcon: false,
    name: "tools",
    membersHaveIcons: true,
  },

  members: [
    {
      name: "Graph",
      icon: icons.statisticUp,
      path: "/tools/graph",
    },
    {
      name: "Idk",
      icon: icons.telescope,
      path: "/tools/graph",
    },
    {
      name: "undefined",
      icon: icons.sparkles,
      path: "/tools/graph",
    },
    {
      name: "more tools",
      icon: icons.linkOut,
      path: "/tools",
    },
  ],
});

const themes = shallowRef({
  info: {
    nameIsIcon: true,
    default: false,
    indexName: 0,
    membersHaveIcons: true,
    nameChangeable: true,
  },

  members: [
    {
      name: "dark",
      icon: icons.moon,
      path: "/",
    },
    {
      name: "light",
      icon: icons.sun,
      path: "/",
    },
    {
      name: "default",
      icon: icons.laptopDevice,
      path: "/",
    },
  ],
});

onMounted(() => {
  window.scrollY > 20 ? (motionBlur.value = true) : (motionBlur.value = false);
  console.log(useNuxtApp());
  window.addEventListener("scroll", () => {
    window.scrollY > 20
      ? (motionBlur.value = true)
      : (motionBlur.value = false);
  });
});
</script>


<style scoped>
.motion--blur {
  backdrop-filter: blur(4px);
}
</style>