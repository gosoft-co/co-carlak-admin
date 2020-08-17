import { ListRoutesQuery } from '../API'
import { GraphQLResult } from '@aws-amplify/api'

interface Route {
  id?: string
  name?: string
  accounts?: any
  deliveries?: any
  status?: string
  _version?: number | null
}

function mapListRoutesQuery(
  ListRoutesQuery: GraphQLResult<ListRoutesQuery>
): Route[] {
  return (
    ListRoutesQuery.data?.listRoutes?.items?.map(
      (route) =>
        ({
          id: route?.id,
          name: route?.name,
          accounts: route?.accounts,
          deliveries: route?.deliveries,
          status: route?.status,
          _version: route?._version,
        } as Route)
    ) || []
  )
}

export default Route
export { mapListRoutesQuery as mapListRoutes }
