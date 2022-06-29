<template>
  <div>
    <NuxtLayout name="default" />
  </div>
</template>

<script setup>
import { provide } from "vue";
import MoreVerticalFill from "~icons/akar-icons/MoreVerticalFill";
import Crown from "~icons/akar-icons/Crown";
import Sparkles from "~icons/akar-icons/Sparkles";
import BookClose from "~icons/akar-icons/BookClose";
import Telescope from "~icons/akar-icons/Telescope";
import StatisticUp from "~icons/akar-icons/StatisticUp";
import LinkOut from "~icons/akar-icons/LinkOut";
import Sun from "~icons/akar-icons/Sun";
import Moon from "~icons/akar-icons/Moon";
import LaptopDevice from "~icons/akar-icons/LaptopDevice";

const icons = {
  crown: Crown,
  sparkles: Sparkles,
  bookClose: BookClose,
  moreVerticalFill: MoreVerticalFill,
  telescope: Telescope,
  statisticUp: StatisticUp,
  linkOut: LinkOut,
  sun: Sun,
  moon: Moon,
  laptopDevice: LaptopDevice,
};

provide("icons", icons);

import "~/assets/css/tailwind.css";
</script>