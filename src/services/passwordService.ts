import { IPassword } from '@/models/password'
import passwordMock from './mocks/password.json'

export const getPasswords = (): Promise<IPassword[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(passwordMock)
    }, 1000)
  })
}
