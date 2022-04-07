<template>
<scheduleChart></scheduleChart>
<br>
<PlanetChart></PlanetChart>
<swiper
    :slides-per-view="1"
    :space-between="10"
  >
    <swiper-slide v-for="item in data" :key="item.id">
      <img :src="item.imageUrl" alt="" class="img-fluid">
    </swiper-slide>
  </swiper>
<br>
<div class="banner1"></div>
<br>
<div>
  <div class="banner bg-dark">
    <div class="container">
      <div class="row ">
        <div class="col ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt qui nulla, enim officiis odio quo officia ipsum blanditiis libero temporibus laborum perspiciatis veritatis saepe aspernatur mollitia, ad rerum consequatur. Eaque!</div>
        <div class="col">1</div>
      </div>
    </div>
  </div>
</div>
<section>
  <div class="bg-white">
    <div class="container">
      <div class="row">
        <div class="col-7 d-flex align-items-center">
          <div>
            <h3 class="text-start">自我導向學習定義：</h3>
            <br>
            <h4 class="text-start">“個體在有他人或無他人幫助的情形下，由自己發動，而後自己診斷學習需要、形成學習目標、尋找學習所需要的人力及物力資源、選擇及實施適當的學習策略，以及評量學習結果的歷程“</h4>
            <p class="text-end"><span>美國成人教育之父</span> Malcolm Knowles（1913-1997）</p>
          </div>
          </div>
        <div class="col-5"><img src="https://i.imgur.com/KZkwoWP.png" alt=""></div>
      </div>
    </div>
  </div>
  <div class="btn btn-primary">123</div>
</section>
<div id="accordionExample">
  <div class="accordion-item pb-2">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">提示區</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">小提示</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p class="text-start">相關指令：
      <span class="badge rounded-pill bg-success">html</span>
      </p>
    <p class="text-start">片段碼：</p>
    <pre class="text-start"><code>ctx.beginPath();
ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
ctx.moveTo(110, 75);
ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
ctx.moveTo(65, 65);
ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
ctx.moveTo(95, 65);
ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
ctx.closePath()
ctx.stroke();</code></pre>
  </div>
</div>
<br>
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">提示區</button>

<div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasTopLabel">小提示</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p class="text-start">相關指令：</p>
    <p class="text-start">片段碼：</p>
    <pre class="text-start"><code>ctx.beginPath();
ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
ctx.moveTo(110, 75);
ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
ctx.moveTo(65, 65);
ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
ctx.moveTo(95, 65);
ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
ctx.closePath()
ctx.stroke();</code></pre>
  </div>
</div>
<br>
  <div class="container-fluid bg-secondary bg-gradient">
    <div class="container pt-3 pb-2">
    <div class="row">
      <div class="col-6">
        <div class="row">
          <div class="col text-start text-white fs-3"><p>javascript : </p></div>
          <div class="col text-end"><button type="button" class="btn btn-lg btn-secondary">></button></div>
        </div>
        <textarea v-model="this.content" id="editor"></textarea>
      </div>
      <div class="col-6 overflow-hidden">
        <div class="row">
          <div class="col">
            <div class="col text-start text-white fs-3"><p>效果顯示 ：</p></div>
          </div>
        </div>
        <iframe id="preview" class="h-100 w-100 bg-dark"></iframe>
        </div>
      </div>
    </div>
  </div>

  <br />
  <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      :true-value="1"
      :false-value="0"
      id="is_enable"
      v-model="test"
    />
    <label class="form-check-label" for="is_enable"> 是否啟用 </label>
  </div>
  <br />
  <div class="card" style="width: 18rem">
    <img src="#" class="card-img-top" alt="課程圖" />
    <div class="card-body">
      <p class="card-text">
        <span class="d-block text-start">標題</span>
        <span class="badge mx-2 rounded-pill bg-secondary">Secondary</span>
        <span class="badge rounded-pill bg-secondary">Secondary</span>
      </p>
      <button type="button" class="btn btn-outline-primary">開始上課</button>
    </div>
  </div>
  <br />
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#Modal"
  >
    新增
  </button>
  <div
    class="modal fade"
    id="Modal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">新增課程</h5>
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
          <button type="button" class="btn btn-danger">確認新增</button>
        </div>
      </div>
    </div>
  </div>
  <br />
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <br />
  <div class="container">
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse1"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            第二章，認識xxx
          </button>
        </h2>
        <div
          id="collapse1"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingOne"
        >
          <div class="accordion-body">
            <div class="container text-start">
              <div class="row">
                <div class="col-4">
                  <img
                    src="https://images.unsplash.com/photo-1647440076310-0094c15fe023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                    class="img-thumbnail"
                    alt="..."
                  />
                </div>
                <div class="col position-relative">
                  課程描述
                  <br />
                  <button
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
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            第二章，認識xxx
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingOne"
        >
          <div class="accordion-body">
            <div class="container text-start">
              <div class="row">
                <div class="col-4">
                  <img
                    src="https://images.unsplash.com/photo-1647440076310-0094c15fe023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                    class="img-thumbnail"
                    alt="..."
                  />
                </div>
                <div class="col position-relative">
                  課程描述
                  <br />
                  <button
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
  <br />
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#DeleteModal"
  >
    刪除
  </button>

  <!-- DeleteModal -->
  <div
    class="modal fade"
    id="DeleteModal"
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
          是否刪除課程
          <br />
          <strong>XXxxxxxxxxx</strong>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary">確認刪除</button>
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
            返回
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import * as CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/mode/javascript/javascript.js'
import PlanetChart from '@/components/PlanetChart.vue'
import scheduleChart from '@/components/scheduleChart.vue'
export default {
  components: {
    Swiper,
    SwiperSlide,
    PlanetChart,
    scheduleChart
  },
  data () {
    return {
      data: [],
      test: '',
      // 用var才可以重複執行，let、const都不行
      content: `var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 300);
ctx.stroke();`,
      editor: null
    }
  },
  methods: {
    getValue () {
      this.test = this.editor.getValue()
      const htmlCode = '<canvas id="myCanvas" height="500"></canvas>'
      const jsCode = '<scri' + 'pt>' + `${this.test}` + '</scri' + 'pt>'
      this.preview.contentWindow.document.open()
      this.preview.contentWindow.document.write(htmlCode + jsCode)
      this.preview.contentWindow.document.close()
    },
    getData () {
      this.$http.get(
        `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      )
        .then((res) => {
          this.data = res.data.products
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getData()
    this.preview = document.querySelector('#preview')
    this.editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
      lineNumbers: 'true',
      theme: 'dracula',
      mode: 'javascript'
    })
  }
}
</script>
<style>
.banner{
  background: linear-gradient(115deg,#7bf 50%,transparent 50%) center center /100% 100%;
}
.banner1{
  height: 100vh;
  background: center no-repeat url('https://images.unsplash.com/photo-1529336953128-a85760f58cb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80');
  background-size:cover;
}
</style>
