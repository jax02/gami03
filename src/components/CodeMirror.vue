<template>
<div class="container-fluid bg-secondary bg-gradient">
    <div class="container pt-3 pb-3">
    <div class="row">
      <div class="col-6">
        <div class="row">
          <div class="col text-start text-white fs-3"><p>javascript : </p></div>
          <div class="col text-end"><button type="button" class="btn btn-lg btn-secondary"  @click="refresh">></button></div>
        </div>
        <textarea id="editor" v-model="this.code"></textarea>
      </div>
      <div class="col-6 overflow-hidden">
        <div class="row">
          <div class="col">
            <div class="col text-start text-white fs-3"><p>效果顯示 ：</p></div>
          </div>
        </div>
        <iframe id="preview" class=" h-100 w-100 bg-light"></iframe>
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
      code: `var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();`,
      editor: null,
      preview: null,
      htmlCode: '',
      jsCode: ''
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
      this.htmlCode =
        '<canvas id="myCanvas"></canvas>'
      this.jsCode = '<scri' + 'pt>' + `${this.code}` + '</scri' + 'pt>'
      console.log(this.htmlCode, this.jsCode)
      document.querySelector('#preview').contentWindow.document.open()
      document
        .querySelector('#preview')
        .contentWindow.document.write(this.htmlCode + this.jsCode)
      document.querySelector('#preview').contentWindow.document.close()
      this.jsCode = ' '
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
