import { createWebHistory, createRouter } from "vue-router";
import home from "./pages/home.vue";
import consulting from "./pages/consulting.vue";
import cloud from "./pages/cloud.vue";
import joinus from "./pages/joinus.vue";
import sucess from "./pages/sucess.vue";
import training from "./pages/training.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
      path: '/consulting',
      name: "consulting",
      component: consulting
  },
  {
      path: '/cloud',
      name: "cloud",
      component: cloud
  },
  {
      path: '/joinus',
      name: "joinus",
      component: joinus
  },
  {
      path: '/sucess',
      name: "sucess",
      component: sucess
  },
  {
    path: '/training',
    name: "training",
    component: training
},


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;