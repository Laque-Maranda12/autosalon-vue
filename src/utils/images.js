
// Утилита для работы с изображениями автомобилей

// Базовый путь к изображениям
const IMAGES_BASE = '/images'
const PLACEHOLDER_IMAGE =
  'https://via.placeholder.com/600x400/ecf0f1/2c3e50?text=Автомобиль'

// Изображения автомобилей
export const carImages = {
  'toyota-rav4-2022': {
    main: `${IMAGES_BASE}/cars/toyota-rav4-2022.jpg`,
    gallery: [`${IMAGES_BASE}/cars/toyota-rav4-2022.jpg`]
  },
  'audi-q5-2021': {
    main: `${IMAGES_BASE}/cars/audi-q5-2021.jpg`,
    gallery: [`${IMAGES_BASE}/cars/audi-q5-2021.jpg`]
  },
  'honda-cr-v-2021': {
    main: `${IMAGES_BASE}/cars/honda-cr-v-2021.jpg`,
    gallery: [`${IMAGES_BASE}/cars/honda-cr-v-2021.jpg`]
  }
}

const getPlaceholderForType = (imageType) =>
  imageType === 'gallery' ? [PLACEHOLDER_IMAGE] : PLACEHOLDER_IMAGE

// Fallback на placeholder, если изображение не найдено
export const getCarImage = (carId, imageType = 'main') => {
  const car = carImages[carId]
  if (car && car[imageType]) {
    return car[imageType]
  }
  // Возвращаем placeholder, если изображение не найдено
  return getPlaceholderForType(imageType)
}

// Изображения для hero секции
export const heroImage = `${IMAGES_BASE}/hero/hero-car.jpg`

// Изображение для страницы "О нас"
export const aboutImage = `${IMAGES_BASE}/about/team.jpg`
