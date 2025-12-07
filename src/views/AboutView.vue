<template>
  <section class="page">
    <div class="container">
      <h1 class="section-title">О нас</h1>
      <p class="section-subtitle">Мы помогаем подобрать автомобиль под ключ и ведём клиента от заявки до получения номера.</p>
      <div class="surface-card about">
        <img src="/images/about/team.svg" alt="Команда" />
        <div>
          <p>
            Команда опытных подборщиков и юристов проверяет автомобили, ведёт переговоры и оформляет документы. Мы убрали все смайлики
            и оставили только понятные шаги, чтобы интерфейс совпадал с макетом.
          </p>
          <p>Работаем по прозрачным договорам и показываем реальные фотографии автомобилей перед покупкой.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page {
  padding: 24px 0 12px;
}

.about {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.about img {
  width: 100%;
  border-radius: 12px;
}
</style>
