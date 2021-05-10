<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Work+Sans");
@import "./assets/css/bootstrap.min.css";
@import "./assets/css/open-iconic-bootstrap.min.css";
/* @import "./assets/css/owl.carousel.min.css";
@import "./assets/css/owl.theme.default.min.css"; */
@import "./assets/css/icomoon.css";
@import "./assets/css/style.css";
</style>
