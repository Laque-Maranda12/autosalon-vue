<template>
  <section class="hero">
    <div class="container hero__grid">
      <div class="hero__content">
        <p class="badge">Покупка авто под ключ</p>
        <h1 class="hero__title">Найдём и доставим автомобиль, который соответствует вашему макету и бюджету</h1>
        <p class="hero__text">
          Четко работаем по согласованному бюджету, показываем реальные автомобили и оформляем сделку без скрытых комиссий.
        </p>
        <div class="hero-cta">
          <RouterLink to="/catalog" class="primary-button">Смотреть каталог</RouterLink>
          <RouterLink to="/contact" class="hero__link">Оставить заявку</RouterLink>
        </div>
        <div class="hero__note">Каталог вынесен на отдельную страницу, главная — только ключевые преимущества.</div>
      </div>
      <div class="hero__media surface-card">
        <img src="/images/hero/hero-car.svg" alt="Автомобиль на фоне гор" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.hero {
  padding: 40px 0 48px;
}

.hero__grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 28px;
  align-items: center;
}

.hero__title {
  font-size: 36px;
  margin: 14px 0;
  line-height: 1.2;
}

.hero__text {
  color: var(--text-muted);
  margin: 0 0 18px;
}

.hero__link {
  font-weight: 700;
  color: var(--text-main);
  padding: 12px 0;
}

.hero__note {
  margin-top: 12px;
  color: var(--text-muted);
  font-weight: 600;
}

.hero__media {
  padding: 0;
  overflow: hidden;
}

.hero__media img {
  width: 100%;
  display: block;
}

@media (max-width: 960px) {
  .hero__grid {
    grid-template-columns: 1fr;
  }

  .hero__title {
    font-size: 28px;
  }
}
</style>
