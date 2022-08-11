<template>
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn btn-ghost hover:bg-transparent p-0">
      <component
        class="text-info-content"
        v-if="info.nameIsIcon"
        :is="list[selected].icon"
      />
      <p
        v-else
        class="
          text-primary-content
          hover:text-info
          text-sm
          capitalize
          font-normal
        "
      >
        {{ list[info.indexName].name }}
      </p>
    </label>
    <ul
      tabindex="0"
      class="
        dropdown-content
        menu
        p-2
        shadow-xl
        bg-secondary-focus
        rounded-lg
        w-56
        mt-12
        capitalize
      "
    >
      <li
        class="text-sm text-accent-content hover:text-info"
        v-for="(item, i) in list"
        :key="i"
        :class="i == selected ? 'text-info' : 'text-accent-content'"
        @click="itemSelected(i)"
      >
        <a>
          <component v-if="info.membersHaveIcons" :is="item.icon" />
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const defaultTheme = ref("");
const theme = ref("");
const props = defineProps({
  itemList: {
    type: Object,
    required: true,
  },
});
let info = shallowRef(props.itemList.info);
let list = shallowRef(props.itemList.members);
let selected = ref(info.value.indexName);

onMounted(() => {
  defaultTheme.value = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "light"
    : "light";
  theme.value = localStorage.getItem("theme");

  list.value.map((item, i) => {
    item.name === theme.value ? (selected.value = i) : false;
    itemSelected(i);
  });
});

function itemSelected(i) {
  selected.value = i;

  window.matchMedia("(prefers-color-scheme: dark)").matches;
  list.value[i].name === "default"
    ? document
        .querySelector("body")
        .setAttribute("data-theme", defaultTheme.value)
    : document
        .querySelector("body")
        .setAttribute("data-theme", list.value[i].name);
  localStorage.setItem("theme", list.value[i].name);
}
</script>

<style>
</style>