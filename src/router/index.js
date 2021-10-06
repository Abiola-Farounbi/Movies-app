import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MoviesList from "../views/MoviesList.vue";
import UserProfile from "../views/UserProfile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movies",
    name: "MoviesList",
    component: MoviesList,
  },
  {
    path: "/profile",
    name: "profile",
    component: UserProfile
  }
 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
