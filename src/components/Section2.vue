<template>
  <section class="probootstrap-section">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-4">
          <h2>Our Services.</h2>
        </div>
        <div class="col-md-8">
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
      </div>
      <!-- ==================Dynamically populating Services========================== -->
      <div class="row">
        <div
          class="col-lg-4 col-md-6"
          :key="service.id"
          v-for="service in services"
        >
          <div
            class="media d-block mb-4 text-left probootstrap-media p-md-5 p-4"
          >
            <div class="probootstrap-icon mb-3">
              <span :class="[service.icon]" class="display-4"></span>
            </div>
            <div class="media-body">
              <h5 class="mt-0">{{ service.title }}</h5>
              <p>
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Section2",
  props: {
    services: Array,
  },
  components: {},
};
</script>
