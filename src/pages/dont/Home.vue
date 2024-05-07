<script>
import {kBlockTitle, kPage, kBlock} from "konsta/vue";
// import {inject, onBeforeMount,onMounted, watch, ref} from 'vue'

import DontLogo from "@/components/DontLogo.vue";
import pic from "@/components/picture.vue";
import Menu from "@/components/Menu.vue";
import ProgressLine from "@/components/ProgressLine.vue";
import ProgressCircle from "@/components/ProgressCircle.vue";


export default {
  name: 'Home',
  components: {
    pic,
    Menu,
    ProgressLine,
    ProgressCircle,
    DontLogo,
    kPage,
    kBlock,
    kBlockTitle,
  },
  // setup() {
  //
  //   const {orientation} = inject('AppContext', {orientation: ref('PORTRAIT')})
  //   onMounted(() => {
  //     console.log('Home onBeforeMount orientation.value', orientation)
  //   })
  //   // watch(orientation, (newValue) => {
  //   //   console.log('Новая ориентация:', newValue)
  //   // })
  //   watch(
  //       () => orientation, // Наблюдаем за orientation.value
  //       (newValue) => {
  //         console.log('Новая ориентация:', newValue)
  //       },
  //       {immediate: true} // Немедленно выполняем колбэк watch при создании компонента
  //   )
  // }
}
</script>

<template>
  <k-page class="bg-white  h-screen flex flex-col">
    <k-block-title class="w-full flex justify-center  mt-7.5">
      <DontLogo style="height: 81px;width: 81px;" class="mx-auto"/>
    </k-block-title>
    <k-block class="w-full flex justify-center relative my-auto">
      <k-block class="w-full flex justify-center absolute">
        <p class="big-digits text-black mt-12.5">355</p>
      </k-block>
      <k-block class="w-full flex justify-end safe-areas mr-5.5">
        <progress-circle :progress="75" color="#2BABEE"/>
      </k-block>
    </k-block>
    <k-block class="my-15 flex justify-center my-auto">
      <pic icon-src="home/man.svg" alt="x2"/>
    </k-block>
    <k-block class="w-full  mt-auto  ">
      <k-block class="w-full flex justify-between items-center">
        <k-block class="ml-5.5">
          <p class="text-xl">League name</p>
          <p class="text-lg text-light-blue">your rate</p>
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
        <ProgressLine :progress="34" color="#2BABEE" trackColor="#C9DAE9"/>
      </k-block>
      <k-block>
        <Menu active="home"/>
      </k-block>
    </k-block>
  </k-page>
</template>

