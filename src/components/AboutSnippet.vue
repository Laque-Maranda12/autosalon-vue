<template>
  <section class="about-snippet">
    <div class="container surface-card about-snippet__wrap">
      <div class="about-snippet__info">
        <p class="badge">О компании</p>
        <h2 class="section-title">Команда, которая ведёт сделку от поиска до передачи ключей</h2>
        <p class="text-muted">
          Мы сами проверяем автомобили, согласовываем бюджет, торгуемся с продавцами и сопровождаем вас на каждом шаге. Никаких
          смайликов и лишнего декора — только детали сделки.
        </p>
        <RouterLink to="/about" class="primary-button">Подробнее</RouterLink>
      </div>
      <div class="about-snippet__media">
        <img src="/images/about/team.svg" alt="Команда за работой" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.about-snippet {
  margin: 20px 0 12px;
}

.about-snippet__wrap {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  align-items: center;
  gap: 28px;
}

.about-snippet__media img {
  width: 100%;
  display: block;
  border-radius: 14px;
}
</style>
