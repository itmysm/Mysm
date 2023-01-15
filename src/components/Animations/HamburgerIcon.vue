<template>
  <div id="nav-icon4" class="w-[40px] h-[30px] bg-light-primary" :class="isOpen ? 'open' : 'close'" @click="isOpen = !isOpen">
    <span class="bg-light-opposite w-[20px] h-[2px] rounded-xl" v-for="i in 3"></span>
  </div>
</template>


<script setup>
const isOpen = ref(false)
</script>

<style>
/* Icon 4 */

#nav-icon4 {
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
}

#nav-icon4 span {
  display: block;
  position: absolute;
  left: 50%;
  -webkit-transform: rotate(0deg) translateX(-50%);
  -moz-transform: rotate(0deg) translateX(-50%);
  -o-transform: rotate(0deg) translateX(-50%);
  transform: rotate(0deg) translate(-50%);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}


#nav-icon4 span:nth-child(1) {
  top: 35%;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#nav-icon4 span:nth-child(2) {
  top: 50%;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#nav-icon4 span:nth-child(3) {
  top: 65%;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#nav-icon4.open span:nth-child(1) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  top: 25%;
  left: 28%;
}

#nav-icon4.open span:nth-child(2) {
  width: 0%;
  opacity: 0;
}

#nav-icon4.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  top: 67%;
  left: 29%;
}

</style>

