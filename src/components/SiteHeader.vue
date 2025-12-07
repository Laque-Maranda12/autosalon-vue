<template>
  <header class="header">
    <div class="container header__inner">
      <div class="header__brand">Автосалон</div>
      <nav class="header__nav">
        <RouterLink to="/" class="nav-link">Главная</RouterLink>
        <RouterLink to="/catalog" class="nav-link">Каталог</RouterLink>
        <RouterLink to="/about" class="nav-link">О нас</RouterLink>
        <RouterLink to="/contact" class="nav-link">Контакты</RouterLink>
      </nav>
      <RouterLink to="/contact" class="header__cta">Заказать звонок</RouterLink>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(245, 245, 247, 0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #ececf1;
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
}

.header__brand {
  font-weight: 800;
  font-size: 20px;
  letter-spacing: 0.4px;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 16px;
}

.nav-link {
  font-weight: 600;
  padding: 8px 12px;
  border-radius: 12px;
  transition: background 0.15s ease, color 0.15s ease;
}

.nav-link.router-link-active {
  background: #ffffff;
  color: var(--accent);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
}

.header__cta {
  background: #111217;
  color: #fff;
  padding: 10px 14px;
  border-radius: 12px;
  font-weight: 700;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.header__cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
}

@media (max-width: 768px) {
  .header__nav {
    display: none;
  }
}
</style>
