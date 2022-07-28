<template>
  <section
    class="
      bg-primary
      fixed
      w-full
      h-screen
      flex flex-col
      items-start
      justify-between
      px-md-20
      py-10
    "
  >
    <div class="bubble relative w-52 h-44 md:left-1/4 animate-toUp"></div>
    <div class="bubble relative w-52 h-44 left-3/4 animate-toLeft"></div>
    <div class="bubble relative w-52 h-44 md:left-1/4 animate-toUpLeft"></div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.bubble {
  background-color: blueviolet;
  border-radius: 30% 70% 30% / 60% 40% 60% 40%;
}
</style>