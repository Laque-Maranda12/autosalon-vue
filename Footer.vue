<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>АВТОМИР</h3>
          <p>Лучший выбор автомобилей для вас</p>
        </div>
        <div class="footer-section">
          <h4>Навигация</h4>
          <router-link to="/about" class="footer-link">О нас</router-link>
          <router-link to="/catalog" class="footer-link">Каталог</router-link>
          <router-link to="/how-to-buy" class="footer-link">Как купить</router-link>
          <router-link to="/advantages" class="footer-link">Преимущества</router-link>
          <router-link to="/reviews" class="footer-link">Отзывы</router-link>
          <router-link to="/contact" class="footer-link">Контакты</router-link>
        </div>
        <div class="footer-section">
          <h4>Контакты</h4>
          <p>Телефон: 8 927 997 12 42</p>
          <p>Email: carmark21@auto.ru</p>
          <p>Адрес: 428000, г. Чебоксары, Марпосадское шоссе, 14.</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 АВТОМИР. Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background: #2c3e50;
  color: #fff;
  padding: 3rem 0 1rem;
  margin-top: 4rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.footer-section h4 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.footer-section p {
  margin-bottom: 0.5rem;
  color: #bdc3c7;
}

.footer-link {
  display: block;
  color: #bdc3c7;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s;
}

.footer-link:hover {
  color: var(--red-color);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #34495e;
  color: #95a5a6;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style>

