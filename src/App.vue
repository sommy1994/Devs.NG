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
  },
  created() {
      $(function () {
        $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
    });
  }
};
</script>

<style>
  /* Import bootstrap here for global styling of all the components */
  @import url("../node_modules/bootstrap/dist/css/bootstrap.min.css");
  @import url('https://fonts.googleapis.com/css?family=PT+Sans|Roboto:700');
  
@font-face {
font-family: "San Francisco Display Medium";
font-style: normal;
font-weight: 400;
src: url(https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-medium-webfont.eot?#iefix) format("embedded-opentype"), url(https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-medium-webfont.woff2) format("woff2"), url(https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-medium-webfont.woff) format("woff"), url(https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-medium-webfont.ttf) format("truetype")
}

.fixed-top.scrolled {
  background-color: #fff !important;
  transition: background-color 200ms linear;
}

[class*="entypo-"]:before {
  font-family: 'entypo', sans-serif;
  color: red;
}
  
body {
  font-family: 'Rubik', sans-serif;
}

h1,h2,h3,h4,h5,h6 {
  font-family: 'Rubik', sans-serif;
}

#header {
  background-color: #F8FCFF;
  height: 550px !important;
}

#header .container {
  padding: 10px 0 10px 0;
}

#map {
  background-color: #F6FFF9;
}

#map .container {
  padding-left: 0 !important;
  margin-left: 0 !important;
}

#conversations {
  background: url("./assets/images/code-bg.png") no-repeat center;
  background-size: cover;
  height: 280px;
}

#footer {
  height: 120px;
  background-color: #22262B;
  color: white;
}

button:hover {
  color: white !important;
}

.text-silenced {
color: #878F97;
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
