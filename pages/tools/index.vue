<template>
  <section class="w-full px-5 xl:px-0 xl:container min-h-[calc(100vh-67px)]">
    <h1
      class="
        mt-5
        md:mt-16
        text-primary-content text-2xl
        md:text-4xl
        font-bold
        capitalize
        lading-3
        capitalize
        text-center
      "
    >
      Projects
    </h1>

    <div
      class="flex justify-between items-end mt-20"
      v-show="sortedTools.length < 1 ? false : true"
    >
      <h3></h3>
      <div class="dropdown dropdown-end">
        <label
          tabindex="0"
          class="
            btn btn-outline
            border-info
            text-info
            hover:bg-info
            btn-sm
            m-1
            capitalize
          "
          >Sort By</label
        >
        <ul
          tabindex="0"
          class="
            dropdown-content
            menu
            p-2
            shadow
            bg-base-100
            rounded-box
            w-52
            text-sm
            mt-1
          "
        >
          <li
            v-for="option in sortOptions"
            :key="option"
            @click="filterBy(i, sortedTools)"
          >
            <a class="text-info hover:bg-info/25">
              <span class="text-xs"><component :is="option.icon" /></span>
              {{ option.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <ul
      class="
        grid grid-cols-2
        md:grid-cols-3
        xl:grid-cols-4
        gap-x-5 gap-y-10
        my-10
      "
    >
      <li
        class="
          border border-[#000]/[10%]
          bg-secondary
          rounded-md
          py-3
          shadow-md
          cursor-pointer
        "
        v-for="(tool, i) in sortedTools"
        :key="i"
        @click="changePath(tool.path)"
      >
        <div
          class="flex justify-between items-center px-3 mt-2 overflow-hidden"
        >
          <h1
            class="
              flex
              items-center
              text-primary-content
              font-bold
              text-sm
              md:text-base
              xl:text-lg
            "
          >
            {{ tool.name }}
          </h1>
          <div class="badge badge-outline text-xs text-warning">
            {{ tool.type }}
          </div>
          <!-- <akar-icons-info /> -->
        </div>

        <div class="px-4 mt-3">
          <p class="text-xs md:text-sm text-neutral">
            {{ tool.description }}
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { inject } from "vue";
const { data: tools } = await useAsyncData("tools", () =>
  queryContent("/tools").findOne()
);

const icons = inject("icons");
let sortedTools = ref(tools.value.body);

definePageMeta({
  layout: "default",
});

const sortOptions = [
  { name: "Date", icon: icons.ascending },
  { name: "Popular", icon: icons.star },
];
const loading = ref(false);

function filterBy(type = 0, data, category) {
  loading.value = true;
  sortedTools.value = [];
  switch (type) {
    case 0:
      sortedTools.value = sortByDate(data);
      break;
    case 1:
      sortedTools.value = SortByPopularity(data);
  }
  loading.value = false;
}

function sortByDate(date) {
  return date.sort((a, b) => {
    return a.date - b.date;
  });
}

function SortByPopularity(date) {
  return date.sort((a, b) => {
    return b.statistics.views - a.statistics.views;
  });
}

function changePath(path) {
  useRouter().push(path);
}

/*
function convertDate(timeStamp) {
  let timeNow = + new Date()
  timeNow = timeStampToDays(timeNow)
  let time = timeStampToDays(timeStamp)
  let date = timeNow - time

  if(date < 7)
    date = `${date}d ago`
  else if (date < 7 && date > 365)
    date = `${Math.ceil(date / 30)}m ago`
  else if (date > 365)
    date = `${Math.ceil(date / 365)}y ago`
  return date 
}

function timeStampToDays(timeStamp) {
  return Math.floor((((timeStamp / 60) / 60 ) / 60 ) / 24)
}*/
</script>

<style>
</style>