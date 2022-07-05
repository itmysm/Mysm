<template>
  <div>
    <Header />
    <main class="flex justify-center">
      <slot class="xl:container" />
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