<template>
<h2>所有課程</h2>
    <div class="container">
    <div class="row row-cols-4 g-3">
      <div class="col" v-for="item in courseData" :key="item.id">
        <div class="card" style="width: 18rem" >
          <img :src="item.imageUrl" class="card-img-top" alt="課程圖" />
          <div class="card-body">
            <p class="card-text">
              <span class="d-block text-start">{{ item.title }}</span>
              <span class="badge rounded-pill bg-secondary">{{ item.keyWords }}</span>
            </p>
              <router-link class="btn btn-outline-primary text-decoration-none" :to="`/course/${item.id}`">開始上課</router-link>
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
