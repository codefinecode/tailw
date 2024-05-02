<template>
  <img :src="IconSrc" :alt="alt" :class="classes"  />
</template>
<script>
  import IconSrc from '@/images/start3/man_face.svg';

  export default {
    props: ['alt', 'classes'],
    setup() {
      return {
        IconSrc,
      };
    },
  };
</script>
