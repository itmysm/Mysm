<template>
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn btn-ghost hover:bg-transparent p-0">
      <component v-if="info.nameIsIcon" :is="info.icon" />
      <p
        v-else
        class="
          text-primary-content
          hover:text-info
          text-sm
          font-semibold
          capitalize
        "
      >
        {{ info.name }}
      </p>
    </label>
    <ul
      tabindex="0"
      class="
        dropdown-content
        rounded-lg
        menu
        p-2
        shadow
        bg-secondary-focus
        shadow-xl
        rounded-box
        w-56
      "
    >
      <li
        class="text-sm text-accent-content hover:text-info"
        v-for="(item, i) in list"
        :key="i"
      >
        <a :href="item.path">
          <component v-if="info.membersHaveIcons" :is="item.icon" />
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  itemList: {
    type: Object,
    required: true,
  },
});

let info = shallowRef(props.itemList.info);
let list = shallowRef(props.itemList.members);
</script>

<style>
</style>