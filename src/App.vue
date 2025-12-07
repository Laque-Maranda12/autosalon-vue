<template>
  <div class="app-shell">
    <SiteHeader />
    <main class="app-shell__content">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import SiteHeader from './components/SiteHeader.vue';
import SiteFooter from './components/SiteFooter.vue';
</script>

<style>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f5f5f7;
  color: #111217;
}

.app-shell__content {
  flex: 1;
}
</style>
