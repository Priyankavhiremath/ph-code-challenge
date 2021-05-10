<template>
  <div class="about">
    <Section4 />
    <Section5 />
  </div>
</template>

<script>
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";

export default {
  name: "Header",
  components: { Section4, Section5 },
};
</script>
