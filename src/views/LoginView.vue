<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col text-start">
        <div class="mb-3">
          <label for="email" class="form-label">輸入帳號</label>
          <input
            v-model="this.email"
            type="email"
            class="form-control"
            id="email"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">輸入密碼</label>
          <input
            v-model="this.password"
            type="password"
            class="form-control"
            id="password"
            placeholder="name@example.com"
          />
        </div>
        <button type="button" class="btn btn-primary" @click="login">登入</button>
        <button type="button" class="btn btn-primary mx-3" @click="register">註冊</button>
        <button type="button" class="btn btn-primary mx-3" @click="googleLogin">google 登入</button>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>
<script>
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup
} from 'firebase/auth'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      createUserWithEmailAndPassword(getAuth(), this.email, this.password).then(res => {
        console.log('sucess')
      }).catch(err => {
        console.log(err.code)
      })
    },
    login () {
      signInWithEmailAndPassword(getAuth(), this.email, this.password).then(res => {
        console.log('sucess')
      }).catch(err => {
        console.log(err.code)
      })
    },
    googleLogin () {
      const provider = new GoogleAuthProvider()
      signInWithPopup(getAuth(), provider).then(res => {
        console.log('google login sucess', res.user.displayName)
      }).catch(err => {
        console.log(err.code)
      })
    }
  }
}
</script>
