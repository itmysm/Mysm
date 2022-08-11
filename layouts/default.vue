<template>
  <div>
    <Header class="fixed w-full" />
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

watch(
  () => useRoute().fullPath,
  () => {
    console.log(
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
    );
  }
);
</script>