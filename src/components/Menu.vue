<script>
import {kBlockTitle, kNavbar, kPage, kIcon, kBlock} from "konsta/vue";
import pic from "@/components/picture.vue";

export default {
  name: 'Menu',
  components: {
    kBlock,
    kNavbar,
    pic,
  },
  props: ['active'],

}
</script>

<template>
  <k-navbar class="p-5.5">
    <k-block  @click="$router.replace({ path: '/home' })">
      <pic :icon-src="active === 'home' ? 'home/home_blue.svg' : 'menu_Home.svg'"/>
    </k-block>
    <k-block @click="$router.replace({ path: '/profile' })">
      <pic :icon-src="active === 'profile' ? 'menu_profile.svg' : 'menu_profile.svg'"/>
    </k-block>
    <k-block  @click="$router.replace({ path: '/leaderboard' })">
      <pic :icon-src="active === 'leaderboard' ? 'Leaderboard/leaderboard_blue.svg' : 'menu_Leaderboard.svg'"/>
    </k-block>
    <k-block>
      <pic :icon-src="active === 'dudes' ? 'menu_Dudes.svg' : 'menu_Dudes.svg'"/>
    </k-block>
  </k-navbar>
</template>

<style scoped>

</style>