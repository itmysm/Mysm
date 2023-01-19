<template>
  <section class="th bg-light-gradient pattern h-[100vh]">
    <div class="th h-[100vh] bg-light-pattern bg-repeat bg-100 md:bg-70 lg:bg-60 xl:bg-50 2xl:bg-40 w-full relative">
      
      <ChatMiddleHeader />
      <ChatComposer />
    </div>
  </section>
</template>

<script setup>
let theme = ref('')
onMounted(() => {
  theme.value = JSON.parse(localStorage.getItem('appearance'))
})
</script>


<style>
.bg-light-pattern {
  background-image: url('../../assets/media/backgrounds/chat-bg-pattern-light.png') !important;
}

.bg-dark-pattern {
  background-image: url('../../assets/media/backgrounds/chat-bg-pattern-dark.png') !important;
}

.bg-dark-gradient {
  background: rgb(15,15,15);
  background: linear-gradient(135deg, rgba(15,15,15,1) 0%, rgba(15,15,15,1) 100%);
}

.bg-light-gradient {
  background: rgb(79,174,78);
  background: linear-gradient(135deg, rgba(79,174,78,.6) 0%, rgba(79,174,78,.6) 100%);
}
</style>