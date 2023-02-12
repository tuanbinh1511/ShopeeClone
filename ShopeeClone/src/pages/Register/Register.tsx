import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { getRules } from 'src/utils/rules'

interface FormData {
  email: string
  password: string
  confirm_password: string
}

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = handleSubmit(
    (data) => {
      //console.log(data)
    },
    (data) => {
      //const password = getValues('password')
      //console.log(password)
    }
  )
  console.log('errors', errors)

  const rules = getRules(getValues)
  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10 '>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-left text-2xl'>Đăng Kí</div>
              <div className='mt-8'>
                <input
                  type='email'
                  className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Email hoặc số điện thoại'
                  {...register('email', rules.email)}
                />
              </div>
              <div className=' mt-1 ml-3 min-h-[1.25rem] text-left text-sm text-red-600'>{errors.email?.message}</div>
              <div className='mt-2'>
                <input
                  type='password'
                  autoComplete='on'
                  className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Nhập mật khẩu'
                  {...register('password', rules.password)}
                />
              </div>
              <div className='mt-1 ml-3 min-h-[1.25rem] text-left text-sm text-red-600'>{errors.password?.message}</div>
              <div className='mt-2'>
                <input
                  type='password'
                  autoComplete='on'
                  className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Nhập lại mật khẩu'
                  {...register('confirm_password', {
                    ...rules.confirm_password
                  })}
                />
              </div>
              <div className='mt-1 ml-3 min-h-[1.25rem] text-left text-sm text-red-600'>
                {errors.confirm_password?.message}
              </div>
              <button
                type='submit'
                className='w-full rounded-sm border-none bg-red-500 py-4 px-2 text-center text-sm uppercase text-white hover:bg-red-600'
              >
                Đăng Nhập
              </button>
              <div className='mt-8 text-center'>
                <div className='flex items-center justify-center text-center'>
                  <span className='text-gray-400 '>Bạn đã có tải khoản ?</span>
                  <Link className='text-red-400' to='/login'>
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

export default Register
