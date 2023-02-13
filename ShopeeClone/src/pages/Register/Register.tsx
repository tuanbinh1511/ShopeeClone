import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Input from 'src/components/Input'
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
              <Input
                name='email'
                register={register}
                className='mt-8'
                errorMessage={errors.email?.message}
                placeholder='Email'
                rules={rules.email}
                type='email'
              />
              <Input
                name='password'
                register={register}
                className='mt-2'
                errorMessage={errors.password?.message}
                placeholder='Password'
                rules={rules.password}
                type='password'
                autoComplete='on'
              />
              <Input
                name='confirm_password'
                register={register}
                className='mt-2'
                errorMessage={errors.confirm_password?.message}
                placeholder='Confirm Password'
                rules={rules.confirm_password}
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
