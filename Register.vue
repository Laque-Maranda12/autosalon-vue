<template>
  <div class="register-page">
    <div class="container">
      <div class="register-container">
        <h1 class="page-title">Регистрация</h1>
        <div class="login-prompt">
          <p>Уже есть аккаунт? Войдите.</p>
          <router-link to="/login" class="login-link">Или войдите на этой странице!</router-link>
        </div>
        <form @submit.prevent="handleRegister" class="register-form">
          <div class="form-group">
            <label for="email">Email</label>
            <div class="input-wrapper">
              <span class="input-icon">✉️</span>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                placeholder="Введите ваш email"
                class="form-input"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <label for="username">Username</label>
            <div class="input-wrapper">
              <span class="input-icon">👤</span>
              <input 
                type="text" 
                id="username" 
                v-model="form.username" 
                placeholder="Введите ваш логин"
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
          <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <div class="input-wrapper">
              <span class="input-icon">🔒</span>
              <input 
                type="password" 
                id="confirmPassword" 
                v-model="form.confirmPassword" 
                placeholder="Подтвердите пароль"
                class="form-input"
                required
              />
            </div>
          </div>
          <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
          <button type="submit" class="btn btn-register" :disabled="isLoading">
            {{ isLoading ? 'Регистрация...' : 'Зарегистрироваться' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { registerUser } from '@/utils/auth'

export default {
  name: 'Register',
  setup() {
    const router = useRouter()
    const form = ref({
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    })
    
    const errorMessage = ref('')
    const isLoading = ref(false)
    
    const handleRegister = () => {
      errorMessage.value = ''
      
      // Валидация
      if (!form.value.email || !form.value.username || !form.value.password) {
        errorMessage.value = 'Заполните все поля'
        return
      }
      
      if (form.value.password.length < 6) {
        errorMessage.value = 'Пароль должен быть не менее 6 символов'
        return
      }
      
      if (form.value.password !== form.value.confirmPassword) {
        errorMessage.value = 'Пароли не совпадают!'
        return
      }
      
      isLoading.value = true
      
      // Регистрация
      const result = registerUser({
        email: form.value.email,
        username: form.value.username,
        password: form.value.password
      })
      
      isLoading.value = false
      
      if (result.success) {
        alert('Регистрация успешна! Теперь вы можете войти.')
        router.push('/login')
      } else {
        errorMessage.value = result.message
      }
    }
    
    return {
      form,
      errorMessage,
      isLoading,
      handleRegister
    }
  }
}
</script>

<style scoped>
.register-page {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
  background: white;
}

.register-container {
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

.login-prompt {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.login-link {
  color: var(--red-color);
  text-decoration: none;
  font-weight: 600;
}

.login-link:hover {
  text-decoration: underline;
}

.register-form {
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

.btn-register {
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  margin-top: 1rem;
}

.btn-register:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>

