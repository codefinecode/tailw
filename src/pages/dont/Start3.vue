<script>
import {kBlockTitle, kNavbar, kPage, kIcon, kBlock} from "konsta/vue";

import DontLogo from "@/components/DontLogo.vue";
import Start2group from "@/components/start2/Start2group.vue";
import TwoCoins from "@/components/TwoCoins.vue";
import ManStart from "@/components/start3/ManStart3.vue";
import Start2lettering from "@/components/start2/Start2lettering.vue";
import FingerWithArrow from "@/components/FingerWithArrow.vue";
import pic from "@/components/picture.vue";


export default {
  name: 'Start3',
  components: {
    pic,
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
    boo(){
      console.log('boo')
    }
  },
  mounted() {
    console.log('start3 loaded')
  }

}
</script>

<template>
  <k-page class="bg-white  h-screen flex flex-col" @click="$router.replace({ path: '/home' })" >
    <k-block-title class="w-full flex justify-center  mt-7.5">
      <DontLogo style="height: 81px;width: 81px;" class="mx-auto"/>
    </k-block-title>
    <k-block class="w-full flex justify-center  relative">
      <k-block class="w-full flex justify-center absolute">
        <p class="big-digits text-md-dark-secondary mt-12.5">355</p>
      </k-block>
      <k-block class="w-full flex justify-end safe-areas mr-5.5" >
        <pic icon-src="start3/x2blue.svg" alt="x2"  />
      </k-block>
    </k-block>
    <k-block class="my-15">
      <p class="text-center text-xl">Bring more dudes brto make X bigger</p>
    </k-block>

    <k-block class="w-full flex justify-end">
      <Start2lettering class="" title="The more X <br>the more $DONT!"/>
    </k-block>
    <k-block class="w-full flex justify-between items-center mt-auto">
      <FingerWithArrow
          class="-mb-12.5 ml-12.5"
          @click="1===1"
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
