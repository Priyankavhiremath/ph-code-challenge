<template>
  <div class="Home">
    <Section1 />
    <Section2 :services="services" />
  </div>
</template>

<script>
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";

export default {
  name: "Home",
  components: { Section1, Section2 },
  props: {
    services: Array,
  },
};
</script>
