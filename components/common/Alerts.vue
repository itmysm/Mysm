<template>
  <div
    class="hidden flex-col bottom-0 h-fit fixed w-4/5 ml-5 ease-in duration-300"
  >
    <div
      class="
        min-w-[300px]
        w-fit
        max-w-full
        h-20
        bg-base-100
        mb-4
        rounded-md
        overflow-hidden
        max-w-[500px]
        slide-right
      "
      v-for="(alert, i) in alerts"
      :key="i"
    >
      <div
        class="flex justify-start items-center h-full w-full rounded-none px-5"
        :class="alert.type + '--bg'"
      >
        <component :class="'text-' + alert.type" :is="alertIcons[alert.icon]" />

        <span class="flex flex-col items-start ml-3">
          <p :class="'text-' + alert.description">{{ alert.title }}</p>
          <p :v-show="alert.description.length" class="text-neutral">
            {{ alert.description }}
          </p>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";
import { useAlerts } from "~/stores/alerts";
const store = useAlerts();
const props = defineProps({
  alerts: {
    require: true,
    type: Object,
  },
});
const alerts = reactive(store.getAlerts);
const icons = inject("icons");
const alertIcons = [
  icons.circleCheckFill,
  icons.circleCheckFill,
  icons.circleAlertFill,
];
</script>

<style>
.info--bg {
  background: rgb(13, 162, 231);
  background: linear-gradient(
    90deg,
    rgba(13, 162, 231, 0.21330539051558128) 0%,
    rgba(29, 36, 62, 1) 100%
  );
}

.success--bg {
  background: rgb(13, 162, 231);
  background: linear-gradient(
    90deg,
    rgba(54, 211, 153, 0.21330539051558128) 0%,
    rgba(29, 36, 62, 1) 100%
  );
}

.error--bg {
  background: rgb(13, 162, 231);
  background: linear-gradient(
    90deg,
    rgba(248, 114, 114, 0.21330539051558128) 0%,
    rgba(29, 36, 62, 1) 100%
  );
}

.slide-right {
  -webkit-animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-left {
  -webkit-animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes slide-right {
  0% {
    -webkit-transform: translateX(-100px);
    transform: translateX(-100px);
  }
  100% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
}

@keyframes slide-left {
  0% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
  100% {
    -webkit-transform: translateX(-200px);
    transform: translateX(-200px);
  }
}
</style>