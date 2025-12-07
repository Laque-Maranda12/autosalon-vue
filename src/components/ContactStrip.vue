<template>
  <section class="contact-strip">
    <div class="container surface-card contact-strip__wrap">
      <div>
        <h3>Готовы обсудить детали?</h3>
        <p class="text-muted">Оставьте заявку, и менеджер подберёт авто без лишних эмодзи и затянутых презентаций.</p>
      </div>
      <RouterLink to="/contact" class="primary-button">Оставить заявку</RouterLink>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.contact-strip {
  margin: 18px 0 0;
}

.contact-strip__wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.contact-strip h3 {
  margin: 0 0 6px;
}

.contact-strip p {
  margin: 0;
}
</style>
