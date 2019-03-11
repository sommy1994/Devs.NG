<template>
  <div class="row d-flex align-items-center" id="mobile">
    <div class="col-md-6 pl-5">
      <h3 class="text-lead">Community of Nigerian <br> Software Developers</h3>
      <p class="text-muted">A community dedicated to addressing a multitude of complex problems surrounding Nigeria</p>
      <button class="btn btn-sm shadow">Join the conversations</button>
    </div>
    <div class="col-md-6 pl-5">
      <img class="img-fluid pl-5" src="../../assets/header_body_img.svg" alt="DevsNG-SVG">
    </div>
  </div>
</template>

<style scoped>
.row {
  height: 90% !important;
}

h3 {
  font-weight: 900;
  line-height: 1.3;
  font-size: 36px;
}

p {
  font-size: 16px;
}

.btn {
  font-family: 'Montserrat', sans-serif;
  background-color: #12AD82;
  font-size: 14px;
  font-weight: bold;
  color: #FFF;
  padding: 8px 30px;
}

/* Low Resolution Devices => Mobile and Tablets */
@media (min-width: 481px) and (max-width: 767px) {

  #row {
    padding-top: 100px;
  }

}
</style>
