<template>
  <div class="contact">
    <section class="section">
      <div class="container">
        <h1 class="page-title-left">Наши контакты</h1>
        
        <div class="contact-info-grid">
          <div class="contact-column">
            <div class="contact-field">
              <div class="field-label">Адрес:</div>
              <div class="field-value">
                428000, г. Чебоксары,<br>
                Марпосадское шоссе, 14.
              </div>
            </div>
            <div class="contact-field">
              <div class="field-label">E-mail:</div>
              <div class="field-value">carmark21@auto.ru</div>
            </div>
          </div>
          
          <div class="contact-column">
            <div class="contact-field">
              <div class="field-label">Время работы:</div>
              <div class="field-value">Ежедневно 10:00 до 19:00</div>
            </div>
              <div class="contact-field">
              <div class="field-label">Соц. сети:</div>
              <div class="social-icons-contact">
                <a href="#" class="social-icon-circle">TG</a>
                <a href="#" class="social-icon-circle">VK</a>
                <a href="#" class="social-icon-circle">YT</a>
              </div>
            </div>
          </div>
          
          <div class="contact-column">
            <div class="contact-field">
              <div class="field-label">Телефон:</div>
              <div class="field-value">
                8 927 997 12 42<br>
                8 927 997 12 42
              </div>
            </div>
          </div>
        </div>
        
        <div class="map-section">
          <div class="map-container">
            <div class="map-placeholder">
              <p>Карта Яндекс</p>
              <p>Марпосадское шоссе, 14, Чебоксары</p>
              <div class="map-controls">
                <a href="#" class="map-link">Как добраться</a>
                <a href="#" class="map-link">Доехать на такси</a>
                <a href="#" class="map-link">Создать свою карту</a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="footer-links">
          <a href="#" class="footer-link">Реквизиты</a>
          <a href="#" class="footer-link">Политика конфиденциальности</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
.page-title-left {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 3rem;
}

.contact-info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-bottom: 3rem;
}

.contact-column {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.field-label {
  color: var(--grey-color);
  font-size: 0.9rem;
  font-weight: 500;
}

.field-value {
  color: #2c3e50;
  font-size: 1rem;
  line-height: 1.6;
}

.social-icons-contact {
  display: flex;
  gap: 0.75rem;
}

.social-icon-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--red-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s;
}

.social-icon-circle:hover {
  background: #c0392b;
  transform: scale(1.1);
}

.map-section {
  margin-bottom: 3rem;
}

.map-container {
  width: 100%;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.map-placeholder {
  width: 100%;
  height: 100%;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--grey-color);
  position: relative;
}

.map-placeholder p {
  margin: 0.5rem 0;
  font-size: 1.1rem;
}

.map-controls {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  display: flex;
  gap: 1rem;
}

.map-link {
  color: #2c3e50;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  background: white;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.map-link:hover {
  background: var(--red-color);
  color: white;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e0e0e0;
}

.footer-link {
  color: var(--grey-color);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s;
}

.footer-link:hover {
  color: var(--red-color);
}

@media (max-width: 968px) {
  .contact-info-grid {
    grid-template-columns: 1fr;
  }
  
  .map-controls {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
