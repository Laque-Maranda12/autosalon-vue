<template>
  <div class="reviews-page">
    <section class="section">
      <div class="container">
        <h1 class="section-title">Отзывы</h1>
        <div class="reviews-grid">
          <div class="review-card" v-for="review in reviews" :key="review.id">
            <div class="review-header">
              <div class="review-author">{{ review.author }}</div>
              <div class="review-rating">
                <span
                  v-for="i in 5"
                  :key="i"
                  class="rating-symbol"
                  :class="{ filled: i <= review.rating }"
                  aria-hidden="true"
                >*</span>
              </div>
            </div>
            <p class="review-text">{{ review.text }}</p>
            <div class="review-date">{{ review.date }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Reviews',
  setup() {
    const reviews = [
      {
        id: 1,
        author: 'Иван Петров',
        rating: 5,
        text: 'Отличный сервис! Купил Toyota RAV4, все документы оформили быстро, доставили в срок. Машина в идеальном состоянии, цена действительно ниже рыночной на 60%. Рекомендую!',
        date: '15.01.2025'
      },
      {
        id: 2,
        author: 'Мария Сидорова',
        rating: 5,
        text: 'Очень довольна покупкой Audi Q5. Машина в отличном состоянии, цена ниже рыночной. Специалисты помогли на всех этапах, все прозрачно и честно. Спасибо!',
        date: '10.01.2025'
      },
      {
        id: 3,
        author: 'Алексей Иванов',
        rating: 5,
        text: 'Профессиональный подход, все этапы сделки прозрачны. Автомобиль Honda CR-V превзошел ожидания. Доставили точно в срок, все документы готовы.',
        date: '05.01.2025'
      },
      {
        id: 4,
        author: 'Дмитрий Козлов',
        rating: 5,
        text: 'Купил BMW X5 через этот автосалон. Экономия составила более 1.5 млн рублей по сравнению с российским рынком. Качество машины отличное, все работает как часы.',
        date: '28.12.2024'
      },
      {
        id: 5,
        author: 'Елена Волкова',
        rating: 5,
        text: 'Первый раз покупала машину из США. Очень переживала, но все прошло гладко. Mercedes C-Class просто шикарный, все опции на месте. Спасибо за профессионализм!',
        date: '20.12.2024'
      },
      {
        id: 6,
        author: 'Сергей Морозов',
        rating: 5,
        text: 'Отличная работа команды! Подобрали Lexus RX под мой бюджет, помогли с оформлением всех документов. Машина приехала в идеальном состоянии. Буду рекомендовать друзьям!',
        date: '12.12.2024'
      }
    ]
    
    return {
      reviews
    }
  }
}
</script>

<style scoped>
.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.review-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.review-author {
  font-weight: 700;
  color: #2c3e50;
  font-size: 1.1rem;
}

.review-rating {
  color: #d0d0d0;
  font-size: 1.2rem;
  letter-spacing: 0.05em;
}

.rating-symbol {
  display: inline-block;
  font-weight: 700;
}

.review-rating .filled {
  color: #ffc107;
}

.review-text {
  color: #2c3e50;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.review-date {
  color: var(--grey-color);
  font-size: 0.9rem;
}
</style>

