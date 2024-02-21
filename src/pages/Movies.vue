<template>
    <div class="container pt-5">
        <div class="row my-3">
            <h5 class="my-3">All Movies</h5>
        </div>
        <div class="row g-3">
            <div v-for="movie in movies" :key="movie.id" class="col-md-4">
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
        </div>
    </div>
</template>

<script setup>
import { ref, inject } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const movies = inject('movies')

const goToDetail = (id) => {
    router.push({ name: 'movie', params: { id: id } })
}
</script>

<style scoped></style>