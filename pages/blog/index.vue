<template>
  <section
    class="
      xl:container
      px-5
      mt-10
      flex flex-col
      items-center
      w-full
      min-h-screen
    "
  >
    <div class="text-center">
      <h1 class="text-info-content text-xl md:text-2xl font-bold capitalize">
        Entertaining
        <br />
        <span class="font-bold text-primary-content">“ Blog “</span>
      </h1>
    </div>

    <label for="" class="flex items-center mt-8 lg:mt-10" @input="searchLatter">
      <akar-icons-search
        class="text-primary-content absolute ps-2 !w-[1.5rem]"
        style="margin-left: 1em"
      />
      <input
        type="text"
        placeholder="Search something.."
        class="
          text-primary-content
          min-w-[250px]
          lg:min-w-[350px]
          h-12
          lg:h-16
          input
          w-full
          max-w-xs
          focus:outline-none
          shadow-md
          border border-[#000]/[10%]
        "
        style="padding-left: 3.5em"
      />
    </label>

    <p class="text-primary-content" v-for="(item, i) in foundedItems" :key="i">
      {{ item.title }}
    </p>
  </section>
</template>


<script setup>
const { data: posts } = await useAsyncData("posts", () =>
  queryContent("/blog/posts").findOne()
);
let accedptedKeys = ["title", "description", "genre"];
let result = reactive(posts.value.body);
let foundedItems = ref([1]);

async function searchLatter(event) {
  foundedItems.value = [];

  const query = event.target.value.toLowerCase();
  result.map((x, index) => {
    for (let i = 0; i <= accedptedKeys.length; i++) {
      if (
        x[accedptedKeys[i]] != undefined &&
        x[accedptedKeys[i]]?.toLowerCase().match(query)
      ) {
        foundedItems.value.push(x);
        i = accedptedKeys.length;
      }
    }
  });
}
</script>