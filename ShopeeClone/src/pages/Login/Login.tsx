import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='bg-orange'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10 '>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm'>
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
                  className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Nhập mật khẩu'
                />
              </div>
              <div className='mt-1 min-h-[1rem] text-sm text-red-600'>Bạn đã nhập sai mật khẩu</div>
              <button className='w-full rounded-sm border-none bg-red-500 py-4 px-2 text-center text-sm uppercase text-white hover:bg-red-600'>
                Đăng Nhập
              </button>
              <div className='mt-8 text-center'>
                <div className='flex items-center justify-center text-center'>
                  <span className='text-gray-400 '>Bạn đã có tải khoản chưa ?</span>
                  <Link className='text-red-400' to='/register'>
                    Đăng kí
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
