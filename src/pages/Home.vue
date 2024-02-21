<template>
    <header class="">
        <img src="/images/header.jpg" alt="">
    </header>
    <div id="movies" class="container my-5">
        <h3 class="">Top Movies</h3>
        <div class="row g-3">
            <template v-for="movie in movies" :key="movie.id">
                <div v-if="movie.isTop" class="col-md-4">
                    <div class="card card-body p-0 border-0 bg-body-tertiary overflow-hidden">
                        <img :src="movie.imageSrc" alt="" class="w-100 object-fit-cover" style="height: 250px;">
                        <div class="px-2 py-4 px-4 text-center">
                            <p>{{ movie.year }}</p>
                            <h6>{{ movie.name }}</h6>
                            <router-link :to="{ name: 'movie', params: { id: movie.id } }"
                                class="btn btn-sm btn-info">Detail</router-link>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref, inject } from 'vue';

const movies = inject('movies')
</script>

<style scoped>
header {
    height: 93vh;
}

header img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>