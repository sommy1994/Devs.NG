<template>
  <div id="app">

    <section id="header">
      <div class="container h-100">
        <nav-bar />
        <header-body />
      </div>
    </section>

    <section id="drive" class="py-5">
      <div class="container">
        <drive-body />
      </div>
    </section>

    <section id="map" class="py-5">
      <div class="container">
        <map-body />
      </div>
    </section>

    <section id="contributors" class="py-5">
      <div class="container">
        <contributors-body />
      </div>
    </section>

    <section id="conversations">
      <div class="container h-100">
        <conversations-body />
      </div>
    </section>

    <section id="footer">
      <footer-body />
    </section>
  </div>
</template>

<script>
import NavBar from "./components/Header/Header.vue";
import HeaderBody from "./components/Header/HeaderBody.vue";
import DriveBody from "./components/Drive.vue";
import MapBody from "./components/Map.vue";
import ContributorsBody from "./components/Contributors.vue";
import ConversationsBody from "./components/Conversations.vue";
import FooterBody from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    NavBar,
    HeaderBody,
    DriveBody,
    MapBody,
    ContributorsBody,
    ConversationsBody,
    FooterBody
  }
};
</script>

<style>
  /* Import bootstrap here for global styling of all the components */
  @import url("../node_modules/bootstrap/dist/css/bootstrap.min.css");
  @import url('https://fonts.googleapis.com/css?family=PT+Sans|Roboto:700');
  
  body{
    font-family: 'PT Sans', sans-serif;
  }
  #header{
    background-color: #F8FCFF;
    height: auto;
  }
  #header .container{
    padding-top: 20px;
  }
  #map{
    background-color: #F6FFF9;
  }
  #map .container{
    padding-left: 0 !important;
    margin-left: 0 !important;
  }
  #conversations{
    background: url("./assets/images/code-bg.png") no-repeat center;
    background-size: 100%;
    height: 280px;
  }
  #footer{
    height: 120px;
    background-color: #22262B;
    color: white;
  }
  button:hover{
    color: white !important;
  }

@media (min-width: 768px) {
    #header {
      height: 70vh !important;
    }
  }

  @media (min-width: 1200px) {
    #header {
      height: 90vh !important;
    }
  }


</style>
