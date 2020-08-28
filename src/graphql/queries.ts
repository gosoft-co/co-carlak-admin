/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncDeliveryUsers = /* GraphQL */ `
  query SyncDeliveryUsers(
    $filter: ModelDeliveryUsersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDeliveryUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        user
        delivery {
          id
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`
export const syncDeliveries = /* GraphQL */ `
  query SyncDeliveries(
    $filter: ModelDeliveryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDeliveries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        date
        route {
          id
          name
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        users {
          nextToken
          startedAt
        }
        products {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`
export const getDelivery = /* GraphQL */ `
  query GetDelivery($id: ID!) {
    getDelivery(id: $id) {
      id
      date
      route {
        id
        name
        status
        deliveries {
          nextToken
          startedAt
        }
        accounts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      users {
        items {
          id
          user
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      products {
        items {
          id
          quantity
          product {
            name
            quantity
          }
          price
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`
export const listDeliverys = /* GraphQL */ `
  query ListDeliverys(
    $filter: ModelDeliveryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeliverys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        route {
          id
          name
          status
          accounts {
            items {
              account {
                id
                name
                lastName
              }
            }
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        users {
          nextToken
          startedAt
          items {
            user
            _deleted
          }
        }
        products {
          nextToken
          startedAt
          items {
            id
            quantity
            price
            product {
              name
              description
            }
          }
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`
export const syncRoutes = /* GraphQL */ `
  query SyncRoutes(
    $filter: ModelRouteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRoutes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        status
        deliveries {
          nextToken
          startedAt
        }
        accounts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`
export const getRoute = /* GraphQL */ `
  query GetRoute($id: ID!) {
    getRoute(id: $id) {
      id
      name
      status
      deliveries {
        items {
          id
          date
          users {
            items {
              user
              _deleted
            }
          }
          products {
            items {
              price
              quantity
              product {
                id
                name
                _deleted
              }
            }
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      accounts {
        items {
          id
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`
export const listRoutes = /* GraphQL */ `
  query ListRoutes(
    $filter: ModelRouteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoutes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        status
        deliveries {
          nextToken
          startedAt
        }
        accounts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`
export const syncRouteAccounts = /* GraphQL */ `
  query SyncRouteAccounts(
    $filter: ModelRouteAccountsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRouteAccounts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        route {
          id
          name
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        account {
          id
          name
          lastName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`
export const syncAccounts = /* GraphQL */ `
  query SyncAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAccounts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        lastName
        routes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`
export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
      id
      name
      lastName
      routes {
        items {
          id
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        lastName
        routes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`
export const syncDeliveryProducts = /* GraphQL */ `
  query SyncDeliveryProducts(
    $filter: ModelDeliveryProductsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDeliveryProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        quantity
        price
        product {
          id
          name
          description
          price
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        delivery {
          id
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        price
        deliveries {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      description
      price
      deliveries {
        items {
          id
          quantity
          price
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        price
        deliveries {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`
