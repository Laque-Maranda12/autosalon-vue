<template>
  <section class="catalog">
    <div class="container">
      <h1 class="section-title">Каталог автомобилей</h1>
      <p class="section-subtitle">Актуальные предложения, оформляемые "под ключ". Все карточки совпадают со стилем макета.</p>
      <div class="card-grid">
        <CarCard v-for="car in cars" :key="car.id" :car="car" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { cars } from '../data/cars.js';
import CarCard from '../components/CarCard.vue';
</script>

<style scoped>
.catalog {
  padding: 24px 0 12px;
}
</style>
