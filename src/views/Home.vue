<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container hero-container">
        <div class="hero-content">
          <h1 class="hero-title">Купите автомобиль дешевле на <span class="highlight">60%*</span></h1>
          <p class="hero-description">
            Привезем автомобиль под ключ со всеми документами.<br>
            Подбор автомобиля под любой запрос <strong>БЕСПЛАТНО</strong>
          </p>
          <router-link to="/catalog" class="btn btn-hero">Каталог</router-link>
        </div>
        <div class="hero-image">
          <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=800&fit=crop" alt="Автомобиль" />
        </div>
      </div>
    </section>

    <!-- Services Cards -->
    <section class="section services-section">
      <div class="container">
        <div class="services-grid">
          <div class="service-card" v-for="service in services" :key="service.id">
            <div class="service-icon" v-html="service.icon"></div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- What Cars We Bring -->
    <section class="section cars-section">
      <div class="container">
        <h2 class="section-title">Какие авто привозим?</h2>
        <p class="section-subtitle">Привозим авто не старше 7 лет на момент растаможки.</p>
        <div class="cars-carousel">
          <button class="carousel-btn prev" @click="prevSlide">‹</button>
          <div class="cars-slider">
            <div class="cars-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
              <div 
                v-for="car in cars" 
                :key="car.id" 
                class="car-card-slide"
              >
                <div class="car-card-large">
                  <div class="car-image-large">
                    <img :src="car.image" :alt="car.name" @error="handleImageError($event)" />
                  </div>
                  <div class="car-info-large">
                    <h3>{{ car.name }}</h3>
                    <div class="car-specs-large">
                      <div class="spec-row">
                        <span class="spec-label">Пробег:</span>
                        <span class="spec-value">{{ formatNumber(car.mileage) }} км</span>
                      </div>
                      <div class="spec-row">
                        <span class="spec-label">Объем двигателя:</span>
                        <span class="spec-value">{{ car.engine }}</span>
                      </div>
                      <div class="spec-row">
                        <span class="spec-label">Мощность:</span>
                        <span class="spec-value">{{ car.power }} л.с.</span>
                      </div>
                      <div class="spec-row">
                        <span class="spec-label">Коробка:</span>
                        <span class="spec-value">{{ car.transmission }}</span>
                      </div>
                    </div>
                    <div class="car-pricing">
                      <div class="price-old">
                        Цена на вторичном рынке в РФ: <span>{{ formatPrice(car.marketPrice) }} ₽</span>
                      </div>
                      <div class="price-new">
                        Цена автомобиля "под ключ": <span>{{ formatPrice(car.price) }} ₽</span>
                      </div>
                    </div>
                    <button class="btn btn-request">Оставить заявку</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-btn next" @click="nextSlide">›</button>
        </div>
        <div class="carousel-indicators">
          <span 
            v-for="(car, index) in cars" 
            :key="index"
            :class="{ active: currentSlide === index }"
            @click="currentSlide = index"
          ></span>
        </div>
      </div>
    </section>

    <!-- Guarantees Section -->
    <section class="section guarantees-section">
      <div class="container">
        <h2 class="section-title">Наши гарантии</h2>
        <div class="guarantees-grid">
          <div class="guarantee-card" v-for="guarantee in guarantees" :key="guarantee.id">
            <div class="guarantee-icon" v-html="guarantee.icon"></div>
            <p>{{ guarantee.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Advantages Section -->
    <section class="section advantages-section">
      <div class="container">
        <h2 class="section-title">Преимущества авто из США</h2>
        <div class="advantages-grid">
          <div class="advantage-card" v-for="advantage in advantages" :key="advantage.id">
            <h3>{{ advantage.title }}</h3>
            <p>{{ advantage.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <FAQ />

    <!-- Contact Form Section -->
    <section class="section contact-form-section">
      <div class="container">
        <div class="contact-form-grid">
          <div class="contact-form-card">
            <h3>Только телефон, и мы в деле</h3>
            <p>Специалист перезвонит Вам в течение 5 минут, в рабочее время для уточнения деталей</p>
            <form @submit.prevent="submitContactForm" class="contact-form">
              <input 
                type="tel" 
                v-model="contactForm.phone" 
                placeholder="+7 (927) 666-52-97"
                class="form-input"
                required
              />
              <button type="submit" class="btn btn-full">Получить консультацию</button>
              <label class="checkbox-label">
                <input type="checkbox" v-model="contactForm.agree" required />
                <span>Нажимая на кнопку вы соглашаетесь с условиями <a href="#">Политики конфиденциальности</a></span>
              </label>
              <div class="messengers">
                <p>Связаться с нами через мессенджер</p>
                <div class="messenger-buttons">
                  <button type="button" class="btn-messenger">WhatsApp</button>
                  <button type="button" class="btn-messenger">Telegram</button>
                </div>
              </div>
            </form>
          </div>
          <div class="benefits-card">
            <h3>Точный расчет стоимости уже через 1 час</h3>
            <ul class="benefits-list">
              <li v-for="benefit in benefits" :key="benefit">
                <span class="check-icon" v-html="checkIcon" aria-hidden="true"></span>
                {{ benefit }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import FAQ from '@/components/FAQ.vue'

export default {
  name: 'Home',
  components: {
    FAQ
  },
  setup() {
    const router = useRouter()
    const currentSlide = ref(0)
    
    const contactForm = ref({
      phone: '',
      agree: false
    })

    const serviceIcons = {
      used: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="18" width="36" height="12" rx="2.5" stroke="currentColor" stroke-width="2" />
              <path d="M12 30v4.5M36 30v4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              <path d="M14 18l2-5h16l2 5" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
              <circle cx="16" cy="34.5" r="3" fill="currentColor" />
              <circle cx="32" cy="34.5" r="3" fill="currentColor" />
              <path d="M21 24h6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>`,
      new: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 6l3 9h9l-7.5 5.5L31.5 30 24 24.5 16.5 30l2-9.5L11 15h9l4-9z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
              <path d="M15 34l-2 5m20-5l2 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>`,
      budget: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="14" width="32" height="20" rx="3" stroke="currentColor" stroke-width="2" />
                <path d="M14 18h20" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                <rect x="26" y="22" width="12" height="8" rx="2" fill="currentColor" opacity="0.12" />
                <path d="M28 26a2 2 0 1 1 4 0a2 2 0 0 1-4 0z" fill="currentColor" />
                <path d="M12 26h6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              </svg>`
    }

    const services = ref([
      {
        id: 'used',
        title: 'С пробегом',
        description: 'Предлагаем купить автомобиль дешевле до 60%, от рыночной цены на Авито и Авто.ру',
        icon: serviceIcons.used
      },
      {
        id: 'new',
        title: 'Новые',
        description: 'Предлагаем Вам купить автомобиль дешевле до 60%, от рыночной цены на Авито и Авто.ру',
        icon: serviceIcons.new
      },
      {
        id: 'budget',
        title: 'Под ваш бюджет',
        description: 'Предлагаем Вам купить автомобиль дешевле до 60%, от рыночной цены на Авито и Авто.ру',
        icon: serviceIcons.budget
      }
    ])
    
    const cars = ref([
      {
        id: 1,
        name: 'Toyota RAV4 2022',
        mileage: 5700,
        engine: '2.0',
        power: 149,
        transmission: 'Автомат',
        marketPrice: 3300000,
        price: 2700000,
        image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop'
      },
      {
        id: 2,
        name: 'Audi Q5 2021',
        mileage: 5700,
        engine: '2.0',
        power: 149,
        transmission: 'Автомат',
        marketPrice: 3250000,
        price: 2500000,
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0ad6?w=800&h=600&fit=crop'
      },
      {
        id: 3,
        name: 'Honda CR-V 2021',
        mileage: 5700,
        engine: '2.0',
        power: 149,
        transmission: 'Автомат',
        marketPrice: 2900000,
        price: 2300000,
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0ad6?w=800&h=600&fit=crop&auto=format'
      }
    ])
    
    const guaranteeIcons = {
      refund: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <rect x="10" y="8" width="28" height="32" rx="3" stroke="currentColor" stroke-width="2" />
                 <path d="M16 18h12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                 <path d="M16 24h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                 <path d="M16 30h10" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                 <path d="M20 12h8" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                 <path d="M24 34l-3 3m3-3l3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
               </svg>`,
      contract: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <rect x="12" y="8" width="24" height="32" rx="3" stroke="currentColor" stroke-width="2" />
                   <path d="M17 16h14M17 22h10M17 28h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                   <path d="M24 34l4 4l6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                 </svg>`,
      magnifier: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <circle cx="22" cy="22" r="10" stroke="currentColor" stroke-width="2" />
                   <path d="M30 30l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                   <path d="M18 22h8" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                 </svg>`,
      building: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <rect x="12" y="8" width="24" height="32" rx="2" stroke="currentColor" stroke-width="2" />
                   <path d="M12 20h24" stroke="currentColor" stroke-width="2" />
                   <path d="M18 14h4m4 0h4" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                   <path d="M18 26h4m4 0h4" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                   <path d="M18 32h12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                 </svg>`,
      quality: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 7l4.5 4.5H35v6L39 22l-4 4v6h-6.5L24 37l-4.5-4.5H13v-6L9 22l4-4v-6h6.5L24 7z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                  <path d="M19 24l3 3l7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>`,
      insurance: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 6l14 6v10c0 7.2-5.7 13.5-14 16c-8.3-2.5-14-8.8-14-16V12l14-6z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                    <path d="M18 24l4 4l8-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>`
    }

    const guarantees = ref([
      { id: 1, icon: guaranteeIcons.refund, text: '100% возврат предоплаты' },
      { id: 2, icon: guaranteeIcons.contract, text: 'Работаем по договору' },
      { id: 3, icon: guaranteeIcons.magnifier, text: 'Договор без мелкого шрифта' },
      { id: 4, icon: guaranteeIcons.building, text: 'Оплата в кассу нашего автосалона или на р/с компании' },
      { id: 5, icon: guaranteeIcons.quality, text: 'Качество автомобиля' },
      { id: 6, icon: guaranteeIcons.insurance, text: 'На всех этапах сделки - автомобили застрахованы' }
    ])

    const checkIcon = `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="2" />
                        <path d="M6 10.5l2.5 2.5L14 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>`
    
    const advantages = ref([
      {
        id: 1,
        title: 'Высокое качество',
        description: 'Одним из главных аргументов в пользу выбора автомобиля из США, является то, что все местные машины обладают высоким качеством сборки и оснащенности. А так же высоким качеством лакокрасочного покрытия.'
      },
      {
        id: 2,
        title: 'Богатая комплектация',
        description: 'Автомобили из США отличаются богатыми комплектациями, а также отменным техническим состоянием всех узлов и агрегатов.'
      },
      {
        id: 3,
        title: 'Низкая цена',
        description: 'Стоимость поддержанного автомобиля из США значительно дешевле автомобиля на российском рынке даже с учетом расходов на растаможивание и доставку.'
      },
      {
        id: 4,
        title: 'Отличное состояние',
        description: 'Состояние подержанных автомобилей идеальное. В США отличные условия эксплуатации транспорта, хорошие дороги и отменный сервис.'
      }
    ])
    
    const benefits = ref([
      'Расскажем какие автомобили вы можете купить с наибольшей выгодой.',
      'Отправим подобранные автомобили на ваш WhatsApp или Telegram',
      'Сделаем точный расчет стоимости автомобиля с доставкой в ваш город "под ключ"'
    ])
    
    const formatPrice = (price) => {
      return new Intl.NumberFormat('ru-RU').format(price)
    }
    
    const formatNumber = (num) => {
      return new Intl.NumberFormat('ru-RU').format(num)
    }
    
    const nextSlide = () => {
      currentSlide.value = (currentSlide.value + 1) % cars.value.length
    }
    
    const prevSlide = () => {
      currentSlide.value = currentSlide.value === 0 ? cars.value.length - 1 : currentSlide.value - 1
    }
    
    const submitContactForm = () => {
      console.log('Форма отправлена:', contactForm.value)
      alert('Спасибо! Мы свяжемся с вами в ближайшее время.')
      contactForm.value = { phone: '', agree: false }
    }
    
    const handleImageError = (event) => {
      event.target.src = 'https://via.placeholder.com/600x400/ecf0f1/2c3e50?text=Автомобиль'
    }
    
    return {
      currentSlide,
      services,
      cars,
      guarantees,
      advantages,
      benefits,
      checkIcon,
      contactForm,
      formatPrice,
      formatNumber,
      nextSlide,
      prevSlide,
      submitContactForm,
      handleImageError
    }
  }
}
</script>

<style scoped>
.hero-section {
  background: white;
  padding: 4rem 0;
}

.hero-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #2c3e50;
  line-height: 1.2;
  margin: 0;
}

.hero-title .highlight {
  color: var(--red-color);
}

.hero-description {
  font-size: 1.25rem;
  color: #2c3e50;
  line-height: 1.6;
}

.btn-hero {
  align-self: flex-start;
  font-size: 1.1rem;
  padding: 16px 40px;
}

.hero-image {
  width: 100%;
}

.hero-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.services-section {
  background: #f8f9fa;
  padding: 4rem 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.service-card {
  background: white;
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.service-card h3 {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.service-card p {
  color: #2c3e50;
  line-height: 1.6;
}

.service-icon {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  opacity: 0.12;
  color: var(--red-color);
}

.service-icon svg {
  width: 72px;
  height: 72px;
}

.cars-section {
  padding: 4rem 0;
  background: white;
}

.section-subtitle {
  text-align: center;
  color: var(--grey-color);
  margin-bottom: 3rem;
  font-size: 1.1rem;
}

.cars-carousel {
  position: relative;
  margin-bottom: 2rem;
}

.cars-slider {
  overflow: hidden;
  border-radius: 10px;
}

.cars-track {
  display: flex;
  transition: transform 0.5s ease;
}

.car-card-slide {
  min-width: 100%;
  padding: 0 1rem;
}

.car-card-large {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.car-image-large {
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.car-image-large img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.car-info-large {
  padding: 2rem;
}

.car-info-large h3 {
  font-size: 1.75rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.car-specs-large {
  margin-bottom: 1.5rem;
}

.spec-row {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px dotted #e0e0e0;
}

.spec-label {
  color: var(--grey-color);
}

.spec-value {
  font-weight: 600;
  color: #2c3e50;
}

.car-pricing {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 5px;
}

.price-old {
  color: var(--grey-color);
  text-decoration: line-through;
  margin-bottom: 0.5rem;
}

.price-old span {
  font-weight: 600;
}

.price-new {
  color: var(--red-color);
  font-size: 1.25rem;
  font-weight: 700;
}

.price-new span {
  font-size: 1.5rem;
}

.btn-request {
  width: 100%;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--red-color);
  color: white;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.carousel-btn:hover {
  background: #c0392b;
}

.carousel-btn.prev {
  left: -25px;
}

.carousel-btn.next {
  right: -25px;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.carousel-indicators span {
  width: 40px;
  height: 4px;
  background: #e0e0e0;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s;
}

.carousel-indicators span.active {
  background: var(--red-color);
}

.guarantees-section {
  background: #f8f9fa;
  padding: 4rem 0;
}

.guarantees-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.guarantee-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.guarantee-icon {
  color: var(--red-color);
  flex-shrink: 0;
}

.guarantee-icon svg {
  width: 44px;
  height: 44px;
}

.guarantee-card p {
  color: #2c3e50;
  line-height: 1.6;
  margin: 0;
}

.advantages-section {
  padding: 4rem 0;
  background: white;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.advantage-card {
  background: white;
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.advantage-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.advantage-card p {
  color: #2c3e50;
  line-height: 1.8;
}

.contact-form-section {
  padding: 4rem 0;
  background: #f8f9fa;
}

.contact-form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.contact-form-card,
.benefits-card {
  background: white;
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.contact-form-card h3,
.benefits-card h3 {
  font-size: 1.75rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.contact-form-card p {
  color: var(--grey-color);
  margin-bottom: 1.5rem;
}

.form-input {
  width: 100%;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.btn-full {
  width: 100%;
  margin-bottom: 1rem;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--grey-color);
  margin-bottom: 1.5rem;
}

.checkbox-label a {
  color: var(--red-color);
  text-decoration: none;
}

.messengers {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e0e0e0;
}

.messengers p {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.messenger-buttons {
  display: flex;
  gap: 1rem;
}

.btn-messenger {
  flex: 1;
  padding: 0.75rem;
  border: 2px solid var(--red-color);
  background: white;
  color: var(--red-color);
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-messenger:hover {
  background: var(--red-color);
  color: white;
}

.benefits-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.benefits-list li {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  color: #2c3e50;
  line-height: 1.6;
}

.check-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--red-color);
  flex-shrink: 0;
}

@media (max-width: 968px) {
  .hero-container {
    grid-template-columns: 1fr;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .services-grid,
  .guarantees-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .advantages-grid,
  .contact-form-grid {
    grid-template-columns: 1fr;
  }
  
  .carousel-btn {
    display: none;
  }
}

@media (max-width: 768px) {
  .services-grid,
  .guarantees-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-title {
    font-size: 2rem;
  }
}
</style>
