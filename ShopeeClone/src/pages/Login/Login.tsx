import { yupResolver } from '@hookform/resolvers/yup'
import { omit } from 'lodash'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { Link } from 'react-router-dom'
import { loginAccount } from 'src/apis/auth.api'
import { schema, Schema } from 'src/utils/rules'
import Input from 'src/components/Input'
import { isAxios422Error } from 'src/utils/utils'
import { ResponseAPI } from 'src/types/utils.type'

type FormData = Omit<Schema, 'confirm_password'>

const LoginSchema = schema.omit(['confirm_password'])

function Login() {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(LoginSchema) })

  const loginMutate = useMutation({
    mutationFn: (body: FormData) => loginAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    loginMutate.mutate(data, {
      onSuccess: (data) => {
        console.log(data)
      },
      onError: (error) => {
        if (isAxios422Error<ResponseAPI<Omit<FormData, 'confirm_password'>>>(error)) {
          const formError = error.response?.data.data
          if (formError?.email) {
            setError('email', {
              message: formError.email,
              type: 'Server'
            })
          }
          if (formError?.password) {
            setError('password', {
              message: formError.password,
              type: 'Server'
            })
          }
        }
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
              <Input
                name='email'
                register={register}
                className='mt-8'
                errorMessage={errors.email?.message}
                placeholder='Email'
                type='email'
              />
              <Input
                name='password'
                register={register}
                className='mt-2'
                errorMessage={errors.password?.message}
                placeholder='Password'
                type='password'
                autoComplete='on'
              />
              <button
                type='submit'
                className='mt-4 w-full rounded-sm border-none bg-red-500 py-4 px-2 text-center text-sm uppercase text-white hover:bg-red-600'
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
