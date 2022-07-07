<template>
  <div class="w-full xl:container mt-16 px-5 xl:px-0">
    <section class="min-w-full overflow-hidden">
      <p class="text-primary-content capitalize mb-3">Popular posts</p>
      <div
        class="
          flex
          min-w-fit
          md:grid
          grid-cols-5
          gap-4
          overflow-scroll
          no-scrollbar
        "
      >
        <div class="min-w-full col-span-3 h-44 rounded-md skeleton--full"></div>
        <div class="min-w-full col-span-2 h-44 rounded-md skeleton--full"></div>
        <div class="min-w-full col-span-2 h-44 rounded-md skeleton--full"></div>
        <div class="min-w-full col-span-3 h-44 rounded-md skeleton--full"></div>
      </div>
    </section>

    <!-- <section class="min-w-full overflow-hidden">
      <h3
        class="
          mt-16
          text-xl
          md:text-2xl md:text-center
          text-primary-content
          capitalize
          mb-3
        "
      >
        tools and stuff
      </h3>

      <div
        class="grid gap-x-8 gap-y-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
      </div>
    </section> -->
  </div>
</template>

<script>
export default {};
</script>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.skeleton--full {
  animation: skeleton-animation 3s infinite linear;
  background: linear-gradient(
    90deg,
    #1e293b 20%,
    #1e293b 28%,
    #1e293b 35%,
    #1e293b 42%,
    #1e293b 50%
  );
  background-size: 300% 100%;
  will-change: background-position;
  min-width: 90% !important;
}

@keyframes skeleton-animation {
  0% {
    background-position: 100% 0%;
  }
  70% {
    background-position: -50% 0%;
  }
  100% {
    background-position: -50% 0%;
  }
}
</style>