<template>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button v-for="(item,index) in courseData" :key="item.id" type="button" data-bs-target="#carouselExampleCaptions" :data-bs-slide-to=index class="active" aria-current="true" aria-label="Slide 1"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1643064723677-e0c0ab9d9e54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" v-for="item in courseData" :key="item.id">
      <img :src="item.imageUrl" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  <div class="bg-white">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-7 d-flex align-items-center">
          <div>
            <h3 class="text-start">自我導向學習定義：</h3>
            <br />
            <h4 class="text-start">
              “個體在有他人或無他人幫助的情形下，由自己發動，而後自己診斷學習需要、形成學習目標、尋找學習所需要的人力及物力資源、選擇及實施適當的學習策略，以及評量學習結果的歷程“
            </h4>
            <p class="text-end">
              <span>美國成人教育之父</span> Malcolm Knowles（1913-1997）
            </p>
            <router-link
              class="mt-5 text-decoration-none btn btn-outline-primary"
              to="/login"
              >登入後開始學習</router-link
            >
          </div>
        </div>
        <div class="col col-lg-5">
          <img class="img-fluid" src="https://i.imgur.com/KZkwoWP.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      courseData: []
    }
  },
  methods: {
    getData () {
      this.$http(
        `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      )
        .then((res) => {
          this.courseData = res.data.products
          console.log(this.courseData)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
<style>
.bg-light1 {
  background: #f5f7fc;
}
.carousel .carousel-item {
  height: 70vh;
}

.carousel .carousel-item img {
  min-height: 50vh;
  max-height: 70vh;
  object-fit: cover;
}
</style>
