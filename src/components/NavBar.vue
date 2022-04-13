<template>
  <nav class="sticky-top shadow p-3  bg-body rounded navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">gamiSDL</a>
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
          <li class="nav-item pe-2">
            <router-link class="text-decoration-none" to="/">root</router-link>
          </li>
          <li class="nav-item pe-2">
            <router-link class="text-decoration-none" to="/Home">首頁</router-link>
          </li>
          <li class="nav-item pe-2 ">
           <router-link class="text-decoration-none" to="/courses">所有課程</router-link>
          </li>
          <li class="nav-item pe-2">
            <router-link class="text-decoration-none" to="/test">測試</router-link>
          </li>
          <li class="nav-item pe-2 ">
           <router-link class="text-decoration-none" to="/admin">後台</router-link>
          </li>
          <li class="nav-item pe-2 ">
           <router-link class="text-decoration-none" to="/user">使用者</router-link>
          </li>
          <li class="nav-item pe-2 ">
           <router-link class="text-decoration-none" to="/dashboardLogin">後台登入</router-link>
          </li>
        </ul>
      </div>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item pe-2">
            <router-link class="text-decoration-none btn btn-outline-primary" to="/login"><i class="fa-solid fa-user me-2"></i>登入</router-link>
          </li>
          <!-- <li class="nav-item pe-2">
           <router-link class="text-decoration-none btn btn-primary" to="/admin">註冊</router-link>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>
