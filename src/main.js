import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "jquery/src/jquery.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
// import "owl.carousel/dist/owl.carousel.min.js";

// import "./assets/main";

createApp(App)
  .use(router)
  .mount("#app");
