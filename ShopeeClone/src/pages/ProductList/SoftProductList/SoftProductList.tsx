function SoftProductList() {
  return (
    <div className='bg-gray-300/40 py-4 px-3'>
      <div className='flex flex-wrap items-center justify-between gap-3'>
        <div className='flex flex-wrap items-center gap-2'>
          <div>Sắp xếp theo</div>
          <button className='h-10 bg-orange  px-4 text-center font-semibold capitalize text-white hover:opacity-80 '>
            Phổ biến
          </button>
          <button className='h-10 bg-white bg-slate-100 px-4 text-center  font-medium capitalize hover:opacity-80 '>
            Mới nhất
          </button>
          <button className='h-10 bg-white bg-slate-100 px-4 text-center  font-medium capitalize hover:opacity-80 '>
            Bán chạy
          </button>
          <select
            name=''
            id=''
            className='h-10 bg-white bg-slate-100 px-4 text-left  font-medium capitalize hover:opacity-80 focus:border-none'
          >
            Giá
            <option value='price:asc'>Giá thấp đến cao</option>
            <option value='price:desc'>Giá cao đến thấp</option>
          </select>
        </div>
        <div className='flex items-center'>
          <div>
            <span className='text-orange'>1</span>
            <span className=''>/3</span>
          </div>
          <div className='ml-4'>
            <button className='flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-sm bg-gray-100 shadow outline-none hover:bg-slate-200'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-3 w-3 text-center'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
              </svg>
            </button>
          </div>
          <div className='mr-4'>
            <button className='flex h-10 w-10 items-center justify-center rounded-sm bg-gray-100 shadow outline-none hover:bg-slate-200 '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-3 w-3 '
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SoftProductList
