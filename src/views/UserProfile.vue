<template>
  <div class="container">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <h3 class="text-start">完成率：</h3>
        <div class="progress mb-2">
          <div
            class="progress-bar"
            role="progressbar"
            :style="{ width: this.completeSchedule + '%' }"
            :aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {{this.completeSchedule}}%
          </div>
        </div>
        <h3 class="text-start mt-5">個人資料:</h3>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                class="img-fluid rounded-circle m-2"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body text-start">
                <h5 class="card-title">{{ this.username }}</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
  <div class="container-fluid bg-light1">
    <div class="row">
        <div class="col-2"></div>
      <div class="col col-lg-4 mb-3">
        <h3>已完成：</h3>
        <div class="row">
          <div class="col-12">
            <swiper
              :effect="'coverflow'"
              :grabCursor="true"
              :centeredSlides="true"
              :slidesPerView="'auto'"
              :coverflowEffect="{
                rotate: 30,
                stretch: 10,
                depth: 200,
                modifier: 1,
                slideShadows: true,
              }"
              :pagination="true"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide
                v-for="item in courseData"
                :key="item.id"
                class="d-flex justify-content-center"
              >
                <div class="card" style="width: 18rem">
                  <img
                    src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <span
                      class="fs-6 badge rounded-pill bg-primary position-relative"
                    >
                      已完成
                      <span
                        class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                      >
                        <i class="fa-solid fa-check"></i>
                      </span>
                    </span>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
      <div class="col col-lg-4 mb-3">
        <h3>待完成：</h3>
        <div class="row">
          <div class="col-12">
            <swiper
              :effect="'coverflow'"
              :grabCursor="true"
              :centeredSlides="true"
              :slidesPerView="'auto'"
              :coverflowEffect="{
                rotate: 30,
                stretch: 10,
                depth: 200,
                modifier: 1,
                slideShadows: true,
              }"
              :pagination="true"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide
                v-for="item in courseData"
                :key="item.id"
                class="d-flex justify-content-center"
              >
                <div class="card" style="width: 18rem">
                  <img
                    src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <span
                      class="fs-6 badge rounded-pill bg-danger position-relative"
                    >
                      未完成
                      <span
                        class="test-white position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark"
                      >
                       <i class="fa-solid fa-pen"></i>
                      </span>
                    </span>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { getDatabase, ref, get, child } from 'firebase/database'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [EffectCoverflow, Pagination]
    }
  },
  data () {
    return {
      now: 11,
      data: null,
      username: '',
      completeSchedule: 45,
      courseData: []
    }
  },
  methods: {
    getProfile () {
      const dbRef = ref(getDatabase())
      get(child(dbRef, 'users/daxEnnWmVeYPghGEnrczaoNHpeo2'))
        .then((snapshot) => {
          if (snapshot.exists()) {
            this.data = snapshot.val()
            // this.completeSchedule = this.data.userData.completeSchedule
            this.username = this.data.userData.username
          } else {
            console.log('No data available')
          }
        })
        .catch((error) => {
          console.error(error)
        })
    },
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
    this.getProfile()
    this.getData()
  }
}
</script>
<style>
.bg-light1 {
  background: #f5f7fc;
}
swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 30px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 500px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>
