<template>
  <img :src="IconSrc" :alt="alt" :class="classes"  />
</template>
<script>
  import IconSrc from '../images/two_coins.png';

  export default {
    props: ['alt', 'classes'],
    setup() {
      return {
        IconSrc,
      };
    },
  };
</script>
