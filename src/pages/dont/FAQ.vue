<script>
import {
  kPage,
  kBlock,
} from "konsta/vue";

import pic from "@/components/picture.vue";
import Menu from "@/components/Menu.vue";


export default {
  name: 'FAQ',
  components: {
    pic,
    Menu,
    kPage,
    kBlock,
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
}
</script>

<template>
  <k-page class="bg-white  h-screen flex flex-col"
          style="background: url('/src/images/FAQ/bg_questions.svg') center top no-repeat;"
  >
    <k-block class="px-5.5">
      <k-block class="my-12.5 px-5.5 flex justify-center items-center w-full"
               style="background: url('/src/images/FAQ/bg.svg') no-repeat 100% 100%; background-blend-mode: multiply;opacity: 0.8;"
               v-for="(t,key) in texts" :key="key"
      >
        <p>{{ key + 1 }}. {{ t }} </p>
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

