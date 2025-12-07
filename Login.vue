<template>
  <div class="login-page">
    <div class="container">
      <div class="login-container">
        <h1 class="page-title">Вход</h1>
        <div class="register-prompt">
          <p>Еще нет аккаунта? Создайте его.</p>
          <router-link to="/register" class="register-link">Регистрация здесь!</router-link>
        </div>
        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group">
            <label for="email">Email</label>
            <div class="input-wrapper">
              <span class="input-icon">✉️</span>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                placeholder="Введите email"
                class="form-input"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <div class="input-wrapper">
              <span class="input-icon">🔒</span>
              <input 
                type="password" 
                id="password" 
                v-model="form.password" 
                placeholder="Введите пароль"
                class="form-input"
                required
              />
            </div>
          </div>
          <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
          <button type="submit" class="btn btn-login" :disabled="isLoading">
            {{ isLoading ? 'Вход...' : 'Войти' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { loginUser } from '@/utils/auth'

export default {
  name: 'Login',
  setup() {
    const router = useRouter()
    const form = ref({
      email: '',
      password: ''
    })
    
    const errorMessage = ref('')
    const isLoading = ref(false)
    
    const handleLogin = () => {
      errorMessage.value = ''
      
      if (!form.value.email || !form.value.password) {
        errorMessage.value = 'Заполните все поля'
        return
      }
      
      isLoading.value = true
      
      // Авторизация
      const result = loginUser(form.value.email, form.value.password)
      
      isLoading.value = false
      
      if (result.success) {
        alert('Вход выполнен успешно!')
        router.push('/')
      } else {
        errorMessage.value = result.message
      }
    }
    
    return {
      form,
      errorMessage,
      isLoading,
      handleLogin
    }
  }
}
</script>

<style scoped>
.login-page {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
  background: white;
}

.login-container {
  max-width: 500px;
  width: 100%;
  padding: 3rem;
  background: white;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
}

.register-prompt {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.register-link {
  color: var(--red-color);
  text-decoration: none;
  font-weight: 600;
}

.register-link:hover {
  text-decoration: underline;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  color: var(--grey-color);
  font-size: 0.9rem;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 1rem;
  font-size: 1.2rem;
  z-index: 1;
}

.form-input {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: none;
  border-bottom: 2px solid #e0e0e0;
  font-size: 1rem;
  transition: border-color 0.3s;
  background: transparent;
}

.form-input:focus {
  outline: none;
  border-bottom-color: var(--red-color);
}

.error-message {
  color: var(--red-color);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  text-align: center;
}

.btn-login {
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  margin-top: 1rem;
}

.btn-login:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>

