<template>
  <k-app :theme="theme" :safe-areas="!inIFrame" class="bg-white" style="background: #ffffff !important;">
    <router-view />
  </k-app>
</template>
<script>
  import { ref, onMounted, onBeforeUnmount, provide, computed, watch } from 'vue';
  import { kApp } from 'konsta/vue';

  export default {
    components: {
      kApp,
    },
    setup() {
      // const theme = ref('ios');
      const rootCSS = document.querySelector(':root');
      const calcMy = computed(() => {
        return '16px'
      })
      const orientation = ref('PORTRAIT');
      const theme = ref('material');
      const currentColorTheme = ref('');
      const setColorTheme = (color) => {
        const htmlEl = document.documentElement;
        htmlEl.classList.forEach((c) => {
          if (c.includes('k-color')) htmlEl.classList.remove(c);
        });
        if (color) htmlEl.classList.add(color);
        currentColorTheme.value = color;
      };
      const inIFrame = window.parent !== window;

      const setTheme = (t) => {
        theme.value = t;
      };

      const AppContext = computed(() => ({
        theme: theme.value,
        setTheme,
        colorTheme: currentColorTheme.value,
        setColorTheme,
        orientation
      }));

      provide('AppContext', AppContext);

      const calcSafeAreas = () => {
        if (window.location.href.includes('safe-areas')) {
          const html = document.documentElement;
          if (html) {
            html.style.setProperty(
              '--k-safe-area-top',
              theme.value === 'ios' ? '44px' : '24px'
            );
            html.style.setProperty('--k-safe-area-bottom', '34px');
          }
        }
      };
      const checkOrientation = () => {
        if (window.matchMedia("(orientation: landscape)").matches) {
          orientation.value = 'LANDSCAPE';
        } else {
          orientation.value = 'PORTRAIT';
        }
        console.log('orientation',orientation)
      }
      onBeforeUnmount(() =>{
        window.removeEventListener('resize', checkOrientation);
      });
      onMounted(() => {
        checkOrientation(); // проверяем ориентацию при создании компонента
        window.addEventListener('resize', checkOrientation); // добавляем с
        window.setTheme = setTheme;
        window.setMode = (mode) => {
          if (mode === 'dark') document.documentElement.classList.add('dark');
          else document.documentElement.classList.remove('dark');
        };
        setTheme('material')
        setColorTheme('bg-white')

        calcSafeAreas();
      });
      watch(theme, () => {
        // setColorTheme('bg-white')
        console.log()
        calcSafeAreas();
      });

      return {
        inIFrame,
        theme,
        calcMy,
      };
    },
  };
</script>
<style>
:root {
  --calc-my: v-bind(calcMy);
  --calc-mt: auto;
  --calc-mb: auto;
  --menu-bottom-height: 120;
}

.calc-my {
  margin-top: calc(v-bind('calcMy.value') / 2) !important;
  margin-bottom: calc(v-bind('calcMy.value') / 2) !important;
}

.calc-mt {
  margin-top: var(--calc-mt) !important;
}

.calc-mb {
  margin-bottom: var(--calc-mb) !important;
}

.menu-bottom{
  height: var(--menu-bottom-height)px;
  position: fixed;
  width: 100%;
  bottom: 0;
}

</style>