<template>
  <img :src="IconSrc" :alt="alt" :class="classes"  />
</template>
<script>
  import IconSrc from '../../images/start2/start2_group.svg';

  export default {
    props: ['alt', 'classes'],
    setup() {
      return {
        IconSrc,
      };
    },
  };
</script>
