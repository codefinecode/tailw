<script>
import {kBlockTitle, kNavbar, kPage, kIcon, kBlock, kList, kListItem} from "konsta/vue";

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
  name: 'ReferalEmpty',
  components: {
    ProgressLine,
    pic,
    Menu,
    DontLogo,
    Start2group,
    Start2lettering,
    FingerWithArrow,
    TwoCoins,
    ManStart,
    kPage,
    kList,
    kListItem,
    kBlock,
    kIcon,
    kNavbar,
    kBlockTitle,
  },
}
</script>

<template>
  <k-page class="bg-white  h-screen flex flex-col">

    <k-block class="px-5.5" @click="$router.push({ path: '/referal' })">
      <k-block class="w-full mt-5.5 text-center flex justify-center items-baseline mt-1em ">
        <p class="atma">By inviting a dude, you'll get those kinds of cookies:</p>
      </k-block>
      <k-block class="mt-5.5 p-5.5 atma relative w-full"
               style="background: url('/src/images/Referal/bg.svg')  no-repeat; background-size: 100% auto; min-height: 64px;">
        <b>1. You and your dude X100 for 10 minutes</b>
      </k-block>
      <k-block class="mt-5.5 p-5.5 atma relative w-full"
               style="background: url('/src/images/Referal/bg.svg')  no-repeat; background-size: 100% auto; min-height: 64px;">
        <b>1. When your dude hits 100,000 $DONT - You and your dude X150 for 10 minutes</b>
      </k-block>
      <k-block class="w-full  flex justify-center   mt-7.5 ">
        <pic icon-src="Referal/crying_man.png" class=""/>
      </k-block>
      <k-block class="mt-5.5 p-5.5  text-center text-xl w-full">
        <p>You didn't invite <br> a single dude...</p>
      </k-block>
      <k-block class=" mt-5.5  flex justify-center">
        <div class="relative text-center">
          <div class="absolute h-full w-full flex justify-center items-center">
            <p class=" text-2xl   text-center text-white atma ">Invite a dude</p>
          </div>
          <pic icon-src="button_back.svg"/>
        </div>
      </k-block>
      <k-block>
        <p class="atma text-center text-lg"> to get MORE </p>
      </k-block>
    </k-block>

    <k-block class=" mt-auto">
      <Menu active="dudes"/>
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
