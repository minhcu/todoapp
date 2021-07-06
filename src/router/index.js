import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import UserDetail from "../views/UserDetail.vue";
import Register from "../views/Register.vue";
import Search from "../views/Search.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user/:id",
    name: "UserDetail",
    component: UserDetail,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
