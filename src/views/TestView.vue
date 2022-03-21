<template>
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#Modal"
  >
    新增
  </button>
  <div
    class="modal fade"
    id="Modal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">新增課程</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-start">
          <div class="row">
            <div class="col">
              <img class="img-fluid" src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amF2YXNjcmlwdHxlbnwwfDF8MHx8&auto=format&fit=crop&w=800&q=60" alt="">
            </div>
            <div class="col">
                <form>
            <div class="mb-3 ">
              <label for="courseTitle" class="form-label"
                >課程標題</label
              >
              <input
                type="text"
                class="form-control"
                id="courseTitle"
                placeholder="請輸入課程標題"
              />
            </div>
            <div class="mb-3">
              <label for="courseDescription" class="form-label"
                >課程描述</label
              >
              <textarea
                type="text"
                class="form-control"
                id="courseDescription"
                placeholder="請輸入課程描述"
              />
            </div>
            <div class="mb-3">
              <label for="courseImageUrl" class="form-label"
                >效果預覽圖</label
              >
              <input
                type="text"
                class="form-control"
                id="courseImageUrl"
                placeholder="請輸入課程效果預覽圖"
              />
            </div>
            <div class="mb-3">
              <label for="courseKeywords" class="form-label"
                >課程關鍵字</label
              >
              <input
                type="text"
                class="form-control"
                id="courseKeywords"
                placeholder="請輸入課程關鍵字"
              />
            </div>
          </form>
            </div>
          </div>

        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-danger">確認新增</button>
        </div>
      </div>
    </div>
  </div>
  <br />
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
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
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <br />
  <div class="container">
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse1"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            第二章，認識xxx
          </button>
        </h2>
        <div
          id="collapse1"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingOne"
        >
          <div class="accordion-body">
            <div class="container text-start">
              <div class="row">
                <div class="col-4">
                  <img
                    src="https://images.unsplash.com/photo-1647440076310-0094c15fe023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                    class="img-thumbnail"
                    alt="..."
                  />
                </div>
                <div class="col position-relative">
                  課程描述
                  <br />
                  <button
                    type="button"
                    class="btn btn-primary position-absolute bottom-0 end-0"
                  >
                    編輯
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            第二章，認識xxx
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingOne"
        >
          <div class="accordion-body">
            <div class="container text-start">
              <div class="row">
                <div class="col-4">
                  <img
                    src="https://images.unsplash.com/photo-1647440076310-0094c15fe023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                    class="img-thumbnail"
                    alt="..."
                  />
                </div>
                <div class="col position-relative">
                  課程描述
                  <br />
                  <button
                    type="button"
                    class="btn btn-primary position-absolute bottom-0 end-0"
                  >
                    編輯
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#DeleteModal"
  >
    刪除
  </button>

  <!-- DeleteModal -->
  <div
    class="modal fade"
    id="DeleteModal"
    tabindex="-1"
    aria-labelledby="DeleteModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-danger">
          <h5 class="modal-title text-light" id="DeleteModalLabel">刪除課程</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-start">
          是否刪除課程
          <br />
          <strong>XXxxxxxxxxx</strong>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary">確認刪除</button>
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
            返回
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
