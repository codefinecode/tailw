<template>
  <img :src="`/src/images/${iconSrc}`" :alt="alt" :class="classes"/>
</template>
<script setup> import {defineProps} from "vue";

const props = defineProps({iconSrc: String, alt: String, classes: String,});
</script>