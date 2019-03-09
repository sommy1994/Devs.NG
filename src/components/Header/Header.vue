<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <img src="../../assets/logo.svg" alt="DevsNG">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <!-- Commented out to avoid errors until there are components to use -->

            <!-- <router-link tag="li" to="#" class="nav-item">
              <a class="nav-link">Link 1</a>
            </router-link>
            <router-link tag="li" to="#" class="nav-item">
              <a class="nav-link">Link 2</a>
            </router-link>
            <router-link tag="li" to="#" class="nav-item">
              <a class="nav-link">Link 3</a>
            </router-link> -->

            <li class="nav-item">
              <a href="#" class="nav-link">Link 1</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Link 2</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Link 3</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.navbar {
  background-color: transparent !important;
}
li {
  font-family: "San Francisco Display Medium";
  color: #4a5158;
  font-weight: 600;
}
</style>