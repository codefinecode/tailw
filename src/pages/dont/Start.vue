<script>
import HomePage from '../Home.vue'
import {kBlockTitle, kNavbar, kPage, kIcon} from "konsta/vue";

import DontLogo from "../../components/DontLogo.vue";
import LetsGo from "../../components/LetsGo.vue";
import TwoCoins from "../../components/TwoCoins.vue";
import ManStart from "../../components/ManStart.vue";


export default {
  name: 'Start',
  components: {
    kIcon,
    DontLogo,
    LetsGo,
    TwoCoins,
    ManStart,
    kPage,
    kNavbar, kBlockTitle,
    HomePage,
  },
}
</script>

<template>
  <k-page class="bg-white  h-screen flex flex-col">
    <k-block class="w-full flex justify-center  mt-auto">
      <DontLogo class="w-1/2 mx-auto"/>
    </k-block>
    <k-block class="w-full flex justify-center my-1em">
      <p class="text-center text-2xl">Earn <strong class="text-primary">$DONT</strong><br> without doing <br> anything</p>
    </k-block>
    <k-block class="w-full flex justify-center">
      <LetsGo
        class="w-1/2 mx-auto"
        @click="$router.push({ path: '/start2' })"
      />
    </k-block>
    <k-block class="w-full flex justify-center">
      <TwoCoins class="w-1/2 mx-auto" style="height: 74px;width: 67.5px;"/>
    </k-block>
    <k-block class="w-full flex justify-end mt-auto">
      <ManStart class="w-1/2 "/>
    </k-block>
  </k-page>
</template>

<style scoped>

</style>
