<template>
  <div class="about">
    <Section3 />
    <Section4 :team="team" />
  </div>
</template>

<script>
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";

export default {
  name: "Header",
  components: { Section3, Section4 },
  props: {
    team: Array,
  },
};
</script>
