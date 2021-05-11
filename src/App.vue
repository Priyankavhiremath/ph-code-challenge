<template>
  <Header />
  <router-view :services="services" :team="team" />
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
  data() {
    return {
      services: [],
      team: [],
    };
  },
  methods: {
    async fetchServices() {
      const res = await fetch("http://localhost:5000/services");

      const data = await res.json();

      return data;
    },

    async fetchteam() {
      const res = await fetch("http://localhost:5000/team");

      const data = await res.json();

      return data;
    },
  },

  async created() {
    this.team = await this.fetchteam();
    this.services = await this.fetchServices();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Work+Sans");
@import "./assets/css/bootstrap.min.css";
@import "./assets/css/open-iconic-bootstrap.min.css";
@import "./assets/css/icomoon.css";
@import "./assets/css/style.css";
</style>
