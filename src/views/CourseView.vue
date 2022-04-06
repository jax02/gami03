<template>
  <h2>單一課程</h2>
  <div class="container my-4">
    <div class="row">
      <div class="col-lg-6 mb-2">
        <div class="card">
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
  <br />
  <!-- <div class="container">
    <div class="row">
      <div class="col-lg-6 mb-2">
        <div class="outline">
          <div class="camera"></div>
          <div class="screen"> -->
            <!-- <code-mirror></code-mirror> -->
          <!-- </div>
          <div class="keyboard">
            <div class="keyboardTop"></div>
          </div>
        </div>
      </div> -->
      <!-- 效果顯示區 -->

      <!-- <div class="col-lg-6 mb-2">
      </div>
    </div>
  </div> -->
</template>
<script>
import codeMirror from '@/components/CodeMirror.vue'
export default {
  components: { codeMirror },
  data () {
    return {
      courseData: []
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
    }
    // filterCourse () {
    //   this.$http(
    //     `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`
    //   )
    //     .then((res) => {
    //       this.courseData = res.data.product
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    // }
  },
  mounted () {
    this.getData()
  }
}
</script>
<style>
.box3 {
  height: 400px;
  background-color: blue;
}
.outline {
  width: 100%;
  height: 400px;
  /* border: 1px solid black; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: start;
}

.screen {
  width: 95%;
  height: 90%;
  /* background-color: green; */
  border-top: 20px solid black;
  border-left: 20px solid black;
  border-right: 20px solid black;
  position: absolute;
  border-radius: 10% 10% 0% 0%;
}
.camera {
  z-index: 1;
  margin-top: 3px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: white;
}

.keyboard {
  z-index: 1;
  background-color: #fff;
  width: 105%;
  height: 30px;
  background-color: black;
  border-radius: 10px 10px 40px 40px;
  position: absolute;
  bottom: 2%;
  display: flex;
  position: absolute;
  justify-content: center;
}

.keyboardTop {
  z-index: 1;
  position: relative;
  width: 15%;
  height: 10px;
  background-color: white;
  border-radius: 0px 0px 15px 15px;
  /* top:-3%; */
}
</style>
