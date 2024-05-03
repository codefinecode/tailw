<template>
  <div class="progress-line">
    <svg width="321" height="9" viewBox="0 0 321 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path :stroke="trackColor" :style="{ strokeDasharray: '321 321' }" stroke-width="4" stroke-linecap="round" d="M2 7C36.5519 4.03827 121.154 2 158.448 2C195.742 2 278.964 4.03827 319 7" />
      <path :stroke="color" :style="{ strokeDasharray: `${progress * 3.21} 321` }" stroke-width="4" stroke-linecap="round" d="M2 7C36.5519 4.03827 121.154 2 158.448 2C195.742 2 278.964 4.03827 319 7" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ProgressLine',
  props: {
    progress: {
      type: Number,
      required: true,
      validator: (value) => value >= 0 && value <= 100
    },
    color: {
      type: String,
      required: true
    },
    trackColor: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.progress-line {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>