<template>
  <h2>後台</h2>
  <div class="container">
    <div class="my-3 d-flex justify-content-end">
      <button
        @click="openModal ('new',item)"
        type="button"
        class="btn bnt-lg fs-4 rounded btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#Modal"
      >
        新增課程
      </button>
    </div>
    <div class="accordion" id="accordionExample">
      <div class="accordion-item" v-for="item in data" :key="item.id">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#${item.id}`"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            第一章，認識座標系
            <div class="fs-5">{{ item.title }}</div>
            <div class="w-75 text-end">
              <span class="badge fs-5 rounded-pill bg-secondary"
                >課程編號：</span
              >
              <strong class="mx-3 text-danger">{{ item.id }}</strong>
            </div>
          </button>
        </h2>
        <div
          :id="item.id"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingOne"
        >
          <div class="accordion-body">
            <div class="container text-start">
              <div class="row">
                <div class="col-4">
                  <img
                    :src="item.imageUrl"
                    class="img-thumbnail"
                    alt="結果圖"
                  />
                </div>
                <div class="col position-relative">
                  課程描述
                  {{ item.description }}
                  <br />
                  <button
                    @click="openModal('del',item)"
                    type="button"
                    class="btn btn-danger position-absolute bottom-0 start-0"
                    data-bs-toggle="modal"
                    data-bs-target="#DeleteModal"
                  >
                    刪除
                  </button>
                  <button
                    @click="openModal ('edit',item)"
                    type="button"
                    class="btn btn-primary position-absolute bottom-0 end-0"
                  >
                    編輯
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Delete-modal
    :courseName="temp.title"
    :courseId="temp.id"
    ref="DeleteModal"
  ></Delete-modal>
  <div
    class="modal fade"
    id="Modal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
  <CreateEditModal
     :course-temp="temp"
     :status="this.isNew"
     ref="CreateEditModal"
  ></CreateEditModal>
</div>
</template>

<script>
import { Modal } from 'bootstrap'
import DeleteModal from '@/components/DeleteModal.vue'
import CreateEditModal from '@/components/CreateEditModal.vue'
export default {
  components: { DeleteModal, CreateEditModal },
  data () {
    return {
      token: process.env.VUE_APP_TOKEN,
      modal: null,
      temp: {
        title: '',
        category: 'course',
        origin_price: 100,
        price: 1000,
        unit: '1',
        description: '',
        content: '',
        is_enabled: 1,
        imageUrl: '',
        imagesUrl: []
      },
      data: [],
      isNew: 1
    }
  },
  methods: {
    getData () {
      this.$http(
        `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products/all`
      )
        .then((res) => {
          this.data = res.data.products
          console.log(this.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    openModal (status, item) {
      if (status === 'new') {
        // this.temp = []
        this.isNew = 1
        this.Modal.show()
      } else if (status === 'edit') {
        this.temp = { ...item }
        this.isNew = 0
        this.Modal.show()
      } else {
        this.temp = { ...item }
        this.DeleteModal.show()
      }
    }
  },
  mounted () {
    this.axios.defaults.headers.common.Authorization = this.token
    this.Modal = new Modal(
      document.getElementById('Modal'),
      {
        keyboard: false
      }
    )
    this.DeleteModal = new Modal(
      document.getElementById('DeleteModal'),
      {
        keyboard: false
      }
    )
    this.getData()
  }
}
</script>
