/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDeliveryUsers = /* GraphQL */ `
  mutation CreateDeliveryUsers(
    $input: CreateDeliveryUsersInput!
    $condition: ModelDeliveryUsersConditionInput
  ) {
    createDeliveryUsers(input: $input, condition: $condition) {
      id
      user
      delivery {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateDeliveryUsers = /* GraphQL */ `
  mutation UpdateDeliveryUsers(
    $input: UpdateDeliveryUsersInput!
    $condition: ModelDeliveryUsersConditionInput
  ) {
    updateDeliveryUsers(input: $input, condition: $condition) {
      id
      user
      delivery {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteDeliveryUsers = /* GraphQL */ `
  mutation DeleteDeliveryUsers(
    $input: DeleteDeliveryUsersInput!
    $condition: ModelDeliveryUsersConditionInput
  ) {
    deleteDeliveryUsers(input: $input, condition: $condition) {
      id
      user
      delivery {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createDelivery = /* GraphQL */ `
  mutation CreateDelivery(
    $input: CreateDeliveryInput!
    $condition: ModelDeliveryConditionInput
  ) {
    createDelivery(input: $input, condition: $condition) {
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
`;
export const updateDelivery = /* GraphQL */ `
  mutation UpdateDelivery(
    $input: UpdateDeliveryInput!
    $condition: ModelDeliveryConditionInput
  ) {
    updateDelivery(input: $input, condition: $condition) {
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
`;
export const deleteDelivery = /* GraphQL */ `
  mutation DeleteDelivery(
    $input: DeleteDeliveryInput!
    $condition: ModelDeliveryConditionInput
  ) {
    deleteDelivery(input: $input, condition: $condition) {
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
`;
export const createRoute = /* GraphQL */ `
  mutation CreateRoute(
    $input: CreateRouteInput!
    $condition: ModelRouteConditionInput
  ) {
    createRoute(input: $input, condition: $condition) {
      id
      name
      status
      deliveries {
        items {
          id
          date
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
`;
export const updateRoute = /* GraphQL */ `
  mutation UpdateRoute(
    $input: UpdateRouteInput!
    $condition: ModelRouteConditionInput
  ) {
    updateRoute(input: $input, condition: $condition) {
      id
      name
      status
      deliveries {
        items {
          id
          date
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
`;
export const deleteRoute = /* GraphQL */ `
  mutation DeleteRoute(
    $input: DeleteRouteInput!
    $condition: ModelRouteConditionInput
  ) {
    deleteRoute(input: $input, condition: $condition) {
      id
      name
      status
      deliveries {
        items {
          id
          date
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
`;
export const createRouteAccounts = /* GraphQL */ `
  mutation CreateRouteAccounts(
    $input: CreateRouteAccountsInput!
    $condition: ModelRouteAccountsConditionInput
  ) {
    createRouteAccounts(input: $input, condition: $condition) {
      id
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
      account {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateRouteAccounts = /* GraphQL */ `
  mutation UpdateRouteAccounts(
    $input: UpdateRouteAccountsInput!
    $condition: ModelRouteAccountsConditionInput
  ) {
    updateRouteAccounts(input: $input, condition: $condition) {
      id
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
      account {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteRouteAccounts = /* GraphQL */ `
  mutation DeleteRouteAccounts(
    $input: DeleteRouteAccountsInput!
    $condition: ModelRouteAccountsConditionInput
  ) {
    deleteRouteAccounts(input: $input, condition: $condition) {
      id
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
      account {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
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
`;
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
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
`;
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
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
`;
export const createDeliveryProducts = /* GraphQL */ `
  mutation CreateDeliveryProducts(
    $input: CreateDeliveryProductsInput!
    $condition: ModelDeliveryProductsConditionInput
  ) {
    createDeliveryProducts(input: $input, condition: $condition) {
      id
      quantity
      price
      product {
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
      delivery {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateDeliveryProducts = /* GraphQL */ `
  mutation UpdateDeliveryProducts(
    $input: UpdateDeliveryProductsInput!
    $condition: ModelDeliveryProductsConditionInput
  ) {
    updateDeliveryProducts(input: $input, condition: $condition) {
      id
      quantity
      price
      product {
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
      delivery {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteDeliveryProducts = /* GraphQL */ `
  mutation DeleteDeliveryProducts(
    $input: DeleteDeliveryProductsInput!
    $condition: ModelDeliveryProductsConditionInput
  ) {
    deleteDeliveryProducts(input: $input, condition: $condition) {
      id
      quantity
      price
      product {
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
      delivery {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
`;
