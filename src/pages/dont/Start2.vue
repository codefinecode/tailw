<script>
// import HomePage from '../Home.vue'
import {kBlockTitle, kNavbar, kPage, kIcon, kBlock} from "konsta/vue";

import DontLogo from "@/components/DontLogo.vue";
import Start2group from "@/components/start2/Start2group.vue";
import TwoCoins from "@/components/TwoCoins.vue";
import ManStart from "@/components/start2/ManStart2.vue";
import Start2lettering from "@/components/start2/Start2lettering.vue";
import FingerWithArrow from "@/components/FingerWithArrow.vue";


export default {
  name: 'Start2',
  components: {
    DontLogo,
    Start2group,
    Start2lettering,
    FingerWithArrow,
    TwoCoins,
    ManStart,
    kBlock,
    kPage,
    kIcon,
    kNavbar,
    kBlockTitle,
    // HomePage,
  },
  data() {
    return {
      isLoading: false,
    }
  },
  methods: {
  },
  mounted() {
    console.log('start2 loaded')
  }

}
</script>

<template>
  <k-page class="bg-white  h-screen flex flex-col " @click="$router.push({ path: '/start3' })">
    <k-block-title class="w-full flex justify-center  mt-7.5">
      <DontLogo style="height: 81px;width: 81px;" class="mx-auto"/>
    </k-block-title>
    <k-block class="w-full flex justify-center  relative">
      <k-block class="w-full flex justify-center absolute">
        <p class="big-digits text-primary mt-7.5">355</p>
      </k-block>
      <Start2group
          class=" mx-auto"

      />
    </k-block>
    <k-block class="w-full flex justify-end">
      <Start2lettering class="" title="It's growing while you are looking.."/>
    </k-block>
    <k-block class="w-full flex justify-between items-center mt-auto">
      <FingerWithArrow
          class="-mb-12.5 ml-12.5"
          @click="$router.push({ path: '/start3' })"
      />
      <ManStart class=" "/>
    </k-block>
  </k-page>
</template>

<style scoped>
.big-digits{
  //font-size: 64px;
  font-size: 3.875rem;
}
.Start2lettering{
//max-height: 178px;
}
</style>
