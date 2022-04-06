<template>
  <router-view></router-view>
  <!-- <h1>根節點</h1>
  <p>每個頁面都有</p> -->
  <Footer></Footer>
</template>
<script>
import Footer from '@/components/FooterView.vue'
export default {
  components: { Footer }

}
</script>
