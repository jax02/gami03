<template>
  <h2>單一課程{{ scheduleData.length }}</h2>
  <div class="container my-4">
    <div class="row">
      <div class="col-lg-6 mb-2">
        <div class="card h-100">
          <div class="card-header">課程介紹</div>
          <div class="card-body text-start">
            <h5 class="card-title">{{ this.courseData.title }}</h5>
            <p class="card-text">{{ this.courseData.description }}</p>
          </div>
        </div>
      </div>
      <div class="col-lg-6 mb-2">
        <div class="card">
          <div class="card-header">預覽效果</div>
          <img
            :src="this.courseData.imageUrl"
            class="card-img-bottom img-fluid mx-auto p-2"
            alt="預覽效果圖"
            style="width: 400px; height: 300px; object-fit: cover"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <code-mirror></code-mirror>
    </div>
  </div>
</template>
<script>
import codeMirror from '@/components/CodeMirror.vue'
export default {
  components: { codeMirror },
  data () {
    return {
      courseData: [],
      scheduleData: []
    }
  },
  methods: {
    getData () {
      // 抓路由上的id值
      const { id } = this.$route.params
      this.$http(
        `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`
      )
        .then((res) => {
          this.courseData = res.data.product
        })
        .catch((err) => {
          console.log(err)
        })
    },
    allData (category) {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?category=${category}`
        )
        .then((res) => {
          this.scheduleData = res.data.products
          console.log(this.scheduleData)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getData()
    this.allData('普通')
  }
}
</script>
