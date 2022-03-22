<template>
  <!-- DeleteModal -->
  <div
    class="modal fade"
    id="DeleteModal"
    ref="DeleteModal"
    tabindex="-1"
    aria-labelledby="DeleteModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-danger">
          <h5 class="modal-title text-light" id="DeleteModalLabel">刪除課程</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-start">
          是否刪除下列課程
          <br />
          名稱：<strong>{{ courseName }}</strong>
          <br />
          編號：<strong>{{ courseId }}</strong>
        </div>
        <div class="modal-footer">
          <button @click="deleteCourse" type="button" class="btn btn-secondary">
            確認刪除
          </button>
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
            返回
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Modal } from 'bootstrap'
export default {
  props: ['courseId', 'courseName'],
  data () {
    return {
      DeleteModal: null,
      token: process.env.VUE_APP_TOKEN
    }
  },
  methods: {
    getData () {
      this.$http(
        `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      )
        .then((res) => {
          this.data = res.data.products
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteCourse () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.courseId}`
      this.$http
        .delete(url)
        .then((res) => {
          console.log(res)
          this.DeleteModal.hide()
          window.location.reload()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.axios.defaults.headers.common.Authorization = this.token
    // 刪除使用 delProductModal
    this.DeleteModal = new Modal(
      document.getElementById('DeleteModal'),
      {
        keyboard: false
      }
    )
  }
}
</script>
