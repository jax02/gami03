<template>
    <div class="bg-light1">
    <div class="container p-5 text-start">
      <div class="row">
        <div class="col pe-5 d-flex align-items-center">
          <div>
            <h1>如何使用</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
              eligendi at quo porro dignissimos voluptas enim vero hic,
              aspernatur voluptates illo quam? Ea ipsam voluptas in nihil.
              Cumque commodi exercitationem accusantium, sequi ipsam quisquam!
              Adipisci maiores reprehenderit molestias quidem nobis, quae
              exercitationem tenetur eum consectetur qui, sed autem cum aliquam.
            </p>
          </div>
        </div>
        <div class="col">
          <div id="accordionExample">
            <div class="accordion-item py-2 py-2 my-4 shadow rounded-3">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <i
                    class="fa-solid fa-arrow-right-to-bracket fa-xl me-3 p-3 border border-lg border-secondary rounded-circle"
                  ></i>
                  登入、建立帳號
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item py-2 my-4 shadow rounded-3">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <i
                    class="fa-solid fa-hand-pointer fa-xl me-4 p-3 border border-lg border-secondary rounded-circle"
                  ></i>
                  選擇課程
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item py-2 my-4 shadow rounded-3">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#pra"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <i
                    class="fa-solid fa-pen-to-square fa-xl me-4 p-3 border border-lg border-secondary rounded-circle"
                  ></i>
                  開始練習
                </button>
              </h2>
              <div
                id="pra"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.bg-light1 {
  background: #f5f7fc;
}
.accordion-button:not(.collapsed) {
  background: #fff;
  color:black;
}
.accordion-button:focus {
    color:black;
    box-shadow: none;
    border-color: rgba(0,0,0,.125);
}
.accordion-body:focus {
    color:black;
    box-shadow: none;
}
</style>
