<template>
  <div class="w-full bg-light-main overflow-hidden rounded-t-xl pt-4 select-none transition duration-200 ease-linear"
    :class="status && showCommendMenu ? 'translate-y-0 opacity-1' : 'translate-y-[10em] opacity-0'">

    <span class="w-[28px] h-[6px] rounded-full bg-light-gray/50 absolute top-2 left-[50%]"></span>

    <ul class="bg-light-main mt-2">
      <li
        class="w-full flex justify-between text-sm md:text-base px-3 md:px-4 py-1 hover:bg-light-primary cursor-pointer hover:text-light-main"
        v-for="(commend, key) in commends" :key="key" @click="selectedCommend(key)">
        <p>{{commend}}</p>
        <p class="text-light-gray">/{{ key }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useCommends } from '../../../stores/commends/index.ts'

const emit = defineEmits(['updateBtnStatus', 'commendRunner'])
const props = defineProps({
  status: {
    require: false
  },

  message: {
    default: ''
  }
})

const commendsStore = useCommends()
let commends = reactive(commendsStore.showCommends)
const showCommendMenu = ref(false)

watch(() => props.message, (newMsg) => {
  commends = useCommends().filterCommends(newMsg)
  if (JSON.stringify(commends) == '{}' && newMsg.length > 0) showCommendMenu.value = false
  else showCommendMenu.value = true
})

function selectedCommend (keyCommend) {
  showCommendMenu.value = !showCommendMenu.value
  emit('commendRunner', keyCommend)
}
</script>

<style>
</style>