import { Link } from 'react-router-dom'

function Product() {
  return (
    <Link to='/'>
      <div className='overflow-hidden rounded-sm bg-white shadow transition-transform duration-100 hover:translate-y-[-0.03rem] hover:shadow-lg'>
        <div className='relative w-full pt-[100%]'>
          <img
            src='https://cf.shopee.vn/file/sg-11134201-22120-donbq2x4c6kvc6_tn'
            alt=''
            className='absolute top-0 left-0 h-[100%] w-[100%] object-cover'
          />
        </div>
        <div className='mt-2 ml-2 overflow-hidden'>
          <div className=' min-h-[2rem] text-sm line-clamp-2'>
            Áo khoác gió unisex 2 lớp, chống nước, chống bụi - Local Brand ZONEF OFFICIAL
          </div>
          <div className='pt-4'>
            <span className=' mr-2 text-base text-gray-600 line-through'>₫350.000</span>
            <span className=' text-base  text-orange  '>₫150.000</span>
          </div>
          <div className='mt-3 mb-8 flex items-center justify-end'>
            <div className='flex items-center'>
              <div className='relative'>
                <div className='absolute top-0 left-0 h-full overflow-hidden' style={{ width: '50%' }}>
                  <svg
                    enableBackground='new 0 0 15 15'
                    viewBox='0 0 15 15'
                    x={0}
                    y={0}
                    className='h-3 w-3 fill-yellow-300 text-yellow-300'
                  >
                    <polygon
                      points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeMiterlimit={10}
                    />
                  </svg>
                </div>
                <svg
                  enableBackground='new 0 0 15 15'
                  viewBox='0 0 15 15'
                  x={0}
                  y={0}
                  className='h-3 w-3 fill-current text-gray-300'
                >
                  <polygon
                    points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeMiterlimit={10}
                  />
                </svg>
              </div>
            </div>
            <div className='ml-2 text-sm'>
              <span>5.66k</span>
              <span className='ml-1'>Đã bán</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Product
