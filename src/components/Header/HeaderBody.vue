<template>
  <div class="row d-flex align-items-center">
    <div class="col-md-6 pl-5">
      <h3 class="text-lead">Community of Nigerian <br> Software Developers</h3>
      <p class="text-muted">A community dedicated to addressing a multitude of complex problems surrounding Nigeria</p>
      <button class="btn btn-sm">Join the conversations</button>
    </div>
    <div class="col-md-6 pl-5 header-image">
      <img src="../../assets/header_body_img.svg" alt="Header body's image">
    </div>
  </div>
</template>

<style scoped>
.row{
  height: 90% !important;
}
h3{
  font-family: 'Roboto', serif;
  font-weight: bold;
  line-height: 1.3;
  font-size: 36px;
}
p{
  font-size: 16px;
}
.btn{
  background-color: #12AD82;
  font-size: 16px;
  color: #FFF;
  border-radius: 5px;
  padding: 10px 50px;
}

.btn:hover {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
}
.last{
  /* padding-left: 30px; */
}

.header-image {
  margin-top: 20px;
}
img {
  width: 100%;
}
</style>
