<template>
  <article class="car-card surface-card">
    <div class="car-card__image">
      <img :src="car.image" :alt="`${car.name} ${car.year}`" />
    </div>
    <div class="car-card__body">
      <div class="car-card__title">{{ car.name }} {{ car.year }}</div>
      <dl class="car-card__specs">
        <div class="spec-row">
          <dt>Пробег</dt>
          <dd>{{ car.mileage }}</dd>
        </div>
        <div class="spec-row">
          <dt>Объем двигателя</dt>
          <dd>{{ car.engineVolume }}</dd>
        </div>
        <div class="spec-row">
          <dt>Мощность</dt>
          <dd>{{ car.power }}</dd>
        </div>
        <div class="spec-row">
          <dt>Коробка</dt>
          <dd>{{ car.transmission }}</dd>
        </div>
      </dl>
      <div class="car-card__prices">
        <div class="price-row">
          <span class="label">Цена на вторичном рынке в РФ</span>
          <span class="value">{{ car.marketPrice }}</span>
        </div>
        <div class="price-row accent">
          <span class="label">Цена автомобиля "под ключ"</span>
          <span class="value">{{ car.turnkeyPrice }}</span>
        </div>
      </div>
      <RouterLink :to="`/car/${car.id}`" class="primary-button car-card__cta">Оставить заявку</RouterLink>
    </div>
  </article>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  car: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.car-card {
  padding: 0;
  overflow: hidden;
}

.car-card__image img {
  width: 100%;
  display: block;
  border-radius: 18px 18px 0 0;
}

.car-card__body {
  padding: 18px 18px 20px;
  display: grid;
  gap: 12px;
}

.car-card__title {
  font-size: 18px;
  font-weight: 800;
}

.car-card__specs {
  display: grid;
  gap: 8px;
  margin: 0;
}

.spec-row {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  color: var(--text-muted);
}

.spec-row dd {
  margin: 0;
  font-weight: 700;
  color: var(--text-main);
}

.car-card__prices {
  border-top: 1px dashed #dcdde2;
  padding-top: 12px;
  display: grid;
  gap: 8px;
}

.price-row {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  font-weight: 600;
}

.price-row .value {
  font-weight: 700;
}

.price-row.accent .value {
  color: var(--accent);
  font-size: 20px;
}

.car-card__cta {
  width: 100%;
  text-align: center;
  margin-top: 4px;
}
</style>
