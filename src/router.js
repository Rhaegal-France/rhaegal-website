import { createWebHistory, createRouter } from "vue-router";
import home from "./pages/home.vue";
import consulting from "./pages/consulting.vue";


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
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;