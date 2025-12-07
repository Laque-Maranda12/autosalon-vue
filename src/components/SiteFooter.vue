<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div>
        <div class="footer__brand">Автосалон</div>
        <p class="text-muted">Покупка и подбор автомобилей под ключ по всей России.</p>
      </div>
      <div class="footer__links">
        <RouterLink to="/catalog">Каталог</RouterLink>
        <RouterLink to="/about">О нас</RouterLink>
        <RouterLink to="/contact">Контакты</RouterLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.footer {
  border-top: 1px solid #e7e7ed;
  padding: 32px 0 38px;
  background: #fff;
  margin-top: 60px;
}

.footer__inner {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.footer__brand {
  font-weight: 800;
  font-size: 18px;
  margin-bottom: 6px;
}

.footer__links {
  display: grid;
  gap: 10px;
  font-weight: 600;
}
</style>
