<template>
  <div class="overflow-hidden">
    <label
      for="my-modal-4"
      class="btn btn-ghost hover:bg-transparent p-0 text-neutral"
    >
      <akar-icons-search />
    </label>

    <input type="checkbox" id="my-modal-4" class="modal-toggle" />
    <label
      for="my-modal-4"
      class="
        modal
        cursor-pointer
        backdrop-blur-sm
        bg-transparent
        flex
        items-start
      "
    >
      <label
        class="modal-box bg-secondary-focus rounded-lg p-0 mt-8 w-68 shadow-xl"
      >
        <div class="form-control px-5">
          <div class="input-group flex items-center">
            <akar-icons-search />
            <input
              type="text"
              placeholder="Search in post, tools and..."
              class="
                input input-bordered
                rounded-none
                focus:bordr-none focus:outline-none
                bg-transparent
                border-none
                px-0
                mx-3
                h-16
              "
            />
          </div>
        </div>

        <hr class="h-[1px] bg-accent border-none" />

        <div class="flex items-center justify-center h-64" v-if="true">
          <akar-icons-Air class="text-neutral text-3xl text-primary-content" />
          <h3 class="text-xl ml-4">No recent searches</h3>
        </div>
      </label>
    </label>
  </div>
</template>

<script setup>
import search from "~icons/akar-icons/Search";
</script>

