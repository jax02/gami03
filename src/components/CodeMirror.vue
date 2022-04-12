<template>
  <!-- 側邊欄 -->
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">小提示</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <p class="text-start">
        相關指令：
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
  <!-- 側邊欄 -->
  <div class="container-fluid bg-secondary bg-gradient">
    <div class="container pt-3 pb-3">
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="row row-cols-1 row-cols-lg-2">
            <div class="col text-start text-white fs-3">
              <p>javascript :</p>
            </div>
            <div class="col text-end">
              <button
                type="button"
                class="mx-2 btn btn-lg btn-secondary"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                !
              </button>
              <button
                type="button"
                class="mx-2 btn btn-lg btn-secondary"
                @click="refresh"
              >
                >
              </button>
              <button
                type="button"
                class="mx-2 btn btn-lg btn-secondary"
                @click="save"
              >
                存檔
              </button>
            </div>
          </div>
          <textarea id="editor" v-model="this.code"></textarea>
        </div>
        <div class="col-12 col-lg-6 overflow-hidden">
          <div class="row">
            <div class="col">
              <div class="col text-start text-white fs-3">
                <p>效果顯示 ：</p>
              </div>
            </div>
          </div>
          <iframe id="preview" class="h-100 w-100 bg-light"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/mode/javascript/javascript.js'

export default {
  data () {
    return {
      test: '70',
      code: `var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// 上方為必要內容
ctx.moveTo(0, 0);
ctx.lineTo(600, 290);
ctx.stroke();`,
      editor: null,
      preview: null,
      htmlCode: '',
      jsCode: '',
      saveId: JSON.parse(localStorage.getItem('saveId')) || []
      //       content: `let canvas = document.getElementById("myCanvas");
      // let ctx = canvas.getContext("2d");
      // ctx.moveTo(0, 0);
      // ctx.lineTo(200, 100);
      // ctx.stroke();`
    }
  },
  methods: {
    changeCode () {
      this.code = this.editor.getValue()
    },
    refresh () {
      this.code = this.editor.getValue()
      this.htmlCode = '<canvas id="myCanvas"></canvas>'
      this.jsCode = '<scri' + 'pt>' + `${this.code}` + '</scri' + 'pt>'
      console.log(this.htmlCode, this.jsCode)
      document.querySelector('#preview').contentWindow.document.open()
      document
        .querySelector('#preview')
        .contentWindow.document.write(this.htmlCode + this.jsCode)
      document.querySelector('#preview').contentWindow.document.close()
      this.jsCode = ' '
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
    },
    save () {
      const { id } = this.$route.params
      const saveId = this.saveId.findIndex(item => item === id)
      // -1表示沒找到相同的
      if (saveId === -1) {
        this.saveId.push(id)
      } else {
        alert('已存在')
      }
      console.log(this.saveId)
      localStorage.setItem('saveId', JSON.stringify(this.saveId))
    }
  },
  mounted () {
    this.editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
      lineNumbers: 'true',
      theme: 'dracula',
      mode: 'javascript'
    })
    this.allData('普通')
  }
}
</script>
<style>
.CodeMirror {
  text-align: left !important;
}
</style>
