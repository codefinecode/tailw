<template>
  <div class="relative">
    <div class="absolute h-full w-full flex justify-center items-center">
      <p class=" text-2xl w-2/3 text-center -mt-5.5">{{ title }}</p>
    </div>
    <img :src="IconSrc" :alt="alt" :class="classes" class=" "   />
  </div>
</template>
<script>
  import IconSrc from '../../images/start2/lettering_space.svg';

  export default {
    props: ['alt', 'classes', 'title'],
    setup() {
      return {
        IconSrc,
      };
    },
  };
</script>
