<template>
  <div class="how-to-buy">
    <section class="section">
      <div class="container">
        <h1 class="section-title">Как купить</h1>
        <div class="steps">
          <div class="step-card" v-for="(step, index) in steps" :key="index">
            <div class="step-number">{{ index + 1 }}</div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HowToBuy',
  setup() {
    const steps = [
      {
        title: 'Оставьте заявку',
        description: 'Заполните форму на сайте или свяжитесь с нами по телефону 8 927 997 12 42. Наш специалист свяжется с вами в течение 5 минут в рабочее время.'
      },
      {
        title: 'Подбор автомобиля',
        description: 'Наш специалист подберет для вас подходящий автомобиль из каталога аукционов США. Мы учитываем все ваши требования: бюджет, марку, модель, комплектацию.'
      },
      {
        title: 'Оформление документов',
        description: 'Мы берем на себя полное оформление всех документов: участие в аукционе, растаможивание, получение ПТС и СТС. Все прозрачно и по договору.'
      },
      {
        title: 'Оплата',
        description: 'Оплата производится в кассу нашего автосалона или на расчетный счет компании. Мы работаем без посредников, что гарантирует лучшие цены.'
      },
      {
        title: 'Доставка',
        description: 'Доставим автомобиль в любой город России. На всех этапах транспортировки автомобиль застрахован. Срок доставки: 2-4 недели.'
      },
      {
        title: 'Получение автомобиля',
        description: 'Вы получаете автомобиль "под ключ" со всеми документами. Мы предоставляем гарантию качества и полное сопровождение сделки.'
      }
    ]
    
    return {
      steps
    }
  }
}
</script>

<style scoped>
.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.step-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
}

.step-number {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--red-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 auto 1.5rem;
}

.step-card h3 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.step-card p {
  color: var(--grey-color);
  line-height: 1.6;
}
</style>

