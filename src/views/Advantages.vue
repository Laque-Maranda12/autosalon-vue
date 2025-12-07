<template>
  <div class="advantages-page">
    <section class="section">
      <div class="container">
        <h1 class="section-title">Преимущества</h1>
        <div class="advantages-grid">
          <div class="advantage-card" v-for="advantage in advantages" :key="advantage.id">
            <h3>{{ advantage.title }}</h3>
            <p>{{ advantage.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Advantages',
  setup() {
    const advantages = [
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
    ]
    
    return {
      advantages
    }
  }
}
</script>

<style scoped>
.advantages-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
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

@media (max-width: 768px) {
  .advantages-grid {
    grid-template-columns: 1fr;
  }
}
</style>




