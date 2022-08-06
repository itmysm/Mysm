<template>
  <section
    class="
      shadow-md 
      bg-secondary
      w-full
      sm:w-3/5
      md:w-3/5
      max-w-[482px]
      lg:max-w-[782px]
      rounded-lg
      min-h-16
      pb-5
      mb-20
      border border-[#000]/[10%]
    "
    v-for="(mockup, i) in mockups"
    :key="i"
  >
    <div class="flex mx-3 mt-3">
      <p class="p-[6px] bg-neutral w-fit rounded-full mr-2"></p>
      <p class="p-[6px] bg-neutral w-fit rounded-full mr-2"></p>
      <p class="p-[6px] bg-neutral w-fit rounded-full mr-2"></p>
    </div>

    <div class="" v-for="(commend, i) in mockup" :key="i">
      <div
        class="mt-5 mx-3 text-sm font-bold"
        v-for="(text, i) in commend"
        :key="i"
      >
        <p class="text-info lowercase">
          <span class="mr-2">$</span> {{ commend[i].commend }}
        </p>
        <p
          :class="
            commend[i].type === 'success' ? 'text-success' : 'text-warning'
          "
        >
          <span class="mr-2">></span> {{ commend[i].response }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  commends: {
    require: true,
    type: Object,
  },
});

const mockups = shallowReactive(props.commends);
</script>

<style>
</style>