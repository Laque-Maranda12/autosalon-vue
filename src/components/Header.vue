<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <router-link to="/" class="logo">
          <div class="logo-icon">M</div>
          <h1>АВТОМИР</h1>
        </router-link>
        <nav class="nav">
          <router-link to="/about" class="nav-link">О нас</router-link>
          <router-link to="/catalog" class="nav-link">Каталог</router-link>
          <router-link to="/how-to-buy" class="nav-link">Как купить</router-link>
          <router-link to="/advantages" class="nav-link">Преимущества</router-link>
          <router-link to="/reviews" class="nav-link">Отзывы</router-link>
          <router-link to="/contact" class="nav-link">Контакты</router-link>
        </nav>
        <div class="auth-links">
          <div v-if="currentUser" class="user-info">
            <span class="user-name">{{ currentUser.username }}</span>
            <button @click="handleLogout" class="btn-logout">Выйти</button>
          </div>
          <template v-else>
            <router-link to="/register" class="auth-link">Регистрация</router-link>
            <router-link to="/login" class="auth-link">Авторизация</router-link>
          </template>
        </div>
        <button class="menu-toggle" @click="toggleMenu" aria-label="Меню">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <nav class="nav-mobile" :class="{ active: isMenuOpen }">
        <router-link to="/about" class="nav-link" @click="closeMenu">О нас</router-link>
        <router-link to="/catalog" class="nav-link" @click="closeMenu">Каталог</router-link>
        <router-link to="/how-to-buy" class="nav-link" @click="closeMenu">Как купить</router-link>
        <router-link to="/advantages" class="nav-link" @click="closeMenu">Преимущества</router-link>
        <router-link to="/reviews" class="nav-link" @click="closeMenu">Отзывы</router-link>
        <router-link to="/contact" class="nav-link" @click="closeMenu">Контакты</router-link>
        <router-link to="/register" class="nav-link" @click="closeMenu">Регистрация</router-link>
        <router-link to="/login" class="nav-link" @click="closeMenu">Авторизация</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { getCurrentUser, logoutUser } from '@/utils/auth'

export default {
  name: 'Header',
  setup() {
    const router = useRouter()
    const isMenuOpen = ref(false)
    const currentUser = ref(null)
    
    const updateUser = () => {
      currentUser.value = getCurrentUser()
    }
    
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }
    
    const closeMenu = () => {
      isMenuOpen.value = false
    }
    
    const handleLogout = () => {
      logoutUser()
      currentUser.value = null
      router.push('/')
    }
    
    onMounted(() => {
      updateUser()
      // Обновляем при изменении маршрута
      router.afterEach(() => {
        updateUser()
      })
    })
    
    return {
      isMenuOpen,
      currentUser,
      toggleMenu,
      closeMenu,
      handleLogout
    }
  }
}
</script>

<style scoped>
.header {
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}

.logo {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #95a5a6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
}

.logo h1 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #e74c3c;
  margin: 0;
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
  transition: color 0.3s;
  position: relative;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #e74c3c;
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background: #e74c3c;
}

.auth-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.auth-link {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
  transition: color 0.3s;
}

.auth-link:hover {
  color: #e74c3c;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-name {
  color: #2c3e50;
  font-weight: 500;
}

.btn-logout {
  background: transparent;
  border: 1px solid var(--red-color);
  color: var(--red-color);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s;
}

.btn-logout:hover {
  background: var(--red-color);
  color: white;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: #2c3e50;
  transition: all 0.3s;
}

.nav-mobile {
  display: none;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  border-top: 1px solid #eee;
}

.nav-mobile.active {
  display: flex;
}

@media (max-width: 968px) {
  .nav {
    display: none;
  }
  
  .auth-links {
    display: none;
  }
  
  .menu-toggle {
    display: flex;
  }
  
  .nav-mobile {
    display: none;
  }
}
</style>

