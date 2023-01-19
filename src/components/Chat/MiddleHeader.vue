<template>
  <div class="w-full flex justify-center">
    <div class="th w-full xl:max-w-[670px] h-[70px] bg-light-main flex justify-between py-2 px-4 md:px-3 md:px-5">
    <div class="flex items-center">
      <p class="w-[43px] h-[43px] xl:w-[48px] xl:h-[48px] bg-light-primary rounded-full overflow-hidden">
        <img src="../../assets/media/profiles/x6x32gfrIO.JPG" class="max-w-[150%] left-[-13px] bottom-[9px] relative" alt="">
      </p>
      <div class="ml-3">
        <h2 class="font-bold">{{ name }}</h2>

        <div class="flex items-center text-sm text-light-gray/[.9] font-semibold select-none">
          <Icon class="text-[18px] mr-1" name="la:robot" />
          <p>{{status}}</p>
        </div>
      </div>
    </div>
    <div id="rightSideMenus" class="flex items-center select-none">
      <button class="flex items-center justify-center w-[35px] h-[35px] hover:bg-light-gray/[10%] rounded-full transition-all md:mr-1">
        <Icon name="ri:search-line" class="text-[24px] text-light-gray" />
      </button>
      <button class="flex items-center justify-center w-[40px] h-[40px] hover:bg-light-gray/[10%] rounded-full" :class="showActions ? 'bg-light-gray/[10%]' : 'bg-light-gray/[0]'" @click="showActions = !showActions">
        <Icon name="mi:options-vertical" class="text-[24px] text-light-gray absolute"/>

        <UICommonActions class="mr-6 mt-5" @getAction="receiveAction" :actions="actions" :class="showActions ? 'scale-1' : 'scale-0 opacity-0'" />
      </button>
    </div>
  </div>
  </div>
</template>

<script setup>
const name = 'Meysam kiani'
const status = ref('Bot')
const showActions = ref(false)

const actions = [
  {name: 'Share this page', 'ico': 'icon-park-outline:share', return: 'share'},
  {name: 'Delete', 'ico': 'icon-park-outline:delete-four', icoColor: 'text-light-error', divider: true , return: 'delete'},
]

function receiveAction (theAction) {
  actions.value = !showActions.value
}

</script>


<style>

.disappearActions {
  animation: name duration timing-function delay iteration-count direction fill-mode;
}
</style>