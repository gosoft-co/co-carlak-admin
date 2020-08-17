import { ListDeliverysQuery } from '../API'
import { GraphQLResult } from '@aws-amplify/api'

interface Delivery {
  id?: string
  date?: string
  route?: any
  _version?: number | null
}

function mapListDeliveriesQuery(
  ListRoutesQuery: GraphQLResult<ListDeliverysQuery>
): Delivery[] {
  return (
    ListRoutesQuery.data?.listDeliverys?.items?.map(
      (delivery) =>
        ({
          id: delivery?.id,
          date: delivery?.date,
          deliveryRouteId: delivery?.route,
          _version: delivery?._version,
        } as Delivery)
    ) || []
  )
}

export default Delivery
export { mapListDeliveriesQuery as mapListDeliveries }
