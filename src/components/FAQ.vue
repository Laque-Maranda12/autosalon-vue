<template>
  <section class="faq-section">
    <div class="container">
      <h2 class="section-title">Часто задаваемые вопросы</h2>
      <div class="faq-list">
        <div 
          v-for="(item, index) in faqItems" 
          :key="index"
          class="faq-item"
          :class="{ active: activeIndex === index }"
        >
          <div class="faq-question" @click="toggleItem(index)">
            <span>{{ item.question }}</span>
            <span class="faq-icon">{{ activeIndex === index ? '−' : '+' }}</span>
          </div>
          <div v-if="activeIndex === index" class="faq-answer">
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'FAQ',
  setup() {
    const activeIndex = ref(2) // По умолчанию открыт третий вопрос
    
    const faqItems = [
      {
        question: 'Какие способы оплаты у вас?',
        answer: 'Мы принимаем оплату наличными, банковским переводом, а также работаем с различными банковскими картами.'
      },
      {
        question: 'Какие автомобили вы доставляете?',
        answer: 'Мы доставляем автомобили различных марок и моделей из США. Привозим авто не старше 7 лет на момент растаможки.'
      },
      {
        question: 'Могу ли я купить через вас запчасти?',
        answer: 'Да, при покупке автомобиля с повреждениями, мы подберем для него запчасти.'
      },
      {
        question: 'Какие гарантии, что во время доставки с автомобилем ничего не произойдет?',
        answer: 'На всех этапах сделки автомобили застрахованы. Мы несем полную ответственность за сохранность автомобиля во время транспортировки.'
      },
      {
        question: 'Какие документы я получу в комплекте с автомобилем?',
        answer: 'Вы получите полный комплект документов: ПТС, СТС, договор купли-продажи и все необходимые справки.'
      },
      {
        question: 'В какие города России вы осуществляете доставку автомобиля?',
        answer: 'Мы осуществляем доставку автомобилей в любую точку России. Стоимость доставки рассчитывается индивидуально.'
      },
      {
        question: 'Какие сроки доставки автомобиля?',
        answer: 'Сроки доставки зависят от города назначения и составляют от 2 до 4 недель с момента оформления всех документов.'
      },
      {
        question: 'Можно ли вернуть автомобиль на аукцион после покупки?',
        answer: 'Возврат автомобиля возможен только в случае обнаружения существенных дефектов, не указанных в описании.'
      },
      {
        question: 'Какие сроки оплаты после выигрыша на аукционе?',
        answer: 'Оплата должна быть произведена в течение 5 рабочих дней после выигрыша на аукционе.'
      },
      {
        question: 'Что если я откажусь от покупки автомобиля?',
        answer: 'В случае отказа от покупки, предоплата возвращается в полном объеме согласно договору.'
      }
    ]
    
    const toggleItem = (index) => {
      activeIndex.value = activeIndex.value === index ? null : index
    }
    
    return {
      faqItems,
      activeIndex,
      toggleItem
    }
  }
}
</script>

<style scoped>
.faq-section {
  padding: 4rem 0;
  background: white;
}

.faq-list {
  max-width: 900px;
  margin: 0 auto;
}

.faq-item {
  border-bottom: 1px solid #e0e0e0;
  transition: all 0.3s;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  cursor: pointer;
  color: #2c3e50;
  font-weight: 500;
  font-size: 1.1rem;
}

.faq-question:hover {
  color: var(--red-color);
}

.faq-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--red-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  flex-shrink: 0;
  transition: all 0.3s;
}

.faq-item.active .faq-icon {
  background: #c0392b;
}

.faq-answer {
  padding: 0 0 1.5rem 0;
  color: #2c3e50;
  line-height: 1.8;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>




