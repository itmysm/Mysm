<template>
  <div class="flex flex-col justify-center items-center w-full h-[92vh]">
    <div class="flex justify-center items-center mt-10">
      <h3 class="font-black text-xl md:text-4xl text-primary-content">
        {{ error.code }}
      </h3>

      <hr
        class="
          bg-accent
          text-transparent
          w-[1px]
          h-[40px]
          border-none
          flex
          mx-5
        "
      />

      <h3 class="text-md md:text-xl text-neutral font-bold">
        {{ error.message }}
      </h3>
    </div>
     <nuxt-link to='/' 
        class="mt-10
        capitalize
        text-info
        hover:text-primary-content
        transition-all">Back to home</nuxt-link>
  </div>
</template>

<script setup>
import { useError } from "~/stores/error";

definePageMeta({
  title: "Oops",
  layout: "default",
});

const error = reactive(useError().$state.error);

console.log();
</script>
