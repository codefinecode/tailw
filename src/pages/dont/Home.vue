<script>
import {kBlockTitle, kNavbar, kPage, kIcon, kBlock} from "konsta/vue";

import DontLogo from "@/components/DontLogo.vue";
import Start2group from "@/components/start2/Start2group.vue";
import TwoCoins from "@/components/TwoCoins.vue";
import ManStart from "@/components/start3/ManStart3.vue";
import Start2lettering from "@/components/start2/Start2lettering.vue";
import FingerWithArrow from "@/components/FingerWithArrow.vue";
import pic from "@/components/picture.vue";
import Menu from "@/components/Menu.vue";
import ProgressLine from "@/components/ProgressLine.vue";


export default {
  name: 'Home',
  components: {
    pic,
    Menu,
    ProgressLine,
    DontLogo,
    Start2group,
    Start2lettering,
    FingerWithArrow,
    TwoCoins,
    ManStart,
    kPage,
    kBlock,
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
    boo() {
      console.log('boo')
    }
  },
  mounted() {
    console.log('start3 loaded')
  }

}
</script>

<template>
  <k-page class="bg-white  h-screen flex flex-col"  >
    <k-block-title class="w-full flex justify-center  mt-7.5">
      <DontLogo style="height: 81px;width: 81px;" class="mx-auto"/>
    </k-block-title>
    <k-block class="w-full flex justify-center  relative">
      <k-block class="w-full flex justify-center absolute">
        <p class="big-digits text-black mt-12.5">355</p>
      </k-block>
      <k-block class="w-full flex justify-end safe-areas mr-5.5">
        <pic icon-src="home/x2blue_bordered.svg" alt="x2"/>
      </k-block>
    </k-block>
    <k-block class="my-15 flex justify-center">
      <pic icon-src="home/man.svg" alt="x2"/>
    </k-block>

    <k-block class="w-full  mt-auto ">
      <k-block class="w-full flex justify-between items-center">
        <k-block class="ml-5.5">
          <p class="text-xl">League name</p>
          <p class="text-lg text-light-blue"  >your rate</p>
        </k-block>
        <k-block class="mr-5.5">
          <div class="relative">
            <div class="absolute h-full w-full flex justify-center items-center">
              <p class=" text-2xl w-2/3 text-center mr-4.5-safe">4353453</p>
            </div>
            <pic icon-src="home/lettering_space.svg"/>
          </div>
        </k-block>
      </k-block>
      <k-block class="m-5.5">
        <ProgressLine />
      </k-block>
      <k-block>
        <Menu active="home" />
      </k-block>
    </k-block>
  </k-page>
</template>

<style scoped>
.big-digits {
//font-size: 64px; font-size: 3.875rem;
}

.Start2lettering {
//max-height: 178px;
}
</style>
