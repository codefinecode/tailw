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
  name: 'Referal',
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
      scoreOpened: false,
      scoreList: [
        {
          num: 1,
          avatar: 'Leaderboard/people_01.png',
          name: 'La_LA',
          score: 12.012
        },
        {
          num: 2,
          avatar: 'Leaderboard/people_01.png',
          name: 'Rich',
          score: 11.212
        },
        {
          num: 3,
          avatar: 'Leaderboard/people_01.png',
          name: 'Rich2',
          score: 10.500
        },
        {
          num: 4,
          avatar: 'Leaderboard/people_01.png',
          name: 'La_LA',
          score: 12.012
        },
        {
          num: 5,
          avatar: 'Leaderboard/people_01.png',
          name: 'Rich',
          score: 10.500
        },
        {
          num: 300,
          avatar: 'Leaderboard/people_01.png',
          name: 'Olo_lo (You)',
          score: 10.500
        },
      ],
    }
  },
}
</script>

<template>
  <k-page class="bg-white  h-screen flex flex-col">

    <k-block class="px-5.5" @click="$router.push({ path: '/referal-empty' })">
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
    <k-block class="w-full  mt-auto pt-5.5 "
             :style="`background: url(/src/images/Leaderboard/${ scoreOpened ? 'bg_opened.svg' : 'bg_closed.svg'}) `">
      <k-block class=" flex justify-center w-full">
        <pic
            :icon-src="`Leaderboard/${ scoreOpened ? 'arrow_close.svg' : 'arrow_open.svg'}`"
            @click="scoreOpened = !scoreOpened"
        />
      </k-block>
      <k-block class="w-full text-center atma text-xl">
        <p>Your dudes</p>
      </k-block>

      <k-list outline-ios class="atma px-5.5 mt-5.5">
        <k-list-item class="my-1em" :title="pers.name" v-for="pers  in scoreOpened ? scoreList : scoreList.slice(0,3)"
                     :key="pers.num">
          <template #media>
            <k-block class="flex justify-between items-center">
              <span class="">{{ pers.num }}</span>
              <pic :icon-src="pers.avatar" class="mx-4.5"/>
            </k-block>
          </template>
          <template #after>
            <pic icon-src="Leaderboard/coin.svg" class="mx-4.5"/>
            {{ pers.score }}
          </template>
        </k-list-item>
      </k-list>

      <k-block>
        <Menu active="dudes"/>
      </k-block>
    </k-block>
  </k-page>
</template>
