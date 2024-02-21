import { createRouter, createWebHistory } from "vue-router";

// step 1
const Home = () => import("./../pages/Home.vue");
const About = () => import("./../pages/About.vue");
const Movies = () => import("./../pages/Movies.vue");
const Movie = () => import("./../pages/Movie.vue");
const MovieOverview = () => import("./../pages/MovieOverview.vue");
const MovieTrailer = () => import("./../pages/MovieTrailer.vue");
const MovieArtists = () => import("./../pages/MovieArtists.vue");

// step 2
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/movies",
    name: "movies",
    component: Movies,
  },
  {
    path: "/movies/:id",
    name: "movie",
    component: Movie,
    children: [
      {
        path: "",
        name: "movieOverview",
        component: MovieOverview,
      },
      {
        path: "trailer",
        name: "movieTrailer",
        component: MovieTrailer,
      },
      {
        path: "artists",
        name: "movieArtists",
        component: MovieArtists,
      },
    ],
  },
];

// step 3
export const router = createRouter({
  history: createWebHistory(),
  routes,
});
