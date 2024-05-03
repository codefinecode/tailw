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
  name: 'FAQ',
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
    return {
      texts: [
        'Earn as You Go: Every second ticks a $DONT into your account. Cha-ching!',
        'Power of the X: Boost your earnings per second with multipliers.',
        'Daily Cookie: Start with a bang! A x10 multiplier for the first 10 minutes daily nets you 6,000 coins.',
        'Gradual Increase: Keep the app open to grow your multiplier by x0.1 every 10 minutes, maxing out at x3',
        'Social Perks: Increase your X by inviting dudes (check Referrals Leaderboard) and following us on Telegram and Twitter (see your Profile page).',
      ]
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
  <k-page class="bg-white  h-screen flex flex-col">


    <k-block class="px-5.5" @click="$router.push({ path: '/referal' })">

      <k-block class="my-12.5 px-5.5 flex justify-center items-center w-full"
               style="background: url('/src/images/FAQ/bg.svg') no-repeat 100% 100%"
               v-for="(t,key) in texts" :key="key"
      >
        <p>{{ key+1 }}. {{t}} </p>
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
