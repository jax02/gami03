<template>
  <router-view></router-view>
  <banner></banner>
  <How-to-use></How-to-use>
</template>
<style>
.bg-light1 {
  background: #f5f7fc;
}
.accordion-button:not(.collapsed) {
  background: #f5f7fc;
}
</style>
<script>
import HowToUse from '@/components/HowToUse.vue'
import banner from '@/components/BannerArea.vue'
export default {
  components: { HowToUse, banner }
}
</script>
