<template>
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel" v-if="this.isNew">
          新增課程
        </h5>
        <h5 class="modal-title" id="exampleModalLabel" v-else>編輯課程</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body text-start">
        <div class="row">
          <div class="col">
            <img
              class="img-fluid"
              src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amF2YXNjcmlwdHxlbnwwfDF8MHx8&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
          <div class="col">
            <form>
              <div class="mb-3">
                <label for="courseTitle" class="form-label">課程標題</label>
                <input
                  type="text"
                  class="form-control"
                  id="courseTitle"
                  placeholder="請輸入課程標題"
                  v-model="this.temp.title"
                />
              </div>
              <div class="mb-3">
                <label for="courseDescription" class="form-label"
                  >課程描述</label
                >
                <textarea
                  type="text"
                  class="form-control"
                  id="courseDescription"
                  placeholder="請輸入課程描述"
                  v-model="this.temp.description"
                />
              </div>
              <div class="mb-3">
                <label for="courseDescription" class="form-label"
                  >難度分類</label
                >
               <input
                  type="text"
                  class="form-control"
                  id="courseImageUrl"
                  placeholder="請輸入難度分類（簡單、普通、困難）"
                  v-model="this.temp.category"
                />
              </div>
              <div class="mb-3">
                <label for="courseImageUrl" class="form-label"
                  >效果預覽圖</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="courseImageUrl"
                  placeholder="請輸入課程效果預覽圖"
                  v-model="this.temp.imageUrl"
                />
              </div>
              <div class="mb-3">
                <label for="courseKeywords" class="form-label"
                  >課程關鍵字</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="courseKeywords"
                  placeholder="請輸入課程關鍵字"
                  v-model="this.temp.keyWords"
                />
              </div>
              <div class="mb-3">
                <label for="courseKeywords" class="form-label"
                  >片段碼</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="courseCode"
                  placeholder="請輸入課程片段碼"
                  v-model="this.temp.Code"
                />
              </div>
              <div class="mb-3">
                <label for="courseKeywords" class="form-label"
                  >難度</label
                >
                <input
                  type="number"
                  class="form-control"
                  id="courseCode"
                  placeholder="請輸入課程難度（1-入門、2-普通、3-困難）"
                  v-model="this.temp.level"
                />
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :true-value="1"
                  :false-value="0"
                  id="is_enabled"
                  v-model="this.temp.is_enabled"
                />
                <label class="form-check-label" for="is_enabled">
                  是否啟用
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          取消
        </button>
        <button
          type="button"
          class="btn btn-danger"
          v-if="this.isNew"
          @click="addData"
        >
          確認新增
        </button>
        <button type="button" class="btn btn-danger" v-else @click="editData()">
          確認編輯
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { Modal } from 'bootstrap'
export default {
  props: ['courseTemp', 'status'],
  data () {
    return {
      // 不先給第二層空值會報錯（資料還沒載入的關係）
      // 解決參考https://blog.csdn.net/qq_41999617/article/details/86473650?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_default&utm_relevant_index=1
      token: process.env.VUE_APP_TOKEN,
      temp: {
        keyWords: ''
      },
      modal: null,
      isNew: 1 // 新增，0編輯
    }
  },
  // 沒下監聽props資料沒辦法複製
  watch: {
    courseTemp: function () {
      // 監聽props的值是否有改變
      if (this.courseTemp.id !== this.temp.id) {
        this.temp = this.courseTemp
      }
    },
    status: function () {
      // 監聽props的值是否有改變
      if (this.status !== this.isNew) {
        this.isNew = this.status
      }
    }
  },
  methods: {
    addData () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`
      const data = this.temp
      this.$http
        .post(url, { data })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    editData () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.temp.id}`
      const data = this.temp
      this.$http
        .put(url, { data })
        .then((res) => {
          // console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.axios.defaults.headers.common.Authorization = this.token
    this.temp = this.courseTemp
    this.isNew = this.status
    this.Modal = new Modal(document.getElementById('Modal'), {
      keyboard: false
    })
  }
}
</script>
