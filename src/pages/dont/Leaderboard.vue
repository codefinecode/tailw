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
  name: 'Leaderboard',
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
      scoreList:[
        {
          num:1,
          avatar:'Leaderboard/people_01.png',
          name: 'La_LA',
          score: 12.012
        },
        {
          num:2,
          avatar:'Leaderboard/people_01.png',
          name: 'Rich',
          score: 11.212
        },
        {
          num:3,
          avatar:'Leaderboard/people_01.png',
          name: 'Rich2',
          score: 10.500
        },
        {
          num:4,
          avatar:'Leaderboard/people_01.png',
          name: 'La_LA',
          score: 12.012
        },
        {
          num:5,
          avatar:'Leaderboard/people_01.png',
          name: 'Rich',
          score: 10.500
        },
        {
          num:300,
          avatar:'Leaderboard/people_01.png',
          name: 'Olo_lo (You)',
          score: 10.500
        },
      ],
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
  <k-page class="bg-white  h-screen flex flex-col" >
<!--    @click="$router.replace({ path: '/start2' })"-->
    <k-block class="w-full  text-center   mt-7.5 ">
      <k-block class="atma w-full">
        Olo-lo
      </k-block>
      <k-block class="w-full text-3xl text-light-blue ">
        League name
      </k-block>
      <k-block class="w-full text-black big-digits mt-5.5">
        34
      </k-block>
      <k-block class="flex w-full justify-center mt-12.5">
        <ProgressLine />
      </k-block>
    </k-block>
    <k-block class="text-center mt-5.5">
    <k-block class="flex w-full justify-center">
      <pic icon-src="foundation_arrow-down.svg"/>
    </k-block>
    <k-block class="w-full text-xl text-gray-300 ">
      Next League
    </k-block>
    <k-block class="w-full text-3xl  text-gray-300 ">
      100
    </k-block>
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


    <k-block class="w-full  mt-auto pt-5.5 " :style="`background: url(/src/images/Leaderboard/${ scoreOpened ? 'bg_opened.svg' : 'bg_closed.svg'})`">
      <k-block class=" flex justify-center w-full">
        <pic
          :icon-src="`Leaderboard/${ scoreOpened ? 'arrow_close.svg' : 'arrow_open.svg'}`"
          @click="scoreOpened = !scoreOpened"
        />
      </k-block>

      <k-block class="w-full flex justify-around items-center">
        <k-block class=" ">
          <div class="relative">
            <div class="absolute h-full w-full flex justify-center items-center">
              <p class=" text-2xl w-2/3 text-center ">All time</p>
            </div>
            <pic icon-src="Leaderboard/button_left_blue.svg"/>
          </div>
        </k-block>
        <k-block class=" ">
          <div class="relative">
            <div class="absolute h-full w-full flex justify-center items-center">
              <p class=" text-2xl w-2/3 text-center  ">Daily</p>
            </div>
            <pic icon-src="Leaderboard/button_right_light-blue.svg"/>
          </div>
        </k-block>
      </k-block>

      <k-list strong-ios outline-ios class="atma px-5.5 mt-5.5">
        <k-list-item class="my-1em" :title="pers.name"   v-for="pers  in scoreOpened ? scoreList : scoreList.slice(0,3)" :key="pers.num">
          <template #media>
            <k-block class="flex justify-between items-center">
            <span class="">{{ pers.num}}</span>
            <pic :icon-src="pers.avatar" class="mx-4.5" />
            </k-block>
          </template>
          <template #after>
            <pic icon-src="Leaderboard/coin.svg" class="mx-4.5" />
            {{ pers.score}}
          </template>
        </k-list-item>

      </k-list>

      <k-block class="m-5.5">
        <pic icon-src="progress_line.svg"/>
      </k-block>
      <k-block>
        <Menu active="leaderboard" />
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
