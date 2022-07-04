<template>
  <div class="min-h-fit">
    <div
      class="item flex items-start"
      v-for="(item, i) in experiences"
      :key="i"
    >
      <p class="text-neutral text-sm relative bottom-1.5">{{ item.date }}</p>
      <div class="flex flex-col items-center justify-start mx-10 h-full">
        <hr class="border-2 border-secondary w-[13px] h-[13px] rounded-full" />
        <hr
          v-show="experiences[i + 1]"
          class="w-[1px] bg-accent border-none h-full"
        />
      </div>
      <p class="text-primary-content relative bottom-1.5">{{ item.title }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  experiences: {
    require: true,
    type: Object,
  },
});

const experiences = shallowReactive(props.experiences);
</script>

<style scoped>
.item {
  height: 10em !important;
}
</style>