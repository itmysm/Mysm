<template>
  <div>
    <Header class="fixed w-full" />
    <generalBubble class="z-[-1] blur-sm" />
    <main class="flex justify-center pt-20">
      <slot />
    </main>
    <Footer />
    <commonAlerts />
  </div>
</template>

<script setup>
import { useAlerts } from "~/stores/alerts";
const store = useAlerts();

onMounted(() => {
  store.addNewAlert("title", "description", "error");
});
</script>