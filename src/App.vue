<template>
  <main>
    <nav class="navbar navbar-expand-lg bg-transparent position-fixed w-100">
      <div class="container">
        <router-link :to="{ name: 'home' }" class="navbar-brand">Vueflix</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link :to="{ name: 'movies' }" class="nav-link">Movies</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'about' }" class="nav-link">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
    <footer class="mt-5 p-3">
      <p class="text-center">&copy; All right reserved by hit</p>
    </footer>
  </main>
</template>

<script setup>
import { ref, provide, computed } from 'vue'

const movies = ref([
  {
    id: 1,
    name: 'Ninja Turtles',
    imageSrc: '/images/1.jpg',
    year: '2024',
    isTop: false
  },
  {
    id: 2,
    name: 'Under Water',
    imageSrc: '/images/2.jpg',
    year: '2023',
    isTop: true
  },
  {
    id: 3,
    name: 'We can be heros',
    imageSrc: '/images/3.jpg',
    year: '2022',
    isTop: true
  },
  {
    id: 4,
    name: 'Nowhere',
    imageSrc: '/images/4.jpg',
    year: '2021',
    isTop: true
  },
  {
    id: 5,
    name: 'Dhak Dhak',
    imageSrc: '/images/5.jpg',
    year: '2020',
    isTop: true
  },
  {
    id: 6,
    name: 'bumbblebee',
    imageSrc: '/images/6.jpg',
    year: '2019',
    isTop: true
  },
  {
    id: 7,
    name: 'squid game',
    imageSrc: '/images/7.jpg',
    year: '2019',
    isTop: false
  },
  {
    id: 8,
    name: 'avenger',
    imageSrc: '/images/8.jpg',
    year: '2020',
    isTop: false
  },
  {
    id: 9,
    name: 'spider man',
    imageSrc: '/images/9.jpg',
    year: '2022',
    isTop: true
  },
  {
    id: 10,
    name: 'black adam',
    imageSrc: '/images/10.jpg',
    year: '2019',
    isTop: false
  },
  {
    id: 11,
    name: 'the witch',
    imageSrc: '/images/11.jpg',
    year: '2023',
    isTop: false
  },
  {
    id: 12,
    name: 'my wife is a gangstar 3',
    imageSrc: '/images/12.jpg',
    year: '2024',
    isTop: false
  },
])

provide('movies', movies)


</script>

<style scoped></style>