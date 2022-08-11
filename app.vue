<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import "@/assets/css/tailwind.css";
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
import InstagramFill from "~icons/akar-icons/InstagramFill";
import TelegramFill from "~icons/akar-icons/TelegramFill";
import TwitterFill from "~icons/akar-icons/TwitterFill";
import LinkedinBoxFill from "~icons/akar-icons/LinkedinBoxFill";
import GithubFill from "~icons/akar-icons/GithubFill";
import CodepenFill from "~icons/akar-icons/CodepenFill";
import CircleCheckFill from "~icons/akar-icons/CircleCheckFill";
import Filter from "~icons/akar-icons/Filter";
import CircleAlertFill from "~icons/akar-icons/CircleAlertFill";
import ChevronDown from "~icons/akar-icons/ChevronDown";
import Person from "~icons/akar-icons/Person";
import Info from "~icons/akar-icons/Info";
import Star from "~icons/akar-icons/Star";
import Ascending from "~icons/akar-icons/ascending";

const icons = {
  crown: Crown,
  sparkles: Sparkles,
  bookClose: BookClose,
  moreVerticalFill: MoreVerticalFill,
  telescope: Telescope,
  statisticUp: StatisticUp,
  linkOut: LinkOut,
  circleCheckFill: CircleCheckFill,
  circleAlertFill: CircleAlertFill,
  sun: Sun,
  moon: Moon,
  laptopDevice: LaptopDevice,
  statisticUp: StatisticUp,
  instagramFill: InstagramFill,
  telegramFill: TelegramFill,
  twitterFill: TwitterFill,
  linkedinBoxFill: LinkedinBoxFill,
  githubFill: GithubFill,
  codepenFill: CodepenFill,
  chevronDown: ChevronDown,
  person: Person,
  info: Info,
  star: Star,
  ascending: Ascending,
};
provide("icons", icons);

onMounted(() => {
  if (!localStorage.getItem("theme")) {
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? document.querySelector("body").setAttribute("data-theme", "light")
      : document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("theme", "default");
  }
});
</script>

<style>
body {
  scroll-behavior: smooth;
}
</style>