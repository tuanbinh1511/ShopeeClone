import { Link } from 'react-router-dom'
import ProductRating from 'src/components/ProductRating'
import path from 'src/constant/path'
import { Product as ProductType } from 'src/types/product.type'
import { formatCurrency, formatNumberToSocial, generateNameId } from 'src/utils/utils'

interface Props {
  product: ProductType
}

function Product({ product }: Props) {
  return (
    <Link to={`${path.home}${generateNameId({ name: product.name, id: product._id })}`}>
      <div className='overflow-hidden rounded-sm bg-white shadow transition-transform duration-100 hover:translate-y-[-0.03rem] hover:border-[1px] hover:border-orange hover:shadow-lg'>
        <div className='relative w-full pt-[100%]'>
          <img
            src={product.image}
            alt={product.name}
            className='absolute top-0 left-0 h-[100%] w-[100%] object-cover'
          />
        </div>
        <div className='ml-2 mt-2 overflow-hidden'>
          <div className=' min-h-[2rem] text-sm  line-clamp-2'>{product.name}</div>
          <div className='flex flex-shrink-0 pt-4'>
            <span className='flex items-center text-sm'>₫</span>
            <span className='mr-1 text-base text-gray-600 line-through'>
              {formatCurrency(product.price_before_discount)}
            </span>
            -<span className='ml-1 flex items-center text-sm text-orange'>₫</span>
            <span className=' text-base  text-orange  '>{formatCurrency(product.price)}</span>
          </div>
          <div className='mt-3 mb-8 flex items-center justify-end'>
            <ProductRating rating={product.rating} />
            <div className='mx-2 text-sm text-slate-500'>
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
