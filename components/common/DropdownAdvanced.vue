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
        shadow
        bg-secondary
        rounded-box
        w-56
        mt-12
        capitalize
      "
    >
      <li
        class="text-sm text-neutral hover:text-info"
        v-for="(item, i) in list"
        :key="i"
        :class="i == selected ? 'text-info' : 'text-neutral'"
        @click="selected = i"
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
const props = defineProps({
  itemList: {
    type: Object,
    required: true,
  },
});
let info = shallowRef(props.itemList.info);
let list = shallowRef(props.itemList.members);
let selected = ref(info.value.indexName);
console.log(list.value);
</script>

<style>
</style>