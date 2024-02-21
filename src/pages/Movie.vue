<template>
    <div class="container pt-5">
        <div class="row">
            <div class="col-md-6">
                <img :src="movie.imageSrc" alt="" class="w-100">
            </div>
            <div class="col-md-6">
                <div class="d-flex justify-content-between">
                    <h5>{{ movie.name }}</h5>
                    <button @click="goBack" class="btn btn-primary">Back</button>
                </div>
                <h5>{{ movie.year }}</h5>

                <div class="my-3">
                    <router-link :to="{ name: 'movieOverview' }"
                        class="px-3 py-1 border border-primary mx-2 rounded btn">Overview</router-link>
                    <router-link :to="{ name: 'movieTrailer', params: { id: movie.id } }"
                        class="px-3 py-1 border border-primary mx-2 rounded btn">Trailer</router-link>
                    <router-link :to="{ name: 'movieArtists', params: { id: movie.id } }"
                        class="px-3 py-1 border border-primary mx-2 rounded btn">Artists</router-link>
                </div>

                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, inject, computed } from 'vue';

const route = useRoute()
const router = useRouter()

const movieId = parseInt(route.params.id)
const movies = inject('movies')

const movie = computed(() => {
    return movies.value.find(movie => {
        return movie.id === movieId
    })
})

const goBack = () => {
    router.go(-1)
}

</script>

<style scoped></style>