<template>
  <h2>所有課程</h2>
  <div class="container d-flex justify-content-center">
    <div class="row row-cols-2 row-cols-lg-4 g-3 w-75 m-4">
      <div class="col">
        <select id="select" class="form-select h-100 w-100" aria-label="course select" @change="select">
          <option selected>篩選分類</option>
          <option value="全部">全部</option>
          <option value="簡單">簡單</option>
          <option value="普通">普通</option>
          <option value="困難">困難</option>
        </select>
        <!-- <button
          type="button"
          class="btn btn-lg btn-outline-dark w-75"
          @click="getData"
        >
          全部
        </button> -->
      </div>
      <div class="col">
        <button
          type="button"
          class="btn btn-lg btn-outline-dark w-75"
          @click="courseLevel('簡單')"
        >
          簡單
        </button>
      </div>
      <div class="col">
        <button
          type="button"
          class="btn btn-lg btn-outline-dark w-75"
          @click="courseLevel('普通')"
        >
          普通
        </button>
      </div>
      <div class="col">
        <button
          type="button"
          class="btn btn-lg btn-outline-dark w-75"
          @click="courseLevel('困難')"
        >
          困難
        </button>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row row-cols-1 row-cols-lg-4 g-3 mb-3">
      <div
        class="col d-flex justify-content-center"
        v-for="item in courseData"
        :key="item.id"
      >
        <div class="position-relative card h-100" style="width: 18rem">
          <span v-for="id in saveId" :key="id + 123">
            <span
              v-if="item.id === id"
              id="finish"
              class="mt-3 me-3 position-absolute top-0 start-50 rounded-circle bg-white"
            >
              <img
                class="img-fluid"
                src="https://i.imgur.com/tQtU5AS.png"
                alt=""
              />
            </span>
          </span>
          <img
            v-if="item.imageUrl"
            :src="item.imageUrl"
            class="h-100 card-img-top"
            alt="課程圖"
          />
          <img
            v-else
            class="h-100"
            src="https://media.istockphoto.com/photos/man-meets-digital-avatar-of-himself-made-with-a-hologram-picture-id1317150019?b=1&k=20&m=1317150019&s=170667a&w=0&h=wcoKHusFII_C6Je_Kn4LB1ktcahhr1SgBD09Hmlg8jw="
            alt=""
          />
          <div class="card-body">
            <p class="card-text">
              <span class="d-block text-start">{{ item.title }}</span>
              <span class="badge rounded-pill bg-secondary">{{
                item.keyWords
              }}</span>
            </p>
            <router-link
              class="btn btn-outline-primary text-decoration-none"
              :to="`/course/${item.id}`"
              >開始上課</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      courseData: [],
      level: [],
      saveId: JSON.parse(localStorage.getItem('saveId')) || []
    }
  },
  methods: {
    select () {
      const option = document.querySelector('#select').value
      if (option === '全部') {
        this.getData()
      } else {
        this.filterData(option)
      }
    },
    getData () {
      this.$http(
        `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      )
        .then((res) => {
          this.courseData = res.data.products
        })
        .catch((err) => {
          console.log(err)
        })
    },
    filterData (category) {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?category=${category}`
        )
        .then((res) => {
          this.courseData = res.data.products
        })
        .catch((err) => {
          console.log(err)
        })
    },
    courseLevel (level) {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?category=${level}`
        )
        .then((res) => {
          this.level = res.data.products
          this.$router.push(`/course/${this.level[0].id}`)
        })
        .catch((err) => {
          console.log(err)
        })
      console.log(this.level)
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
<style>
/* #finish{
  transform:rotate(25deg)
} */
</style>
