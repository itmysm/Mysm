<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
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
import InstagramFill from "~icons/akar-icons/InstagramFill";
import TelegramFill from "~icons/akar-icons/TelegramFill";
import TwitterFill from "~icons/akar-icons/TwitterFill";
import LinkedinBoxFill from "~icons/akar-icons/LinkedinBoxFill";
import GithubFill from "~icons/akar-icons/GithubFill";
import CodepenFill from "~icons/akar-icons/CodepenFill";
import CircleCheckFill from "~icons/akar-icons/CircleCheckFill";
//import CircleXFill from "~icons/akar-icons/CircleXFill";
import CircleAlertFill from "~icons/akar-icons/CircleAlertFill";
// directions
import ChevronDown from "~icons/akar-icons/ChevronDown";
// persons
import Person from "~icons/akar-icons/Person";

const icons = {
  // others
  crown: Crown,
  sparkles: Sparkles,
  bookClose: BookClose,
  moreVerticalFill: MoreVerticalFill,
  telescope: Telescope,
  statisticUp: StatisticUp,
  linkOut: LinkOut,
  circleCheckFill: CircleCheckFill,
  // circleXFill: CircleXFill,
  circleAlertFill: CircleAlertFill,
  // themes
  sun: Sun,
  moon: Moon,
  laptopDevice: LaptopDevice,
  statisticUp: StatisticUp,
  // socials
  instagramFill: InstagramFill,
  telegramFill: TelegramFill,
  twitterFill: TwitterFill,
  linkedinBoxFill: LinkedinBoxFill,
  githubFill: GithubFill,
  codepenFill: CodepenFill,
  // directions
  chevronDown: ChevronDown,
  // persons
  person: Person,
};

provide("icons", icons);

import "@/assets/css/tailwind.css";
</script>