<template>
  <div class="car-detail">
    <div v-if="car" class="section">
      <div class="container">
        <button @click="$router.back()" class="back-btn">← Назад</button>
        
        <div class="car-detail-content">
          <div class="car-images">
            <div class="main-image">
              <img :src="currentImage || car.image" :alt="car.name" />
            </div>
            <div class="image-gallery">
              <div 
                v-for="(img, index) in car.images" 
                :key="index"
                class="gallery-thumb"
                @click="currentImage = img"
              >
                <img :src="img" :alt="`${car.name} ${index + 1}`" />
              </div>
            </div>
          </div>
          
          <div class="car-details">
            <h1>{{ car.name }}</h1>
            <p class="car-price-large">{{ formatPrice(car.price) }} ₽</p>
            
            <div class="car-specs-grid">
              <div class="spec-item">
                <span class="spec-label">Год выпуска:</span>
                <span class="spec-value">{{ car.year }}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Пробег:</span>
                <span class="spec-value">{{ formatPrice(car.mileage) }} км</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Топливо:</span>
                <span class="spec-value">{{ car.fuel }}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Коробка передач:</span>
                <span class="spec-value">{{ car.transmission }}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Привод:</span>
                <span class="spec-value">{{ car.drive }}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Объем двигателя:</span>
                <span class="spec-value">{{ car.engine }}</span>
              </div>
            </div>
            
            <div class="car-description-section">
              <h2>Описание</h2>
              <p>{{ car.fullDescription }}</p>
            </div>
            
            <div class="car-features">
              <h2>Особенности</h2>
              <ul>
                <li v-for="feature in car.features" :key="feature">{{ feature }}</li>
              </ul>
            </div>
            
            <div class="contact-section">
              <h2>Связаться с нами</h2>
              <p>Интересует этот автомобиль? Свяжитесь с нами для получения дополнительной информации.</p>
              <div class="contact-buttons">
                <a href="tel:+79991234567" class="btn">Позвонить</a>
                <a href="mailto:info@avtosaloon.ru" class="btn btn-outline">Написать</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="section">
      <div class="container">
        <p>Автомобиль не найден</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'CarDetail',
  setup() {
    const route = useRoute()
    const car = ref(null)
    const currentImage = ref('')
    
    const carsData = {
      1: {
        id: 1,
        name: 'Toyota Camry 2023',
        price: 2500000,
        year: 2023,
        mileage: 15000,
        fuel: 'Бензин',
        transmission: 'Автомат',
        drive: 'Передний',
        engine: '2.5 л',
        image: '/images/cars/toyota-camry-2023.svg',
        images: ['/images/cars/toyota-camry-2023.svg', '/images/cars/mercedes-c-class-2023.svg', '/images/cars/audi-a4-2022.svg'],
        fullDescription: 'Toyota Camry 2023 года - это современный седан, сочетающий в себе комфорт, надежность и экономичность. Автомобиль оснащен передовыми технологиями безопасности и комфорта.',
        features: [
          'Кожаный салон',
          'Панорамная крыша',
          'Камера заднего вида',
          'Круиз-контроль',
          'Подогрев сидений',
          'Apple CarPlay / Android Auto'
        ]
      },
      2: {
        id: 2,
        name: 'BMW X5 2022',
        price: 4500000,
        year: 2022,
        mileage: 25000,
        fuel: 'Бензин',
        transmission: 'Автомат',
        drive: 'Полный',
        engine: '3.0 л',
        image: '/images/cars/bmw-x5-2022.svg',
        images: ['/images/cars/bmw-x5-2022.svg', '/images/cars/lexus-rx-2022.svg', '/images/cars/ford-explorer-2021.svg'],
        fullDescription: 'BMW X5 2022 - премиальный кроссовер с мощным двигателем и роскошным интерьером. Идеальный выбор для тех, кто ценит комфорт и динамику.',
        features: [
          'Кожаный салон премиум',
          'Панорамная крыша',
          '360° камеры',
          'Адаптивный круиз-контроль',
          'Массаж сидений',
          'Harman Kardon звук'
        ]
      },
      3: {
        id: 3,
        name: 'Mercedes-Benz C-Class 2023',
        price: 3200000,
        year: 2023,
        mileage: 10000,
        fuel: 'Бензин',
        transmission: 'Автомат',
        drive: 'Задний',
        engine: '2.0 л',
        image: '/images/cars/mercedes-c-class-2023.svg',
        images: ['/images/cars/mercedes-c-class-2023.svg', '/images/cars/audi-a4-2022.svg', '/images/cars/toyota-camry-2023.svg'],
        fullDescription: 'Mercedes-Benz C-Class 2023 - элегантный седан премиум-класса с современным дизайном и передовыми технологиями.',
        features: [
          'Кожаный салон',
          'Панорамная крыша',
          'Камера заднего вида',
          'Круиз-контроль',
          'Подогрев и вентиляция сидений',
          'MBUX мультимедиа'
        ]
      },
      4: {
        id: 4,
        name: 'Audi A4 2022',
        price: 2800000,
        year: 2022,
        mileage: 20000,
        fuel: 'Бензин',
        transmission: 'Автомат',
        drive: 'Полный',
        engine: '2.0 л',
        image: '/images/cars/audi-a4-2022.svg',
        images: ['/images/cars/audi-a4-2022.svg', '/images/cars/vw-passat-2021.svg', '/images/cars/mercedes-c-class-2023.svg'],
        fullDescription: 'Audi A4 2022 - спортивный седан с современными технологиями и отличной динамикой.',
        features: [
          'Кожаный салон',
          'Панорамная крыша',
          'Камера заднего вида',
          'Круиз-контроль',
          'Подогрев сидений',
          'Virtual Cockpit'
        ]
      },
      5: {
        id: 5,
        name: 'Volkswagen Passat 2021',
        price: 1800000,
        year: 2021,
        mileage: 35000,
        fuel: 'Дизель',
        transmission: 'Автомат',
        drive: 'Передний',
        engine: '2.0 л',
        image: '/images/cars/vw-passat-2021.svg',
        images: ['/images/cars/vw-passat-2021.svg', '/images/cars/audi-a4-2022.svg', '/images/cars/toyota-camry-2023.svg'],
        fullDescription: 'Volkswagen Passat 2021 - надежный семейный автомобиль с просторным салоном и экономичным дизельным двигателем.',
        features: [
          'Тканевый салон',
          'Климат-контроль',
          'Камера заднего вида',
          'Круиз-контроль',
          'Подогрев сидений',
          'Мультимедиа система'
        ]
      },
      6: {
        id: 6,
        name: 'Toyota RAV4 2023',
        price: 2900000,
        year: 2023,
        mileage: 8000,
        fuel: 'Гибрид',
        transmission: 'Вариатор',
        drive: 'Полный',
        engine: '2.5 л',
        image: '/images/cars/toyota-rav4-2023.svg',
        images: ['/images/cars/toyota-rav4-2023.svg', '/images/cars/lexus-rx-2022.svg', '/images/cars/bmw-x5-2022.svg'],
        fullDescription: 'Toyota RAV4 2023 - экономичный кроссовер с гибридной установкой, обеспечивающей отличную экономию топлива и экологичность.',
        features: [
          'Кожаный салон',
          'Панорамная крыша',
          '360° камеры',
          'Адаптивный круиз-контроль',
          'Подогрев и вентиляция сидений',
          'Apple CarPlay / Android Auto'
        ]
      },
      7: {
        id: 7,
        name: 'Lexus RX 2022',
        price: 4200000,
        year: 2022,
        mileage: 18000,
        fuel: 'Бензин',
        transmission: 'Автомат',
        drive: 'Полный',
        engine: '3.5 л',
        image: '/images/cars/lexus-rx-2022.svg',
        images: ['/images/cars/lexus-rx-2022.svg', '/images/cars/toyota-rav4-2023.svg', '/images/cars/toyota-camry-2023.svg'],
        fullDescription: 'Lexus RX 2022 - роскошный кроссовер с премиальной отделкой и высоким уровнем комфорта.',
        features: [
          'Салон из перфорированной кожи',
          'Премиальная акустика Mark Levinson',
          'Системы удержания в полосе и предотвращения столкновений',
          'Обогрев рулевого колеса и сидений',
          'Память настроек водительского сиденья',
          'Полный привод E-Four'
        ]
      },
      8: {
        id: 8,
        name: 'Hyundai Tucson 2023',
        price: 2200000,
        year: 2023,
        mileage: 12000,
        fuel: 'Бензин',
        transmission: 'Автомат',
        drive: 'Полный',
        engine: '2.0 л',
        image: '/images/cars/hyundai-tucson-2023.svg',
        images: ['/images/cars/hyundai-tucson-2023.svg', '/images/cars/kia-sportage-2022.svg', '/images/cars/nissan-qashqai-2023.svg'],
        fullDescription: 'Hyundai Tucson 2023 - современный кроссовер с богатой комплектацией и ярким дизайном.',
        features: [
          'Полный пакет систем SmartSense',
          'Обогрев всех сидений и руля',
          'Двухзонный климат-контроль',
          'Система выбора режима движения',
          'Светодиодная оптика',
          'Мультимедиа с поддержкой CarPlay'
        ]
      },
      9: {
        id: 9,
        name: 'Kia Sportage 2022',
        price: 2100000,
        year: 2022,
        mileage: 22000,
        fuel: 'Бензин',
        transmission: 'Автомат',
        drive: 'Полный',
        engine: '2.4 л',
        image: '/images/cars/kia-sportage-2022.svg',
        images: ['/images/cars/kia-sportage-2022.svg', '/images/cars/hyundai-tucson-2023.svg', '/images/cars/mazda-cx5-2022.svg'],
        fullDescription: 'Kia Sportage 2022 - стильный кроссовер с отличной проходимостью и просторным салоном.',
        features: [
          'Система кругового обзора',
          'Ассистент спуска с горы',
          'Обогрев лобового стекла и зеркал',
          'Проекционный дисплей',
          'Светодиодные фары',
          'Управление мультимедиа с руля'
        ]
      },
      10: {
        id: 10,
        name: 'Nissan Qashqai 2023',
        price: 2400000,
        year: 2023,
        mileage: 9000,
        fuel: 'Бензин',
        transmission: 'Вариатор',
        drive: 'Передний',
        engine: '1.3 л',
        image: '/images/cars/nissan-qashqai-2023.svg',
        images: ['/images/cars/nissan-qashqai-2023.svg', '/images/cars/hyundai-tucson-2023.svg', '/images/cars/kia-sportage-2022.svg'],
        fullDescription: 'Nissan Qashqai 2023 - популярный кроссовер с экономичным двигателем и современными системами безопасности.',
        features: [
          'Системы ProPILOT и предупреждение фронтальных столкновений',
          'Круиз-контроль с ограничителем скорости',
          'Обогрев передних и задних сидений',
          'Светодиодные фары и ДХО',
          'Мультимедиа NissanConnect',
          'Парктроники по кругу'
        ]
      },
      11: {
        id: 11,
        name: 'Mazda CX-5 2022',
        price: 2600000,
        year: 2022,
        mileage: 16000,
        fuel: 'Бензин',
        transmission: 'Автомат',
        drive: 'Полный',
        engine: '2.5 л',
        image: '/images/cars/mazda-cx5-2022.svg',
        images: ['/images/cars/mazda-cx5-2022.svg', '/images/cars/kia-sportage-2022.svg', '/images/cars/bmw-x5-2022.svg'],
        fullDescription: 'Mazda CX-5 2022 - динамичный кроссовер с отличной управляемостью и эффектным дизайном.',
        features: [
          'Система G-Vectoring Control',
          'Кожаный салон Nappa',
          'Проекционный дисплей',
          'Адаптивные LED фары',
          'Память настроек сидений',
          'Аудиосистема Bose'
        ]
      },
      12: {
        id: 12,
        name: 'Ford Explorer 2021',
        price: 3500000,
        year: 2021,
        mileage: 28000,
        fuel: 'Бензин',
        transmission: 'Автомат',
        drive: 'Полный',
        engine: '3.0 л',
        image: '/images/cars/ford-explorer-2021.svg',
        images: ['/images/cars/ford-explorer-2021.svg', '/images/cars/bmw-x5-2022.svg', '/images/cars/lexus-rx-2022.svg'],
        fullDescription: 'Ford Explorer 2021 - просторный внедорожник для всей семьи с современными системами безопасности.',
        features: [
          'Трехзонный климат-контроль',
          'Система Terrain Management',
          'Камеры кругового обзора',
          'Фронтальный и задний парктроник',
          'Электропривод пятой двери',
          'Панорамная крыша'
        ]
      }
    }
    
    const formatPrice = (price) => {
      return new Intl.NumberFormat('ru-RU').format(price)
    }
    
    onMounted(() => {
      const carId = parseInt(route.params.id)
      car.value = carsData[carId] || null
      if (car.value) {
        currentImage.value = car.value.image
      }
    })
    
    return {
      car,
      currentImage,
      formatPrice
    }
  }
}
</script>

<style scoped>
.back-btn {
  background: none;
  border: none;
  color: var(--primary-color);
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem 0;
  margin-bottom: 2rem;
  transition: color 0.3s;
}

.back-btn:hover {
  color: #2980b9;
}

.car-detail-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.car-images {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.main-image {
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 10px;
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-gallery {
  display: flex;
  gap: 0.5rem;
}

.gallery-thumb {
  width: 100px;
  height: 70px;
  overflow: hidden;
  border-radius: 5px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.3s;
}

.gallery-thumb:hover {
  border-color: var(--primary-color);
}

.gallery-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.car-details h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--secondary-color);
}

.car-price-large {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 2rem;
}

.car-specs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: var(--bg-color);
  border-radius: 10px;
}

.spec-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.spec-label {
  font-size: 0.9rem;
  color: #7f8c8d;
}

.spec-value {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--secondary-color);
}

.car-description-section,
.car-features {
  margin-bottom: 2rem;
}

.car-description-section h2,
.car-features h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--secondary-color);
}

.car-description-section p {
  line-height: 1.8;
  color: #555;
}

.car-features ul {
  list-style: none;
  padding: 0;
}

.car-features li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #555;
}

.car-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}

.contact-section {
  padding: 2rem;
  background: var(--bg-color);
  border-radius: 10px;
}

.contact-section h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--secondary-color);
}

.contact-section p {
  margin-bottom: 1.5rem;
  color: #555;
}

.contact-buttons {
  display: flex;
  gap: 1rem;
}

@media (max-width: 968px) {
  .car-detail-content {
    grid-template-columns: 1fr;
  }
  
  .car-specs-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-buttons {
    flex-direction: column;
  }
}
</style>

