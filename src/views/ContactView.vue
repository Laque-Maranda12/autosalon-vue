<template>
  <section class="page">
    <div class="container">
      <h1 class="section-title">Контакты</h1>
      <p class="section-subtitle">Оставьте заявку — мы перезвоним и уточним детали подбора.</p>
      <div class="surface-card contact-form">
        <form>
          <label>
            <span>Имя</span>
            <input type="text" placeholder="Как вас зовут?" required />
          </label>
          <label>
            <span>Телефон</span>
            <input type="tel" placeholder="+7 (___) ___-__-__" required />
          </label>
          <label>
            <span>Желаемый автомобиль</span>
            <input type="text" placeholder="Марка и модель" />
          </label>
          <button type="submit" class="primary-button">Отправить</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page {
  padding: 24px 0 12px;
}

.contact-form form {
  display: grid;
  gap: 14px;
}

label {
  display: grid;
  gap: 6px;
  font-weight: 600;
  color: var(--text-muted);
}

input {
  padding: 12px;
  border-radius: 12px;
  border: 1px solid #dfe0e6;
  font-size: 15px;
  font-family: inherit;
}

button {
  width: fit-content;
}
</style>
