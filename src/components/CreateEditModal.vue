<template>
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel" v-if="this.isNew">新增課程</h5>
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
              <img class="img-fluid" src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amF2YXNjcmlwdHxlbnwwfDF8MHx8&auto=format&fit=crop&w=800&q=60" alt="">
            </div>
            <div class="col">
                <form>
            <div class="mb-3 ">
              <label for="courseTitle" class="form-label"
                >課程標題</label
              >
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
                v-model = "this.temp.description"
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
                v-model = "this.temp.imageUrl"
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
                v-model = "this.temp.keyWords"
              />
            </div>
          </form>
            </div>
          </div>

        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-danger" v-if="this.isNew">確認新增</button>
          <button type="button" class="btn btn-danger" v-else>確認編輯</button>
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
      temp: {
        keyWords: ''
      },
      modal: null,
      isNew: 1
    }
  },
  // 沒下監聽props資料沒辦法複製
  watch: {
    courseTemp: function () { // 監聽props的值是否有改變
      if (this.courseTemp.id !== this.temp.id) {
        this.temp = this.courseTemp
      }
    },
    status: function () { // 監聽props的值是否有改變
      if (this.status !== this.isNew) {
        this.isNew = this.status
      }
    }
  },
  methods: {
  },
  mounted () {
    this.temp = this.courseTemp
    this.isNew = this.status
    this.Modal = new Modal(
      document.getElementById('Modal'),
      {
        keyboard: false
      }
    )
  }
}
</script>
