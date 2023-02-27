import { yupResolver } from '@hookform/resolvers/yup'
import { omit } from 'lodash'
import { createSearchParams, useNavigate } from 'react-router-dom'

import { schema, Schema } from 'src/utils/rules'
import useQueryConfig from 'src/hooks/useQueryConfig'
import { useForm } from 'react-hook-form'
import path from 'src/constant/path'

type FormData = Pick<Schema, 'name'>
const nameSchema = schema.pick(['name'])
function useSearchProducts() {
  const navigate = useNavigate()
  const queryConfig = useQueryConfig()
  const { handleSubmit, register } = useForm<FormData>({
    defaultValues: {
      name: ''
    },
    resolver: yupResolver(nameSchema)
  })
  const onSubmitSearch = handleSubmit((data) => {
    const config = queryConfig.order
      ? omit(
          {
            ...queryConfig,
            name: data.name
          },
          ['order', 'sort_by']
        )
      : {
          ...queryConfig,
          name: data.name
        }
    navigate({
      pathname: path.home,
      search: createSearchParams(config).toString()
    })
  })
  return { onSubmitSearch, register }
}

export default useSearchProducts
