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
                class="mx-1 btn btn-lg btn-secondary"
                @click="check"
              >
                check
              </button>
              <button
                type="button"
                class="mx-1 btn btn-lg btn-secondary"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                !
              </button>
              <button
                type="button"
                class="mx-1 btn btn-lg btn-secondary"
                @click="refresh"
              >
                >
              </button>
              <button
                type="button"
                class="mx-1 btn btn-lg btn-secondary"
                @click="save"
              >
                存檔
              </button>
            </div>
          </div>
          <textarea id="editor"></textarea>
        </div>
        <div class="col-12 col-lg-6 overflow-hidden">
          <div class="row">
            <div class="col">
              <div class="col text-start text-white fs-3">
                <p>效果顯示 ：{{}}</p>
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
  props: ['courseCode'],
  watch: {
    courseCode () {
      this.code = this.courseCode
      this.editor.setValue(this.code)
    }
  },
  data () {
    return {
      images: '',
      doc: '',
      ansNotZero: [],
      userData: [],
      ansData: [],
      imageQuiz: [],
      code: '',
      js: '',
      saveId: JSON.parse(localStorage.getItem('saveId')) || []
    }
  },
  methods: {
    canvasInit () {
      this.htmlCode = '<canvas id="myCanvas"></canvas>'
      this.js = '`<scri' + 'pt>' + `var canvas = document.getElementById("myCanvas"); 
var ctx = canvas.getContext("2d"); 
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight; 
${this.code}
var ansData = ctx.getImageData(0,0,canvas.width,canvas.height);
var imageQuiz = ctx.getImageData(0, 0, canvas.width,canvas.height);` +
'</scri' + 'pt>`'
      const doc = document.querySelector('#preview').contentWindow.document
      const ifr = document.querySelector('#preview').contentWindow
      doc.open()
      doc.write(this.htmlCode + this.js)
      this.ansData = ifr.ansData.data
      let totalPixels = 0
      let imageDiff = 0
      this.imageQuiz.forEach(item => {
        this.ansData.forEach(ansItem => {
          if (item !== ansItem) {
            imageDiff++
          }
        })
      })
      localStorage.setItem('imageDiff', imageDiff)
      // alert(imageDiff)
      this.ansData.forEach(item => {
        if (item !== 0) {
          totalPixels++
        }
      })
      localStorage.setItem('totalPixels', totalPixels)
      // alert(totalPixels)
    },
    refresh () {
      this.canvasInit()
      const doc = document.querySelector('#preview').contentWindow.document
      this.code = this.editor.getValue()
      this.htmlCode = '<canvas id="myCanvas"></canvas>'
      this.jsCode = '<scri' + 'pt>' + `${this.code} var userData = ctx.getImageData(0,0,canvas.width,canvas.height);` + '</scri' + 'pt>'
      doc.write(this.htmlCode + this.jsCode)
      const userIfr = document.querySelector('#preview').contentWindow
      this.userData = userIfr.userData.data
      doc.close()
      this.jsCode = ' '
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
      localStorage.setItem('saveId', JSON.stringify(this.saveId))
    },
    check () {
      let ansCount = 0
      this.userData.forEach(item => {
        if (item !== 0) {
          ansCount++
        }
      })
      if (ansCount <= 660) {
        alert('一樣')
      } else {
        alert('不一樣')
        alert(ansCount)
      }
    }
  },
  mounted () {
    this.canvasInit()
    this.editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
      lineNumbers: 'true',
      theme: 'dracula',
      mode: 'javascript'
    })
  }
}
</script>
<style>
.CodeMirror {
  text-align: left !important;
}
</style>
