<template>
  <section class="more-action transition duration-200 ease-linear">
    <ul class="relative top-20 right-20 bg-light-actions backdrop-blur-md rounded-lg min-w-[200px] py-2 px-1 z-[999]">
      <li class="flex items-center px-3 py-2 hover:bg-light-gray/[0.10] rounded-md"
        v-for="(action, index) in props.actions" @click="takeAction(action.return)" :key="index">
        <Icon class="mr-4 text-lg" :name="action.ico" :class="action.icoColor || 'text-light-gray'" />
        <p class="text-[14px] font-semibold" :class="action.icoColor || ''">{{ action.name }}</p>
      </li>
    </ul>

    <div @click="takeAction" class="absolute w-full h-full left-0 top-0 z-[941]"></div>
  </section>
</template>

<script setup>
const emits = defineEmits(['getAction'])
const props = defineProps({
  actions : {
    required: true
  }
})


function takeAction (action = false) {
  emits('getAction', action)
}
</script>