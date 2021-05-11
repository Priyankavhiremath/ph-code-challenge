<template>
  <section class="probootstrap-section">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-4">
          <!-- <h5 class="h5 probootstrap-subheading">[ Component: Section4 ]</h5> -->
          <h2 class="h1 mb-5 mt-0">The Team</h2>
        </div>
        <div class="col-md-2"></div>
        <div class="col-md-6">
          <p class="lead">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>
      <!-- ==================Dynamically populating Team members========================== -->
      <div class="row mb-5">
        <div class="col-md-12">
          <div class="container">
            <div class="row">
              <div
                class="col-md-4 item"
                :key="person.id"
                v-for="person in team"
              >
                <img
                  :src="person.picture"
                  class="img-fluid"
                  alt="Free Template by uicookies.com"
                />
                <div class="p-4 border border-top-0">
                  <h4>{{ person.names }}</h4>
                  <p>
                    {{ person.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row mb-5">
        <div class="col-md-12">
          <div class="border p-5">
            <div class="row">
              <div class="col-md-4">
                <h4>Let's Work Together. Get Started.</h4>
              </div>
              <div class="col-md-1"></div>
              <div class="col-md-7">
                <p class="mb-4">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <p>
                  <a
                    href="https://uicookies.com/"
                    target="_blank"
                    class="btn btn-primary"
                    >Get In Touch</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Section4",
  props: {
    team: Array,
  },
  components: {},
};
</script>
