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
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0ad6?w=1200&h=800&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1606664515524-ed2f786a0ad6?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop'
        ],
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
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=800&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1606664515524-ed2f786a0ad6?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop'
        ],
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
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&h=800&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1606664515524-ed2f786a0ad6?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop'
        ],
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
        image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&h=800&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1606664515524-ed2f786a0ad6?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop'
        ],
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
        image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=800&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1606664515524-ed2f786a0ad6?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop'
        ],
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
        image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&h=800&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1606664515524-ed2f786a0ad6?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop'
        ],
        fullDescription: 'Toyota RAV4 2023 - экономичный кроссовер с гибридной установкой, обеспечивающей отличную экономию топлива и экологичность.',
        features: [
          'Кожаный салон',
          'Панорамная крыша',
          '360° камеры',
          'Адаптивный круиз-контроль',
          'Подогрев и вентиляция сидений',
          'Apple CarPlay / Android Auto'
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

