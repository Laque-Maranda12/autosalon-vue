<template>
  <div class="catalog">
    <section class="section">
      <div class="container">
        <h1 class="section-title">Каталог автомобилей</h1>

        <div class="filters">
          <div class="filter-group">
            <label>Марка:</label>
            <select v-model="filters.brand" @change="applyFilters">
              <option value="">Все</option>
              <option value="Toyota">Toyota</option>
              <option value="BMW">BMW</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
              <option value="Audi">Audi</option>
              <option value="Volkswagen">Volkswagen</option>
            </select>
          </div>

          <div class="filter-group">
            <label>Цена от:</label>
            <input type="number" v-model.number="filters.minPrice" @input="applyFilters" placeholder="0" />
          </div>

          <div class="filter-group">
            <label>Цена до:</label>
            <input type="number" v-model.number="filters.maxPrice" @input="applyFilters" placeholder="10000000" />
          </div>

          <div class="filter-group">
            <label>Год от:</label>
            <input type="number" v-model.number="filters.minYear" @input="applyFilters" placeholder="2015" />
          </div>

          <button class="btn btn-outline" @click="resetFilters">Сбросить</button>
        </div>

        <div class="cars-grid">
          <div
            v-for="car in filteredCars"
            :key="car.id"
            class="car-card card"
            @click="goToCar(car.id)"
          >
            <div class="car-image">
              <img :src="getCarImage(car.image)" :alt="car.name" @error="handleImageError($event)" />
            </div>
            <div class="car-info">
              <h3>{{ car.name }}</h3>
              <p class="car-price">{{ formatPrice(car.price) }} ₽</p>
              <div class="car-specs">
                <span>{{ car.year }} год</span>
                <span>{{ car.mileage }} км</span>
                <span>{{ car.fuel }}</span>
              </div>
              <div class="car-description">
                {{ car.description }}
              </div>
            </div>
          </div>
        </div>

        <div v-if="filteredCars.length === 0" class="no-results">
          <p>Автомобили не найдены. Попробуйте изменить фильтры.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Catalog',
  setup() {
    const router = useRouter()
    const placeholder = '/images/cars/placeholder.svg'
    const galleryImages = [
      '/images/cars/toyota-rav4-2022.jpg',
      '/images/cars/audi-q5-2021.jpg',
      '/images/cars/honda-cr-v-2021.jpg'
    ]

    const getPrimaryImage = (carId) => galleryImages[(carId - 1) % galleryImages.length]

    const filters = ref({
      brand: '',
      minPrice: null,
      maxPrice: null,
      minYear: null
    })

    const cars = ref([
      {
        id: 1,
        name: 'Toyota Camry 2023',
        brand: 'Toyota',
        price: 2500000,
        year: 2023,
        mileage: 15000,
        fuel: 'Бензин',
        description: 'Комфортный седан с отличной экономичностью',
        image: getPrimaryImage(1)
      },
      {
        id: 2,
        name: 'BMW X5 2022',
        brand: 'BMW',
        price: 4500000,
        year: 2022,
        mileage: 25000,
        fuel: 'Бензин',
        description: 'Премиальный кроссовер с мощным двигателем',
        image: getPrimaryImage(2)
      },
      {
        id: 3,
        name: 'Mercedes-Benz C-Class 2023',
        brand: 'Mercedes-Benz',
        price: 3200000,
        year: 2023,
        mileage: 10000,
        fuel: 'Бензин',
        description: 'Элегантный седан премиум-класса',
        image: getPrimaryImage(3)
      },
      {
        id: 4,
        name: 'Audi A4 2022',
        brand: 'Audi',
        price: 2800000,
        year: 2022,
        mileage: 20000,
        fuel: 'Бензин',
        description: 'Спортивный седан с современными технологиями',
        image: getPrimaryImage(4)
      },
      {
        id: 5,
        name: 'Volkswagen Passat 2021',
        brand: 'Volkswagen',
        price: 1800000,
        year: 2021,
        mileage: 35000,
        fuel: 'Дизель',
        description: 'Надежный семейный автомобиль',
        image: getPrimaryImage(5)
      },
      {
        id: 6,
        name: 'Toyota RAV4 2023',
        brand: 'Toyota',
        price: 2900000,
        year: 2023,
        mileage: 8000,
        fuel: 'Гибрид',
        description: 'Экономичный кроссовер с гибридной установкой',
        image: getPrimaryImage(6)
      },
      {
        id: 7,
        name: 'Lexus RX 2022',
        brand: 'Lexus',
        price: 4200000,
        year: 2022,
        mileage: 18000,
        fuel: 'Бензин',
        description: 'Роскошный кроссовер с премиальной отделкой',
        image: getPrimaryImage(7)
      },
      {
        id: 8,
        name: 'Hyundai Tucson 2023',
        brand: 'Hyundai',
        price: 2200000,
        year: 2023,
        mileage: 12000,
        fuel: 'Бензин',
        description: 'Современный кроссовер с богатой комплектацией',
        image: getPrimaryImage(8)
      },
      {
        id: 9,
        name: 'Kia Sportage 2022',
        brand: 'Kia',
        price: 2100000,
        year: 2022,
        mileage: 22000,
        fuel: 'Бензин',
        description: 'Стильный кроссовер с отличной проходимостью',
        image: getPrimaryImage(9)
      },
      {
        id: 10,
        name: 'Nissan Qashqai 2023',
        brand: 'Nissan',
        price: 2400000,
        year: 2023,
        mileage: 9000,
        fuel: 'Бензин',
        description: 'Популярный кроссовер с надежным двигателем',
        image: getPrimaryImage(10)
      },
      {
        id: 11,
        name: 'Mazda CX-5 2022',
        brand: 'Mazda',
        price: 2600000,
        year: 2022,
        mileage: 16000,
        fuel: 'Бензин',
        description: 'Динамичный кроссовер с отличной управляемостью',
        image: getPrimaryImage(11)
      },
      {
        id: 12,
        name: 'Ford Explorer 2021',
        brand: 'Ford',
        price: 3500000,
        year: 2021,
        mileage: 28000,
        fuel: 'Бензин',
        description: 'Просторный внедорожник для всей семьи',
        image: getPrimaryImage(12)
      }
    ])

    const filteredCars = computed(() => {
      return cars.value.filter(car => {
        if (filters.value.brand && car.brand !== filters.value.brand) {
          return false
        }
        if (filters.value.minPrice && car.price < filters.value.minPrice) {
          return false
        }
        if (filters.value.maxPrice && car.price > filters.value.maxPrice) {
          return false
        }
        if (filters.value.minYear && car.year < filters.value.minYear) {
          return false
        }
        return true
      })
    })

    const formatPrice = (price) => {
      return new Intl.NumberFormat('ru-RU').format(price)
    }

    const goToCar = (id) => {
      router.push(`/car/${id}`)
    }

    const applyFilters = () => {
      // Фильтры применяются автоматически через computed
    }

    const resetFilters = () => {
      filters.value = {
        brand: '',
        minPrice: null,
        maxPrice: null,
        minYear: null
      }
    }

    const getCarImage = (image) => image || placeholder

    const handleImageError = (event) => {
      event.target.src = placeholder
    }

    return {
      filters,
      cars,
      filteredCars,
      formatPrice,
      goToCar,
      applyFilters,
      resetFilters,
      handleImageError,
      getCarImage
    }
  }
}
</script>

<style scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
  padding: 1.5rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.filter-group label {
  font-weight: 500;
  color: var(--secondary-color);
}

.filter-group select,
.filter-group input {
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  font-size: 1rem;
}

.cars-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.car-card {
  cursor: pointer;
}

.car-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.car-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.car-card:hover .car-image img {
  transform: scale(1.1);
}

.car-info {
  padding: 1.5rem;
}

.car-info h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--secondary-color);
}

.car-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.car-specs {
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  color: #7f8c8d;
  margin-bottom: 1rem;
}

.car-description {
  color: #7f8c8d;
  font-size: 0.9rem;
  line-height: 1.5;
}

.no-results {
  text-align: center;
  padding: 3rem;
  color: #7f8c8d;
}

@media (max-width: 768px) {
  .filters {
    flex-direction: column;
  }

  .cars-grid {
    grid-template-columns: 1fr;
  }
}
</style>
