<template>
  <k-page>

  </k-page>
</template>
<script>
  import {
    kPage,
    kNavbar,
    kBlockTitle,
    kList,
    kBlock,
    kListItem,
    kRadio,
    kToggle,
    kLink,
    kPopover,
  } from 'konsta/vue';

  import { inject, onMounted, ref, computed } from 'vue';

  // eslint-disable-next-line
  import routes from '../routes.js';
  import DemoIcon from '../components/DemoIcon.vue';

  export default {
    name: 'HomePage',
    components: {
      kPage,
      kBlock,
      kNavbar,
      kBlockTitle,
      kList,
      kListItem,
      kRadio,
      kToggle,
      kLink,
      kPopover,
      DemoIcon,
    },

    setup() {
      const darkMode = ref(false);
      const colorPickerOpened = ref(false);
      const AppContext = inject('AppContext');

      const toggleDarkMode = () => {
        darkMode.value = !darkMode.value;
        document.documentElement.classList.toggle('dark');
      };
      onMounted(() => {
        darkMode.value = document.documentElement.classList.contains('dark');
      });
      const theme = computed(() => {
        return AppContext.value.theme;
      });
      const setTheme = (t) => {
        AppContext.value.setTheme(t);
      };
      const colorTheme = computed(() => {
        return AppContext.value.colorTheme;
      });
      const setColorTheme = (c) => {
        AppContext.value.setColorTheme(c);
      };

      return {
        darkMode,
        colorPickerOpened,
        toggleDarkMode,
        colorTheme,
        setColorTheme,
        theme,
        setTheme,
        routes: routes.filter((r) => r.path !== '/'),
      };
    },
  };
</script>
