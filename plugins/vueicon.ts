import { OhVueIcon, addIcons } from "oh-vue-icons";
import { IoEllipsisVertical, RiZhihuFill } from "oh-vue-icons/icons";

addIcons(IoEllipsisVertical, RiZhihuFill);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('icon', OhVueIcon)
})
