<template>
<!--  progress console會報錯 -->
<div class="container">
    <div class="row">
        <div class="col">
            <p class="text-start text-dark fs-3 mb-0">
          目前進度 ：{{saveId.length}}/3
        </p>
        <div class="progress mb-3">
          <div
            class="progress-bar progress-bar-striped"
            role="progressbar"
            :style="{width:`${saveId.length/3*100}%`}"
            aria-valuenow="10"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        </div>
    </div>
</div>
  <nav class="d-flex justify-content-end" style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" v-for="(item,index) in pages" :key="item.id" aria-current="page"><span class="badge rounded-pill bg-primary"><router-link class="text-white text-decoration-none " :to="`/course/${item.id}`" @click="$emit('get-course')">{{
          index + 1
        }}</router-link></span></li>
  </ol>
</nav>
</template>
<script>
export default {
  props: ['pages'],
  data () {
    return {
      saveId: JSON.parse(localStorage.getItem('saveId')) || []
    }
  },
  methods: {
    addFinish () {
      console.log('123')
    }
  }
}
</script>
<style>
.breadcrumb-item{
    font-size: 1.2rem;
}
.breadcrumb-item .active{
    font-size: 1.4rem;
}
</style>
