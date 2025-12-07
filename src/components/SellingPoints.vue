<template>
  <section class="selling">
    <div class="container">
      <h2 class="section-title">Как мы работаем</h2>
      <p class="section-subtitle">Никаких лишних страниц на главной — только ключевые шаги.</p>
      <div class="selling__grid">
        <div class="surface-card selling__item" v-for="item in items" :key="item.title">
          <h3>{{ item.title }}</h3>
          <p class="text-muted">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    title: 'Фиксируем бюджет',
    text: 'Обсуждаем желаемую комплектацию, марки и сроки. Согласовываем итоговую стоимость без скрытых комиссий.',
  },
  {
    title: 'Подбираем реальные авто',
    text: 'Показываем живые предложения и фотографии. Каталог вынесен отдельно, чтобы не перегружать главную.',
  },
  {
    title: 'Оформляем сделку',
    text: 'Готовим документы, торгуемся с продавцами и передаем автомобиль с ключами и гарантией прозрачности.',
  },
];
</script>

<style scoped>
.selling {
  padding: 22px 0 10px;
}

.selling__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
}

.selling__item h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
}

.selling__item p {
  margin: 0;
}
</style>
