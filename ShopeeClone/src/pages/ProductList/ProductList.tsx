import { useQuery } from 'react-query'
import productApi from 'src/apis/product.api'
import { ProductListConfig } from 'src/types/product.type'
import useQueryConfig from 'src/hooks/useQueryConfig'
import categoryAPI from 'src/apis/category.api'
import AsideFilter from './AsideFilter'
import Product from './Product/Product.'
import SoftProductList from './SoftProductList'
import Paginate from 'src/components/Paginate'

function ProductList() {
  const queryConfig = useQueryConfig()
  const { data: productData } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return productApi.getProduct(queryConfig as ProductListConfig)
    },
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  })
  const { data: categoryData } = useQuery({
    queryKey: ['categories'],
    queryFn: () => {
      return categoryAPI.getCategory()
    }
  })

  return (
    <div className='bg-gray-200 py-6'>
      <div className='container'>
        {productData && (
          <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-3'>
              {<AsideFilter queryConfig={queryConfig} categories={categoryData?.data.data || []} />}
            </div>
            <div className='col-span-9'>
              <SoftProductList queryConfig={queryConfig} pageSize={productData.data.data.pagination.page_size} />
              <div className='mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4'>
                {productData.data.data.products.map((product) => (
                  <div className='col-span-1' key={product._id}>
                    <Product product={product} />
                  </div>
                ))}
              </div>
              <Paginate queryConfig={queryConfig} pageSize={productData.data.data.pagination.page_size}></Paginate>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductList
