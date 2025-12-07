// Утилита для работы с авторизацией

const STORAGE_KEY = 'avtomir_users'
const CURRENT_USER_KEY = 'avtomir_current_user'

// Получить всех пользователей
export const getUsers = () => {
  const users = localStorage.getItem(STORAGE_KEY)
  return users ? JSON.parse(users) : []
}

// Сохранить пользователей
export const saveUsers = (users) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users))
}

// Регистрация нового пользователя
export const registerUser = (userData) => {
  const users = getUsers()
  
  // Проверка на существующего пользователя
  const existingUser = users.find(u => u.email === userData.email || u.username === userData.username)
  if (existingUser) {
    return { success: false, message: 'Пользователь с таким email или username уже существует' }
  }
  
  // Добавление нового пользователя
  const newUser = {
    id: Date.now(),
    email: userData.email,
    username: userData.username,
    password: userData.password, // В реальном приложении пароль должен быть захеширован
    createdAt: new Date().toISOString()
  }
  
  users.push(newUser)
  saveUsers(users)
  
  return { success: true, message: 'Регистрация успешна!', user: newUser }
}

// Авторизация пользователя
export const loginUser = (email, password) => {
  const users = getUsers()
  const user = users.find(u => u.email === email && u.password === password)
  
  if (!user) {
    return { success: false, message: 'Неверный email или пароль' }
  }
  
  // Сохраняем текущего пользователя
  const userData = { id: user.id, email: user.email, username: user.username }
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userData))
  
  return { success: true, message: 'Вход выполнен!', user: userData }
}

// Выход
export const logoutUser = () => {
  localStorage.removeItem(CURRENT_USER_KEY)
}

// Получить текущего пользователя
export const getCurrentUser = () => {
  const user = localStorage.getItem(CURRENT_USER_KEY)
  return user ? JSON.parse(user) : null
}

// Проверка авторизации
export const isAuthenticated = () => {
  return getCurrentUser() !== null
}




