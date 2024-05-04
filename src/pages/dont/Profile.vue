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
  name: 'Profile',
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
    // HomePage,
  },
  data() {
    return {}
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
  <k-page class="bg-white  h-screen flex flex-col ">
    <k-block class="px-5.5">
      <!--    @click="$router.push({ path: '/start2' })"-->
      <k-block class="w-full  flex justify-between   mt-7.5 ">
        <k-block class="w-full text-xl  ">
          Total balance
        </k-block>
        <pic icon-src="Profile/faq_button.svg" class="" @click="$router.push({ path: '/f-a-q' })"/>
      </k-block>


      <k-block>
        <p class=" big-digits mt-12.5  "> 126.003 </p>
      </k-block>
      <pic icon-src="Profile/border_top.svg" class="mt-12.5  "/>
      <k-block class="w-full  flex justify-between items-baseline mt-1em ">
        <p class="text-xl ">Quests</p>
        <p class="atma ">View all quests</p>
      </k-block>

      <k-block class="mt-5.5 p-5.5 atma relative w-full"
               style="background: url('/src/images/Profile/bg_subscribe.svg')  no-repeat; background-size: 100% auto; min-height: auto;">
        <pic icon-src="Profile/Acceleration.png" class="absolute right-1em top-0"/>
        <b class="">Subscribe to the Telegram and Twitter channels</b>
        <p>Get x50 for 10 minutes</p>
        <div class="flex justify-around mt-5.5">
          <pic icon-src="Profile/button_left.svg" class=" "/>
          <pic icon-src="Profile/button_right.svg" class=" "/>
        </div>
      </k-block>

      <k-block class="mt-4.5  p-5.5 pl-7.5 atma relative w-full text-gray-400"
               style="background: url('/src/images/Profile/bg_stay-on.svg')  no-repeat; background-size: 100% auto; min-height: auto;">
        <pic icon-src="Profile/Acceleration.png" class="absolute right-1em top-0"/>
        <b class="">Stay on the main screen for 10 minutes.</b>
        <p>Get x50 for 10 minutes</p>
      </k-block>

    </k-block>

    <k-block class=" mt-auto">
      <Menu active="profile" />
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
