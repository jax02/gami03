<template>
  <div class="container bgLogin">
    <div class="row h-100 d-flex justify-content-center align-items-center">
      <div
        class="btnLogin col-10 col-lg-4 p-3 mb-2 bg-secondary text-white rounded-2"
      >
        <div class="mb-3 text-start">
          <label for="userMail" class="form-label">Email address :</label>
          <input
            v-model="this.user.username"
            type="email"
            class="form-control"
            id="userMail"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3 text-start">
          <label for="password" class="form-label">Password :</label>
          <input
            v-model="this.user.password"
            type="password"
            class="form-control"
            id="passowrd"
            rows="3"
          />
        </div>
        <div class="mb-3 mt-3">
          <button type="button" class="btnLogin2 me-5 btn btn-light">
            回到首頁
          </button>
          <button type="button" class="btnLogin2 btn btn-light" @click="login">
            管理員登入
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.bgLogin {
  height: 80vh;
  background-image: linear-gradient(-60deg, rgb(19, 78, 70), #a0a5a5);
  background-size: cover;
}
.btnLogin {
  box-shadow: 15px 15px rgb(48, 61, 61);
}
.btnLogin2 {
  box-shadow: 7px 7px rgb(48, 61, 61);
}
.btnLogin2:hover {
  box-shadow: 0px 0px;
}
</style>
<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const api = `${process.env.VUE_APP_API}/admin/signin`
      this.$http.post(api, this.user).then(res => {
        // console.log(res)
        const { token, expired } = res.data
        document.cookie = `hexToken = ${token};expiress = ${new Date(expired)}`
        this.$router.push('/admin')
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
