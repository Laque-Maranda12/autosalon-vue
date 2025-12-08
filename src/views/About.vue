<template>
  <div class="about">
    <section class="section">
      <div class="container">
        <div class="about-content">
          <div class="about-image">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" alt="Наша команда" />
          </div>
          <div class="about-text">
            <h1 class="page-title">О нас</h1>
            <p class="intro-text">
              Мы автосалон и официальный партнер крупнейших мировых авто-аукционов: 
              IAA (Insurance Auto Auction), Copart, Manheim.
            </p>
            <div class="features-list">
              <div class="feature-item">
                <div class="feature-icon">AUTO</div>
                <span>Работаем без посредников</span>
              </div>
              <div class="feature-item">
                <div class="feature-icon">10+</div>
                <span>Успешный опыт 10 лет</span>
              </div>
              <div class="feature-item">
                <div class="feature-icon">LOG</div>
                <span>Отлаженная логистика</span>
              </div>
            </div>
            <div class="highlight-box">
              <p>
                Мы берем на себя полное сопровождение сделки до передачи автомобиля в руки клиенту.
              </p>
            </div>
            <router-link to="/contact" class="btn btn-request">Оставить заявку</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-image {
  width: 100%;
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
}

.intro-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #2c3e50;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.feature-icon {
  width: 40px;
  height: 40px;
  background: var(--red-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.feature-item span {
  font-size: 1.1rem;
  color: #2c3e50;
  font-weight: 500;
}

.highlight-box {
  padding: 1.5rem;
  border: 2px solid #ffb3ba;
  border-radius: 8px;
  background: #fff5f5;
}

.highlight-box p {
  margin: 0;
  color: #2c3e50;
  line-height: 1.6;
}

.btn-request {
  align-self: flex-start;
}

@media (max-width: 968px) {
  .about-content {
    grid-template-columns: 1fr;
  }
}
</style>
