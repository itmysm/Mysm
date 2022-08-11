<template>
  <div
    class="
      flex flex-col
      items-center
      justify-center
      w-full
      px-5
      xl:px-0 xl:container
    "
  >
    <section class="mt-10 md:mt-32">
      <h1
        class="
          text-primary-content text-2xl
          md:text-5xl
          font-bold
          sm:w-3/4
          lg:w-2/3
          xl:w-3/5
          capitalize
          lading-3
          capitalize
        "
      >
        My personal Website for share my interesting projects and tools,
        playlists and...
      </h1>

      <div class="flex items-center mt-8 lg:mt-16">
        <div class="rounded-full overflow-hidden max-w-[70px] lg:max-w-[110px]">
          <img src="~/assets/media/banners/profile/mysm.jpg" alt="" />
        </div>

        <p
          class="
            text-neutral-content
            px-0
            pl-5
            sm:w-3/4
            md:w-3/6
            lg:w-2/6
            text-sm
            lg:text-base
            font-semibold
            text-neutral-content
          "
        >
          Frontend developer from
          <span class="text-info-content">Tehran/Iran</span>. Interested in
          programming and implementing websites
        </p>
      </div>
    </section>

    <hr class="w-full bg-neutral-focus h-[1px] my-16 md:my-32 opacity-5" />

    <section class="w-full">
      <div class="text-start md:text-center">
        <h1
          class="text-primary-content font-bold text-xl md:text-2xl capitalize"
        >
          Latest projects
        </h1>
        <p class="text-neutral-content">
          Some projects may only run on a specific device
        </p>
      </div>

      <div
        class="
          flex
          overflow-x-scroll
          items-center
          md:grid md:grid-cols-2 md:justify-items-center
          lg:grid-cols-3
          2xl:grid-cols-4
          gap-4 gap-x-10
          no-scrollbar
          mt-8
          lg:mt-16
          py-1
        "
      >
        <a
          class="
            flex flex-col
            items-center
            justify-center
            w-72
            min-h-[180px] min-w-[288px]
            max-w-[288px]
            h-fit
            shadow-md
            rounded-md
            bg-secondary
            p-[2px]
            overflow-hidden
            group
          "
          @mouseover="(mouseHover.hovering = true), (mouseHover.el = i)"
          @mouseout="mouseHover.el = -1"
          :class="
            mouseHover.hovering == true && mouseHover.el == i
              ? 'bg--animation'
              : false
          "
          :href="item.path"
          v-for="(item, i) in tools.body.slice(0, 4)"
          :key="i"
        >
          <div
            class="
              flex flex-col
              items-center
              justify-center
              h-full
              min-h-[inherit]
              rounded-md
              bg-secondary
              px-5
            "
          >
            <img
              class="group-hover:scale-[1.3] duration-700 transition-all"
              v-bind:src="'../assets/media/3D/' + item.icon"
              width="40"
              :alt="item.name"
            />

            <h4
              class="
                text-md text-primary-content
                mt-1
                mb-3
                capitalize
                border-b-2 border-primary-content/50
              "
            >
              {{ item.name }}
            </h4>
            <p class="text-neutral-content text-sm text-center">
              {{ item.description }}
            </p>
          </div>
        </a>
      </div>
    </section>

    <section
      class="
        full-screen
        flex flex-col
        items-center
        mt-16
        md:mt-32
        py-16
        bg-secondary
      "
    >
      <div class="xl:container px-5">
        <div class="text-center">
          <h1
            class="text-info-content text-xl md:text-2xl font-bold capitalize"
          >
            Entertaining
            <br />
            <span class="font-bold text-primary-content">“ Blog “</span>
          </h1>
        </div>

        <div class="grid grid-cols-12 gap-4 mt-8 lg:mt-16">
          <div
            v-for="(post, i) in posts.body.slice(0, 4)"
            :key="i"
            class="
              group
              mb-14
              md:mb-8
              col-start-2 col-span-10
              md:col-start-2 md:col-span-10
              2xl:col-start-3 2xl:col-span-8
              flex
              md:justify-start
              justify-items-start
              shadow-md
              px-3
              py-5
              border border-[#000]/[10%]
              rounded-md
            "
          >
            <a href="/blo" class="flex flex-col md:flex-row">
              <img
                class="
                  rounded-xl
                  w-[340px]
                  max-h-[270px]
                  md:w-[300px] md:max-h-[200px]
                  lg:w-[340px] lg:max-h-[270px]
                "
                v-bind:src="'../assets/media/banners/blog/' + post.banner"
                alt="test"
              />
              <div class="md:ml-10 px-2 mt-3 md:mt-0 transition-all">
                <button
                  class="
                    btn btn-outline btn-xs
                    border-info
                    text-info
                    hover:border-info hover:text-info
                  "
                >
                  {{ post.genre }}
                </button>

                <h1
                  class="
                    text-primary-content text-xl
                    md:text-xl
                    lg:text-2xl
                    font-bold
                    mt-2
                    group-hover:text-info-content
                    transition-all
                  "
                >
                  {{ post.title }}
                </h1>
                <p
                  class="
                    text-sm
                    lg:text-base
                    text-neutral-content
                    mt-2
                    group-hover:text-info-content
                    transition-all
                  "
                >
                  {{ post.description }}
                </p>

                <div class="flex mt-5 items-center">
                  <div
                    class="
                      max-w-[50px] max-h-[50px]
                      md:max-w-[40px] md:max-h-[40px]
                      lg:max-h-[60px] lg:max-w-[60px]
                      rounded-2xl
                      overflow-hidden
                    "
                  >
                    <img
                      src="~/assets/media/banners/profile/mysm.jpg"
                      alt=""
                      width="200"
                      height="200"
                    />
                  </div>
                  <div class="mx-4">
                    <h1
                      class="
                        text-sm
                        md:text-xs
                        lg:text-base
                        text-primary-content
                        font-bold
                      "
                    >
                      By: {{ post.author }}
                    </h1>
                    <p class="text-xs md:text-sm text-accent-content">
                      {{ post.date }}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="flex justify-center mt-8">
          <nuxt-link
            class="
              btn btn-outline
              capitalize
              border-primary-content
              text-primary-content
              hover:bg-primary-content hover:text-primary
            "
            to="/blog"
            >See More</nuxt-link
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});

const { data: tools } = reactive(
  await useAsyncData("tools", () => queryContent("/tools").findOne())
);
const { data: posts } = reactive(
  await useAsyncData("blog", () => queryContent("/blog").findOne())
);

const mouseHover = reactive({
  hovering: false,
  el: 0,
});

const postsLimit = ref(3);
</script>

<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.full-screen {
  width: calc(100vw - 1.25rem);
}

.bg--animation {
  background-size: 300% 300%;
  background-image: linear-gradient(
    -45deg,
    rgba(59, 173, 227, 1) 0%,
    rgba(87, 111, 230, 1) 25%,
    rgba(152, 68, 183, 1) 51%,
    rgba(255, 53, 127, 1) 100%
  );
  animation: AnimateBG 2s ease infinite;
}

@keyframes AnimateBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>