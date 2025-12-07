<template>
  <div class="page">
    <header class="topbar">
      <div class="container topbar__inner">
        <div class="brand">АВТОМИР</div>
        <nav class="nav">
          <a v-for="item in navLinks" :key="item.href" class="nav__link" :href="item.href">{{ item.label }}</a>
        </nav>
        <div class="topbar__auth">
          <a class="nav__link" href="#">Регистрация</a>
          <a class="nav__link" href="#">Авторизация</a>
        </div>
      </div>
    </header>

    <main>
      <section id="hero" class="hero hero--light">
        <div class="container hero__grid">
          <div class="hero__content">
            <div class="badge">Автомобили под ключ</div>
            <h1>Купите автомобиль дешевле на 60%*</h1>
            <p>Привезём автомобили под ключ со всеми документами. Подбор автомобилей под любой запрос. Бесплатно.</p>
            <div class="hero__actions">
              <a class="btn btn-primary" href="#catalog">Каталог</a>
            </div>
          </div>
          <div class="hero__image">
            <img src="/images/hero/hero-car.svg" alt="Jaguar F-Type" />
          </div>
        </div>
      </section>

      <section class="hero hero--dark">
        <div class="container hero__grid hero__grid--reverse">
          <div class="hero__content">
            <div class="badge badge--dark">Подбор без посредников</div>
            <h1 class="hero--dark__title">Автомобили в наличии и на заказ</h1>
            <p>Найдём оптимальный вариант под ваш бюджет и оформим доставку до двери с полным пакетом документов.</p>
            <div class="hero__actions">
              <a class="btn btn-outline" href="#consult">Оставить заявку</a>
            </div>
          </div>
          <div class="hero__image hero__image--shadow">
            <img src="/images/hero/hero-car.svg" alt="Автомобиль" />
          </div>
        </div>
      </section>

      <section id="consult" class="consult">
        <div class="consult__bg"></div>
        <div class="container consult__grid">
          <div class="card consult__card">
            <h3>Только телефон, и мы в деле</h3>
            <p class="muted">Специалист перезвонит вам в течение 5 минут и проведет вас по стоимости деталей.</p>
            <label class="input-label" for="phone">Введите свой телефон</label>
            <input id="phone" class="input" type="tel" placeholder="+7 (927) 666-52-27" />
            <button class="btn btn-primary btn-block">Получить консультацию</button>
            <div class="muted small">Свяжемся с вами через мессенджер</div>
            <div class="chip-row">
              <span class="chip">Whatsapp</span>
              <span class="chip">Telegram</span>
            </div>
          </div>
          <div class="card consult__card">
            <h3>Точный расчет стоимости уже через 1 час</h3>
            <ul class="checklist">
              <li>Расскажем, какие автомобили выгоднее купить</li>
              <li>Отправим подборку вариантов в WhatsApp или Telegram</li>
              <li>Сделаем точный расчёт с учетом доставки, растаможки и всех расходов</li>
            </ul>
            <button class="btn btn-outline btn-block">Узнать стоимость</button>
          </div>
        </div>
      </section>

      <section class="offers">
        <div class="container">
          <div class="section-heading">
            <h2>Поможем вам выгодно купить и привезти автомобиль в любую точку России</h2>
            <p class="muted">Предлагаем купить автомобиль дешевле и лучше, за тот же бюджет</p>
            <a class="btn btn-primary" href="#contact">Оставить заявку</a>
          </div>
          <div class="offer-cards">
            <article class="card offer-card" v-for="offer in offers" :key="offer.title">
              <div class="offer-card__icon" :style="{ background: offer.tint }" aria-hidden="true">
                <img :src="offer.icon" :alt="offer.label" loading="lazy" />
              </div>
              <h3>{{ offer.title }}</h3>
              <p>{{ offer.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="catalog" class="catalog">
        <div class="container">
          <div class="section-heading section-heading--left">
            <h2>Какие авто привозим?</h2>
            <p class="muted">Привозим авто не старше 7 лет на момент растаможки.</p>
          </div>
          <div class="catalog__cards">
            <article class="card car-card" v-for="car in cars" :key="car.name">
              <div class="car-card__media">
                <img :src="car.image" :alt="car.name" loading="lazy" />
              </div>
              <div class="car-card__body">
                <h3>{{ car.name }}</h3>
                <div class="car-card__specs">
                  <div class="spec"><span>Пробег</span><strong>{{ car.mileage }}</strong></div>
                  <div class="spec"><span>Двигатель</span><strong>{{ car.engine }}</strong></div>
                  <div class="spec"><span>Мощность</span><strong>{{ car.power }}</strong></div>
                  <div class="spec"><span>Коробка</span><strong>{{ car.gearbox }}</strong></div>
                </div>
                <div class="car-card__prices">
                  <div>
                    <div class="muted small">Цена на аукционе</div>
                    <div class="price">{{ car.auctionPrice }}</div>
                  </div>
                  <div class="car-card__total">
                    <div class="muted small">Цена под ключ</div>
                    <div class="price price--accent">{{ car.totalPrice }}</div>
                  </div>
                </div>
                <button class="btn btn-primary btn-block">Оставить заявку</button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="about" class="about">
        <div class="container about__grid">
          <div class="about__image">
            <img src="/images/about/team.svg" alt="Команда в офисе" loading="lazy" />
          </div>
          <div class="about__content">
            <h2>О нас</h2>
            <p>Мы автосалон и официальный партнёр крупных мировых авто-аукционов: IAA, Copart, Manheim.</p>
            <ul class="checklist">
              <li>Работаем без посредников</li>
              <li>Успешный опыт 10 лет</li>
              <li>Отлаженная логистика</li>
            </ul>
            <blockquote class="note">Мы берём на себя полное сопровождение сделки до передачи автомобиля в руки клиента.</blockquote>
            <button class="btn btn-primary">Оставить заявку</button>
          </div>
        </div>
      </section>

      <section id="guarantees" class="guarantees">
        <div class="container">
          <h2 class="guarantees__title">Наши гарантии</h2>
          <div class="guarantees__grid">
            <div class="card guarantee" v-for="item in guarantees" :key="item">
              <div class="dot"></div>
              <p>{{ item }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="advantages">
        <div class="advantages__bg"></div>
        <div class="container">
          <h2 class="advantages__title">Преимущества авто из США</h2>
          <div class="advantages__grid">
            <article class="card advantage" v-for="adv in advantages" :key="adv.title">
              <h3>{{ adv.title }}</h3>
              <p>{{ adv.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="faq" class="faq">
        <div class="container">
          <h2 class="faq__title">Частые вопросы</h2>
          <div class="faq__list">
            <details v-for="item in faq" :key="item.q" class="faq__item">
              <summary>
                <span>{{ item.q }}</span>
                <span class="plus">+</span>
              </summary>
              <p>{{ item.a }}</p>
            </details>
          </div>
        </div>
      </section>

      <section id="contact" class="contacts">
        <div class="container contacts__grid">
          <div class="contacts__info">
            <h2>Наши контакты</h2>
            <div class="contact-row"><span>Адрес:</span><strong>428000, г. Чебоксары, Марпосадское шоссе, 14</strong></div>
            <div class="contact-row"><span>Время работы:</span><strong>Ежедневно 10:00 до 19:00</strong></div>
            <div class="contact-row"><span>Телефоны:</span><strong>8 927 997 12 42, 8 927 997 12 42</strong></div>
            <div class="contact-row"><span>E-mail:</span><strong>carmat21@lfaauto.ru</strong></div>
            <div class="contact-row"><span>Соц. сети:</span><strong>VK, Telegram, YouTube</strong></div>
          </div>
          <div class="contacts__map">
            <img
              src="https://static-maps.yandex.ru/1.x/?lang=ru_RU&ll=47.266,56.136&z=14&size=650,400&l=map&pt=47.266,56.136,pm2rdm"
              alt="Карта офиса"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container footer__inner">
        <div class="brand">АВТОМИР</div>
        <div class="muted small">© 2024 Автомобили под ключ. Все права защищены.</div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const navLinks = [
  { label: 'О нас', href: '#about' },
  { label: 'Как скоро', href: '#consult' },
  { label: 'Преимущества', href: '#guarantees' },
  { label: 'Каталог', href: '#catalog' },
  { label: 'Отзывы', href: '#faq' },
  { label: 'Контакты', href: '#contact' }
];

const offers = [
  { title: 'С пробегом', text: 'Предлагаем купить автомобили дешевле до 60%, под ключ', label: 'С пробегом', tint: '#fde6eb', icon: '/images/icons/auction.svg' },
  { title: 'Новые', text: 'Выбираем новые авто с наилучшим оснащением', label: 'Новые', tint: '#e9f4ff', icon: '/images/icons/new.svg' },
  { title: 'Под ваш бюджет', text: 'Подберём авто до 60% дешевле, чем на вторичке', label: 'Бюджет', tint: '#f4f9ec', icon: '/images/icons/wallet.svg' }
];

const cars = [
  {
    name: 'Toyota RAV4 2022',
    mileage: '5 700 км',
    engine: '2.0',
    power: '149 л.с.',
    gearbox: 'Автомат',
    auctionPrice: '3 000 000 ₽',
    totalPrice: '2 700 000 ₽',
    image: '/images/cars/toyota-rav4-2022.svg'
  },
  {
    name: 'Audi Q5 2021',
    mileage: '5 700 км',
    engine: '2.0',
    power: '249 л.с.',
    gearbox: 'Автомат',
    auctionPrice: '2 350 000 ₽',
    totalPrice: '2 200 000 ₽',
    image: '/images/cars/audi-q5-2021.svg'
  },
  {
    name: 'Honda CR-V 2021',
    mileage: '5 700 км',
    engine: '2.0',
    power: '149 л.с.',
    gearbox: 'Автомат',
    auctionPrice: '2 400 000 ₽',
    totalPrice: '2 100 000 ₽',
    image: '/images/cars/honda-cr-v-2021.svg'
  },
  {
    name: 'Jaguar F-Type',
    mileage: '5 700 км',
    engine: '3.0',
    power: '300 л.с.',
    gearbox: 'Автомат',
    auctionPrice: '3 450 000 ₽',
    totalPrice: '3 000 000 ₽',
    image: '/images/cars/jaguar-f-type.svg'
  }
];

const guarantees = [
  '100% возврат предоплаты',
  'Работаем по договору',
  'Без мелкого шрифта',
  'Оплата в нашем автосалоне или на счёт компании',
  'Качество автомобилей',
  'На всех этапах сделки автомобили застрахованы',
  'Юридическая прозрачность',
  'Отчётность по каждому этапу'
];

const advantages = [
  { title: 'Высокое качество', text: 'Автомобили из США — победители аукционов, сохраняем лучшие варианты.' },
  { title: 'Богатая комплектация', text: 'Часто выше, чем у европейских аналогов, с расширенными пакетами.' },
  { title: 'Низкая цена', text: 'Учитываем все затраты заранее и предлагаем лучшие условия покупки.' },
  { title: 'Отличное состояние', text: 'Подбираем проверенные авто и оформляем безопасную доставку.' }
];

const faq = [
  { q: 'Какие способы оплаты у вас?', a: 'Можно оплатить на расчётный счёт компании или в кассу автосалона.' },
  { q: 'Какие автомобили вы доставляете?', a: 'Доставляем новые и подержанные авто не старше 7 лет с аукционов и салонов.' },
  { q: 'Могу ли я купить через вас запчасти?', a: 'Да, подберём запчасти и оформим доставку вместе с автомобилем.' },
  { q: 'Какие гарантии, что во время доставки с автомобилем ничего не произойдёт?', a: 'На всех этапах сделка застрахована, предоставляем отчёты и фотофиксацию.' },
  { q: 'В какие города России вы осуществляете доставку автомобиля?', a: 'Доставляем по всей России до удобного для вас города.' },
  { q: 'Какие сроки доставки автомобиля?', a: 'В среднем от 4 до 8 недель в зависимости от локации и маршрута.' }
];
</script>
