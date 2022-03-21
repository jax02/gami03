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
      token:
        'eyJhbGciOiJSUzI1NiIsImtpZCI6InRCME0yQSJ9.eyJpc3MiOiJodHRwczovL3Nlc3Npb24uZmlyZWJhc2UuZ29vZ2xlLmNvbS92dWUtY291cnNlLWFwaSIsImF1ZCI6InZ1ZS1jb3Vyc2UtYXBpIiwiYXV0aF90aW1lIjoxNjQ3NzAyNTY3LCJ1c2VyX2lkIjoiNXFaM3puQlhiZ010TEJxdGdCVHlpOFRrSWlPMiIsInN1YiI6IjVxWjN6bkJYYmdNdExCcXRnQlR5aThUa0lpTzIiLCJpYXQiOjE2NDc3MDI1NjgsImV4cCI6MTY0ODEzNDU2OCwiZW1haWwiOiJqaW1teWppbW15NjY2NjZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImppbW15amltbXk2NjY2NkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.H7y4ChsgOPOhpf1qE72Jaxqmsd-_wtvNcoLzoDsWJBbjgFZWO1YKf1y2o8WLS4IB63kthLqww2rQWVTCyHrLI3ryP8X8V3VNMqwIT3nmUL5_4Nkgl53UT9_SBM08dmIhdRH2EXG0ntscoCkzdl7XuN70ISLZiBWWH1fscpBrh8_8OSRtZ1vTMqeAQikik5Eu0IpTn_VcH53sZrTq603K2HOT9rN-DKD_AaH8c_FrshoGnVBcNU8z1f9v_4XJ7l4U9p_OuuogPv2aMxN9dCPWS64NagCcUxi-WHpsfRBoy9WAxu7G54wGfNKDkieq9tYkmR3SjTrxSMGaRvG4YLSR0w'
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
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.courseId}`
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
