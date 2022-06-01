<template>
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
  data () {
    return {
      QuizData: [],
      ansData: [],
      userData: []
    }
  },
  props: ['courseCode'],
  watch: {
    courseCode () {
      this.code = this.courseCode
      this.editor.setValue(this.code)
      this.init()
    }
  },
  methods: {
    init () {
      this.htmlCode = '<canvas id="myCanvas"></canvas>'
      this.js = '`<scri' + 'pt>' + `var canvas = document.getElementById("myCanvas"); 
var ctx = canvas.getContext("2d"); 
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight; 
${this.courseCode}
var QuizData = ctx.getImageData(0,0,canvas.width,canvas.height);
ctx.clearRect(0,0,canvas.width,canvas.height);
${this.courseCode}
//ctx.putImageData(QuizData,0,0)
var ansData = ctx.getImageData(0,0,canvas.width,canvas.height);` +
'</scri' + 'pt>`'
      const doc = document.querySelector('#preview').contentWindow.document
      const ifr = document.querySelector('#preview').contentWindow
      doc.open()
      doc.write(this.htmlCode + this.js)
      this.ansData = ifr.ansData.data
      this.QuizData = ifr.QuizData.data
      let totalPixels = 0
      let imageDiff = 0
      for (let i = 0; i < this.ansData.length; i++) {
        if (this.ansData[i] !== this.QuizData[i]) {
          imageDiff++
        }
      }
      console.log(imageDiff)
      localStorage.setItem('imageDiff', imageDiff)
      //   alert(imageDiff)
      this.ansData.forEach(item => {
        if (item !== 0) {
          totalPixels++
        }
      })
      localStorage.setItem('totalPixels', totalPixels)
    //   alert(totalPixels)
    },
    refresh () {
      this.init()
      const doc = document.querySelector('#preview').contentWindow.document
      this.code = this.editor.getValue()
      this.htmlCode = '<canvas id="myCanvas"></canvas>'
      this.jsCode = '<scri' + 'pt>' + `${this.code} 
      var userData = ctx.getImageData(0,0,canvas.width,canvas.height);` + '</scri' + 'pt>'
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
      const imageDiff = parseInt(localStorage.getItem('imageDiff'))
      const totalPixels = parseInt(localStorage.getItem('totalPixels'))
      let secondTotalPixels = 0
      let secondImageDiff = 0
      //   console.log(imageDiff, totalPixels)
      this.userData.forEach(item => {
        if (item !== 0) {
          secondTotalPixels++
        }
      })
      //   alert(secondTotalPixels)
      //   for (let i = 0; i < this.ansData.length; i++) {
      //     if (this.ansData[i] !== this.userData[i]) {
      //       secondImageDiff++
      //     }
      //   }
      for (let i = 0; i < this.userData.length; i++) {
        if (this.QuizData[i] !== this.userData[i]) {
          secondImageDiff++
        }
      }
      //   if (secondImageDiff > imageDiff) {
      //     alert('try again')
      //   } else {
      //     alert('good')
      //   }
      //   console.log(this.ansData.length, this.userData.length)
      const distanceSquare = (imageDiff - secondImageDiff) * (imageDiff - secondImageDiff) + (totalPixels - secondTotalPixels) * (totalPixels - secondTotalPixels)
      console.log(distanceSquare, secondImageDiff, imageDiff)
      if (distanceSquare < 20) {
        alert('good')
      } else {
        alert('try again')
      }
    }
  },

  mounted () {
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
