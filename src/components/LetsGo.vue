<template>
  <img :src="IconSrc" :alt="alt" :class="classes"  />
</template>
<script>
  import IconSrc from '../images/lets-go.svg';

  export default {
    props: ['alt', 'classes'],
    setup() {
      return {
        IconSrc,
      };
    },
  };
</script>
