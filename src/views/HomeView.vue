<template>
  <router-view></router-view>
  <section>
  <div class="bg-white">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-7 d-flex align-items-center">
          <div>
            <h3 class="text-start">自我導向學習定義：</h3>
            <br>
            <h4 class="text-start">“個體在有他人或無他人幫助的情形下，由自己發動，而後自己診斷學習需要、形成學習目標、尋找學習所需要的人力及物力資源、選擇及實施適當的學習策略，以及評量學習結果的歷程“</h4>
            <p class="text-end"><span>美國成人教育之父</span> Malcolm Knowles（1913-1997）</p>
          </div>
          </div>
        <div class="col col-lg-5 "><img class="img-fluid" src="https://i.imgur.com/KZkwoWP.png" alt=""></div>
      </div>
    </div>
  </div>
</section>
  <How-to-use></How-to-use>
</template>
<style>
.bg-light1 {
  background: #f5f7fc;
}
.accordion-button:not(.collapsed) {
  background: #fff;
}
</style>
<script>
import HowToUse from '@/components/HowToUse.vue'
export default {
  components: { HowToUse }
}
</script>
