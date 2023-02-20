import useQueryParams from 'src/hooks/useQueryParams'
import AsideFilter from './AsideFilter'
import { omitBy, isUndefined } from 'lodash'
import Product from './Product/Product.'
import SoftProductList from './SoftProductList'
import { useQuery } from 'react-query'
import productApi from 'src/apis/product.api'
import Paginate from 'src/components/Paginate'

import { ProductListConfig } from 'src/types/product.type'

export type QueryConfig = {
  [key in keyof ProductListConfig]: string
}

function ProductList() {
  const queryParams: QueryConfig = useQueryParams()
  const queryConfig: QueryConfig = omitBy(
    {
      page: queryParams.page || '1',
      limit: queryParams.limit || '8',
      sort_by: queryParams.sort_by,
      exclude: queryParams.exclude,
      name: queryParams.name,
      order: queryParams.order,
      price_max: queryParams.price_max,
      price_min: queryParams.price_min,
      rating_filter: queryParams.rating_filter
    },
    isUndefined
  )
  const { data } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return productApi.getProduct(queryConfig as ProductListConfig)
    },
    keepPreviousData: true
  })

  return (
    <div className='bg-gray-200 py-6'>
      <div className='container'>
        {data && (
          <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-3'>
              <AsideFilter />
            </div>
            <div className='col-span-9'>
              <SoftProductList />
              <div className='mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5'>
                {data.data.data.products.map((product) => (
                  <div className='col-span-1' key={product._id}>
                    <Product product={product} />
                  </div>
                ))}
              </div>
              <Paginate queryConfig={queryConfig} pageSize={data.data.data.pagination.page_size}></Paginate>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductList
