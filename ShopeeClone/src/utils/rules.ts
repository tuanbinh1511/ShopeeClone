import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'

type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }
export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Email là bắt buộc!'
    },
    pattern: {
      value: /^\S+@S+\.S+$/,
      message: 'Email không hợp lệ!'
    },
    maxLength: {
      value: 120,
      message: 'Độ dài từ 5-120 kí tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài từ 5-120 kí tự'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Mật khẩu là bắt buộc!'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6-160 kí tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài từ 6-120 kí tự'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Nhập lại mật khẩu bắt buộc!'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6-160 kí tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài từ 6-120 kí tự'
    },
    validate:
      typeof getValues === 'function'
        ? (value) => (value === getValues('password') ? true : 'Nhập mật khẩu không khớp')
        : undefined
  }
})
