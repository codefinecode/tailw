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
  <k-block>
    <k-block style="width: 100%;height: 120px;"></k-block>
    <k-block class="p-5.5 flex justify-between menu-bottom">
      <k-block @click="$router.push({ path: '/home' })">
        <pic :icon-src="active === 'home' ? 'home/home_blue.svg' : 'menu_Home.svg'"/>
      </k-block>
      <k-block @click="$router.push({ path: '/profile' })">
        <pic :icon-src="active === 'profile' ? 'Profile/profile_blue.svg' : 'menu_profile.svg'"/>
      </k-block>
      <k-block @click="$router.push({ path: '/leaderboard' })">
        <pic :icon-src="active === 'leaderboard' ? 'Leaderboard/leaderboard_blue.svg' : 'menu_Leaderboard.svg'"/>
      </k-block>
      <k-block @click="$router.push({ path: '/referal' })">
        <pic :icon-src="active === 'dudes' ? 'Referal/Dudes_blue.svg' : 'menu_Dudes.svg'"/>
      </k-block>
    </k-block>
  </k-block>
</template>

