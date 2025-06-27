import { ref } from 'vue'

export const useAuth = () => {
    const isAuthenticated = useState('isAuthenticated', () => false)
    const user = useState('user', () => null)

    const login = (fakeUser = { name: 'Profil', avatar: { src: '', alt: 'Avatar' } }) => {
        isAuthenticated.value = true
        user.value = fakeUser
    }

    const logout = () => {
        isAuthenticated.value = false
        user.value = null
    }

    return { isAuthenticated, user, login, logout }
}