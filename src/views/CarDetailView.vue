<template>
  <section class="detail">
    <div class="container">
      <RouterLink to="/catalog" class="detail__back">← Вернуться в каталог</RouterLink>
      <article v-if="car" class="surface-card detail__card">
        <div class="detail__media">
          <img :src="car.image" :alt="car.name" />
        </div>
        <div class="detail__content">
          <h1 class="section-title">{{ car.name }} {{ car.year }}</h1>
          <div class="detail__grid">
            <div class="detail__item">
              <span class="text-muted">Пробег</span>
              <strong>{{ car.mileage }}</strong>
            </div>
            <div class="detail__item">
              <span class="text-muted">Двигатель</span>
              <strong>{{ car.engineVolume }}</strong>
            </div>
            <div class="detail__item">
              <span class="text-muted">Мощность</span>
              <strong>{{ car.power }}</strong>
            </div>
            <div class="detail__item">
              <span class="text-muted">Коробка</span>
              <strong>{{ car.transmission }}</strong>
            </div>
          </div>
          <div class="detail__prices">
            <div>
              <span class="text-muted">Рынок РФ</span>
              <div class="price">{{ car.marketPrice }}</div>
            </div>
            <div>
              <span class="text-muted">Под ключ</span>
              <div class="price price--accent">{{ car.turnkeyPrice }}</div>
            </div>
          </div>
          <RouterLink to="/contact" class="primary-button detail__cta">Оставить заявку</RouterLink>
        </div>
      </article>
      <p v-else class="text-muted">Автомобиль не найден.</p>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import { cars } from '../data/cars.js';

const route = useRoute();
const car = computed(() => cars.find((item) => item.id === route.params.id));
</script>

<style scoped>
.detail {
  padding: 24px 0 10px;
}

.detail__back {
  display: inline-block;
  margin-bottom: 14px;
  font-weight: 600;
}

.detail__card {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 20px;
}

.detail__media img {
  width: 100%;
  display: block;
  border-radius: 16px;
}

.detail__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
  margin: 18px 0;
}

.detail__item {
  padding: 12px;
  border: 1px dashed #dedee5;
  border-radius: 12px;
}

.detail__prices {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  align-items: center;
}

.price {
  font-size: 20px;
  font-weight: 700;
}

.price--accent {
  color: var(--accent);
  font-size: 24px;
}

.detail__cta {
  margin-top: 16px;
  display: inline-flex;
}

@media (max-width: 960px) {
  .detail__card {
    grid-template-columns: 1fr;
  }
}
</style>
