<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col text-start">
        <div class="mb-3">
          <label for="email" class="form-label">帳號</label>
          <input
            v-model="this.email"
            type="email"
            class="form-control"
            id="email"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">密碼</label>
          <input
            v-model="this.password"
            type="password"
            class="form-control"
            id="password"
            placeholder="請輸入密碼"
          />
        </div>
        <button type="button" class="btn btn-primary" @click="login">
          登入
        </button>
        <button type="button" class="btn btn-primary mx-3" @click="register">
          註冊
        </button>
        <button type="button" class="btn btn-primary mx-3" @click="googleLogin">
          google 登入
        </button>
        <button type="button" class="btn btn-primary mx-3" @click="logout">
          登出
        </button>
      </div>
      <div class="col"></div>
    </div>
    <br />

    <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
      <div
        id="loginToast"
        class="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="toast-header">
          <img src="" class="rounded me-2" alt="..." />
          <strong class="me-auto">登入資訊</strong>
          <small>`${this.sec}` sec ago</small>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div class="toast-body">成功登入囉</div>
      </div>
    </div>
    <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
      <div
        id="logoutToast"
        class="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="toast-header">
          <img src="" class="rounded me-2" alt="..." />
          <strong class="me-auto">登出資訊</strong>
          <small>`${this.sec}` sec ago</small>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div class="toast-body">帳號登出囉</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'bootstrap'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from 'firebase/auth'
import { getDatabase, ref, set } from 'firebase/database'
export default {
  data () {
    return {
      id: 'test',
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      createUserWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((res) => {
          console.log('sucess')
        })
        .catch((err) => {
          console.log(err.code)
        })
    },
    login () {
      signInWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((res) => {
          console.log('sucess')
          this.toastLogin()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    logout () {
      signOut(getAuth())
        .then((res) => {
          console.log('sucess')
          this.toastLogout()
        })
        .catch((err) => {
          console.log(err.code)
        })
    },
    googleLogin () {
      const provider = new GoogleAuthProvider()
      signInWithPopup(getAuth(), provider)
        .then((res) => {
          console.log('google login sucess', res.user)
          this.toastLogin()
          this.createUser(res.user.uid, res.user.displayName)
          // this.getProfile()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    toastLogin () {
      const loginToast = document.getElementById('loginToast')
      const loginBsToast = new Toast(loginToast)
      loginBsToast.show()
    },
    toastLogout () {
      const logoutToast = document.getElementById('logoutToast')
      const logoutBsToast = new Toast(logoutToast)
      logoutBsToast.show()
    },
    createUser (userId, name) {
      const userData = {
        uid: userId,
        username: name,
        completeSchedule: 0,
        finish: ['test'],
        undone: ['test']
      }
      const db = getDatabase()
      const reference = ref(db, 'users/' + userId)
      set(reference, {
        userData
      })
    },
    mounted () {
    }
  }
}
</script>
