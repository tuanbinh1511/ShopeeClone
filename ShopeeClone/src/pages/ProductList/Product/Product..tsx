import { Link } from 'react-router-dom'
import ProductRating from 'src/components/ProductRating'
import { Product as ProductType } from 'src/types/product.type'
import { fomatCurrency, formatNumberToSocial } from 'src/utils/utils'

interface Props {
  product: ProductType
}

function Product({ product }: Props) {
  return (
    <Link to='/'>
      <div className='overflow-hidden rounded-sm bg-white shadow transition-transform duration-100 hover:translate-y-[-0.03rem] hover:shadow-lg'>
        <div className='relative w-full pt-[100%]'>
          <img
            src={product.image}
            alt={product.name}
            className='absolute top-0 left-0 h-[100%] w-[100%] object-cover'
          />
        </div>
        <div className='mt-2 ml-2 overflow-hidden'>
          <div className=' min-h-[2rem] text-sm line-clamp-2'>{product.description}</div>
          <div className='pt-4'>
            <span className='text-sm'>₫</span>
            <span className='mr-1 text-base text-gray-600 line-through'>
              {fomatCurrency(product.price_before_discount)}
            </span>
            -<span className='ml-1 text-sm '>₫</span>
            <span className=' text-base  text-orange  '>{fomatCurrency(product.price)}</span>
          </div>
          <div className='mt-3 mb-8 flex items-center justify-end'>
            <ProductRating rating={product.rating} />
            <div className='ml-2 text-sm '>
              <span>{formatNumberToSocial(product.sold)}</span>
              <span className='ml-1'>Đã bán</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Product
