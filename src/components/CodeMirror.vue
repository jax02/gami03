<template>
    <textarea id="editor" v-model="this.content"></textarea>
</template>
<script>
import * as CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/mode/javascript/javascript.js'
export default {
  data () {
    return {
      content: 'let a == 0;'
    }
  },
  mounted () {
    CodeMirror.fromTextArea(document.getElementById('editor'), {
      lineNumbers: 'true',
      theme: 'dracula',
      mode: 'javascript'
    })
  }
}
</script>
