<template>
  <div class="car-detail">
    <div v-if="car" class="section">
      <div class="container">
        <button @click="$router.back()" class="back-btn">← Назад</button>

        <div class="car-detail-content">
          <div class="car-images">
            <div class="main-image">
              <img
                :src="getImageSrc(currentImage || car.image)"
                :alt="car.name"
                @error="handleImageError"
              />
            </div>
            <div class="image-gallery">
              <div
                v-for="(img, index) in car.images"
                :key="index"
                class="gallery-thumb"
                @click="currentImage = img"
              >
                <img
                  :src="getImageSrc(img)"
                  :alt="`${car.name} ${index + 1}`"
                  @error="handleImageError"
                />
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
                <span class="spec-label">Двигатель:</span>
                <span class="spec-value">{{ car.engine }}</span>
              </div>
            </div>

            <div class="car-description">
              <h2>Описание</h2>
              <p>{{ car.fullDescription }}</p>
            </div>

            <div class="car-features">
              <h2>Особенности комплектации</h2>
              <ul>
                <li v-for="(feature, index) in car.features" :key="index">
                  {{ feature }}
                </li>
              </ul>
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
    const placeholder = '/images/cars/placeholder.svg'
    const galleryImages = [
      '/images/cars/toyota-rav4-2022.jpg',
      '/images/cars/audi-q5-2021.jpg',
      '/images/cars/honda-cr-v-2021.jpg'
    ]

    const getPrimaryImage = (carId) => galleryImages[(carId - 1) % galleryImages.length]

    // Один объект на машину, images = массив из одной картинки
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
        image: getPrimaryImage(1),
        images: galleryImages,
        fullDescription:
          'Toyota Camry 2023 года — современный седан, сочетающий комфорт, надежность и экономичность. Автомобиль оснащен передовыми технологиями безопасности и комфорта.',
        features: [
          'Кожаный салон',
          'Панорамная крыша',
          'Камера заднего вида',
          'Круиз-контроль',
          'Подогрев сидений',
          'Apple CarPlay / Android Auto',
          'Мультимедиа система'
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
        image: getPrimaryImage(2),
        images: galleryImages,
        fullDescription:
          'BMW X5 2022 — премиальный кроссовер с мощным двигателем, просторным салоном и богатым оснащением для города и трассы.',
        features: [
          'Кожаный салон премиум',
          'Пневмоподвеска',
          'Ассистент парковки',
          'Камеры кругового обзора',
          'Премиальная акустика',
          'Подогрев и вентиляция сидений',
          'Память настроек сидений',
          'Apple CarPlay / Android Auto'
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
        image: getPrimaryImage(3),
        images: galleryImages,
        fullDescription:
          'Mercedes-Benz C-Class 2023 — элегантный седан премиум-класса с современным дизайном и передовыми технологиями.',
        features: [
          'Кожаный салон',
          'Панорамная крыша',
          'Камера заднего вида',
          'Круиз-контроль',
          'Подогрев сидений',
          'Ассистент удержания полосы',
          'Премиальная акустика'
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
        drive: 'Передний',
        engine: '2.0 л',
        image: getPrimaryImage(4),
        images: galleryImages,
        fullDescription:
          'Audi A4 2022 — спортивный седан с современными технологиями и динамичной управляемостью.',
        features: [
          'Кожаный салон',
          'Матрикс-фары',
          'Ассистент парковки',
          'Камера заднего вида',
          'Подогрев сидений',
          'Круиз-контроль',
          'Мультимедиа MMI'
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
        image: getPrimaryImage(5),
        images: galleryImages,
        fullDescription:
          'Volkswagen Passat 2021 — надежный семейный автомобиль с просторным салоном и экономичным дизельным двигателем.',
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
        image: getPrimaryImage(6),
        images: galleryImages,
        fullDescription:
          'Toyota RAV4 2023 — экономичный кроссовер с гибридной установкой, обеспечивающей отличную экономию топлива и экологичность.',
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
        image: getPrimaryImage(7),
        images: galleryImages,
        fullDescription:
          'Lexus RX 2022 — роскошный кроссовер с высоким уровнем комфорта и надежности.',
        features: [
          'Кожаный салон',
          'Память сидений',
          'Адаптивные фары',
          'Премиальная акустика',
          'Обогрев руля',
          'Парктроники'
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
        drive: 'Передний',
        engine: '2.0 л',
        image: getPrimaryImage(8),
        images: galleryImages,
        fullDescription:
          'Hyundai Tucson 2023 — современный кроссовер с богатой комплектацией и свежим дизайном.',
        features: [
          'Камера заднего вида',
          'Обогрев сидений',
          'Полный пакет безопасности',
          'Мультимедиа с навигацией',
          'Датчики света и дождя',
          'Бесключевой доступ'
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
        drive: 'Передний',
        engine: '2.0 л',
        image: getPrimaryImage(9),
        images: galleryImages,
        fullDescription:
          'Kia Sportage 2022 — стильный кроссовер с отличной управляемостью и богатым оснащением.',
        features: [
          'Датчики парковки',
          'Система контроля слепых зон',
          'Климат-контроль',
          'Подогрев сидений и руля',
          'Светодиодные фары',
          'Навигация'
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
        engine: '2.0 л',
        image: getPrimaryImage(10),
        images: galleryImages,
        fullDescription:
          'Nissan Qashqai 2023 — популярный городской кроссовер с экономичным двигателем и современными ассистентами.',
        features: [
          'Панорамная крыша',
          'Камера кругового обзора',
          'Адаптивный круиз-контроль',
          'Климат-контроль',
          'Бесключевой доступ',
          'Android Auto / Apple CarPlay'
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
        image: getPrimaryImage(11),
        images: galleryImages,
        fullDescription:
          'Mazda CX-5 2022 — динамичный кроссовер с отличной управляемостью и стильным дизайном.',
        features: [
          'Система контроля тяги',
          'Кожаный салон',
          'Обогрев сидений',
          'Ассистенты безопасности',
          'Светодиодная оптика',
          'Премиальная акустика'
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
        image: getPrimaryImage(12),
        images: galleryImages,
        fullDescription:
          'Ford Explorer 2021 — просторный внедорожник для всей семьи с мощным двигателем и высоким уровнем безопасности.',
        features: [
          'Третий ряд сидений',
          'Полный привод',
          'Ассистент спуска',
          'Камера заднего вида',
          'Круиз-контроль',
          'Бесключевой доступ'
        ]
      }
    }

    const formatPrice = (price) => {
      return new Intl.NumberFormat('ru-RU').format(price)
    }

    const getImageSrc = (image) => image || placeholder

    const handleImageError = (event) => {
      event.target.src = placeholder
    }

    onMounted(() => {
      const carId = parseInt(route.params.id)
      car.value = carsData[carId] || null
      if (car.value) {
        currentImage.value = car.value.image || placeholder
      }
    })

    return {
      car,
      currentImage,
      formatPrice,
      getImageSrc,
      handleImageError
    }
  }
}
</script>
