import { AuthResponse } from 'src/types/auth.type'
import http from 'src/utils/http'

const AuthApi = {
  registerAccount(body: { email: string; password: string }) {
    return http.post<AuthResponse>('/register', body)
  },
  loginAccount(body: { email: string; password: string }) {
    return http.post<AuthResponse>('/login', body)
  },
  logoutAccount() {
    return http.post('/logout')
  }
}
export default AuthApi
