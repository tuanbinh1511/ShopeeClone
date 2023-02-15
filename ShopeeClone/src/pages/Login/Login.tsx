import { yupResolver } from '@hookform/resolvers/yup'
import { omit } from 'lodash'

import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { Link } from 'react-router-dom'
import { registerAccount } from 'src/apis/auth.api'
import { schema, Schema } from 'src/utils/rules'
import Input from 'src/components/Input'

type FormData = Omit<Schema, 'confirm_password'>

type loginSchema = Omit<schema, ['confirm_password']>

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(loginSchema) })

  const registerAccountMutation = useMutation({
    mutationFn: (body: FormData) => registerAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    registerAccountMutation.mutate(data, {
      onSuccess: (data) => {
        console.log(data)
      }
    })
  })
  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10 '>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-left text-2xl'>Đăng Nhập</div>
              <div className='mt-8'>
                <input
                  type='email'
                  name='email'
                  className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Email hoặc số điện thoại'
                />
              </div>
              <div className='mt-1 min-h-[1rem] text-sm text-red-600'>Email không hợp lệ</div>
              <div className='mt-3'>
                <input
                  type='password'
                  name='password'
                  autoComplete='on'
                  className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Nhập mật khẩu'
                />
              </div>
              <div className='mt-1 min-h-[1rem] text-sm text-red-600'>Bạn đã nhập sai mật khẩu</div>
              <button
                type='submit'
                className='w-full rounded-sm border-none bg-red-500 py-4 px-2 text-center text-sm uppercase text-white hover:bg-red-600'
              >
                Đăng Nhập
              </button>
              <div className='mt-8 text-center'>
                <div className='flex items-center justify-center text-center'>
                  <span className='text-gray-400 '>Bạn đã có tải khoản chưa ?</span>
                  <Link className='text-red-400' to='/register'>
                    Đăng nhập
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
