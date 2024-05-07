<script>
import {kBlockTitle, kNavbar, kPage, kIcon, kBlock} from "konsta/vue";

import DontLogo from "@/components/DontLogo.vue";
import Start2group from "@/components/start2/Start2group.vue";
import TwoCoins from "@/components/TwoCoins.vue";
import ManStart from "@/components/start2/ManStart2.vue";
import Start2lettering from "@/components/start2/Start2lettering.vue";
import FingerWithArrow from "@/components/FingerWithArrow.vue";
import ProgressCircle from "@/components/ProgressCircle.vue";
import pic from "@/components/picture.vue";


export default {
  name: 'Start2',
  components: {
    ProgressCircle,
    DontLogo,
    pic,
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
  },
}
</script>

<template>
  <k-page class="bg-white  h-screen flex flex-col " @click="$router.push({ path: '/start3' })">
    <k-block-title class="w-full flex justify-center  mt-7.5">
      <DontLogo style="height: 81px;width: 81px;" class="mx-auto"/>
    </k-block-title>
    <k-block class="w-full flex justify-center relative mt-0.25">
      <k-block class="w-full flex justify-center absolute">
        <p class="big-digits text-black mt-12.5 text-primary">355</p>
      </k-block>
      <k-block class="w-full flex justify-end safe-areas mr-5.5">
        <pic icon-src="start2/x2gray.svg" class="absolute right-1em top-0"/>
      </k-block>
    </k-block>
<!--    <k-block class="w-full flex justify-center  relative my-auto">-->
<!--      <k-block class="w-full flex justify-center absolute">-->
<!--        <p class="big-digits text-primary mt-7.5">355</p>-->
<!--      </k-block>-->
<!--      <Start2group-->
<!--          class=" mx-auto my-auto"-->

<!--      />-->
<!--    </k-block>-->

    <k-block class="w-full flex justify-end mt-auto">
      <pic icon-src="start2/start2_group.svg" class="absolute left-1em top-0"/>
    </k-block>
    <k-block class="mt-auto">
      <k-block class="w-full flex justify-end  ">
        <Start2lettering class="-mt-12.5" title="It's growing while you are looking.."/>
      </k-block>
      <k-block class="w-full flex justify-between items-center  ">
        <FingerWithArrow
            class="-mb-12.5 ml-12.5"
            @click="$router.push({ path: '/start3' })"
        />
        <ManStart />
      </k-block>
    </k-block>
  </k-page>
</template>
