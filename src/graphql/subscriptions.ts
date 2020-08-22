/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDeliveryUsers = /* GraphQL */ `
  subscription OnCreateDeliveryUsers {
    onCreateDeliveryUsers {
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
export const onUpdateDeliveryUsers = /* GraphQL */ `
  subscription OnUpdateDeliveryUsers {
    onUpdateDeliveryUsers {
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
export const onDeleteDeliveryUsers = /* GraphQL */ `
  subscription OnDeleteDeliveryUsers {
    onDeleteDeliveryUsers {
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
export const onCreateDelivery = /* GraphQL */ `
  subscription OnCreateDelivery {
    onCreateDelivery {
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
export const onUpdateDelivery = /* GraphQL */ `
  subscription OnUpdateDelivery {
    onUpdateDelivery {
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
export const onDeleteDelivery = /* GraphQL */ `
  subscription OnDeleteDelivery {
    onDeleteDelivery {
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
export const onCreateRoute = /* GraphQL */ `
  subscription OnCreateRoute {
    onCreateRoute {
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
export const onUpdateRoute = /* GraphQL */ `
  subscription OnUpdateRoute {
    onUpdateRoute {
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
export const onDeleteRoute = /* GraphQL */ `
  subscription OnDeleteRoute {
    onDeleteRoute {
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
export const onCreateRouteAccounts = /* GraphQL */ `
  subscription OnCreateRouteAccounts {
    onCreateRouteAccounts {
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
export const onUpdateRouteAccounts = /* GraphQL */ `
  subscription OnUpdateRouteAccounts {
    onUpdateRouteAccounts {
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
export const onDeleteRouteAccounts = /* GraphQL */ `
  subscription OnDeleteRouteAccounts {
    onDeleteRouteAccounts {
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
export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount {
    onCreateAccount {
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
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount {
    onUpdateAccount {
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
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount {
    onDeleteAccount {
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
export const onCreateDeliveryProducts = /* GraphQL */ `
  subscription OnCreateDeliveryProducts {
    onCreateDeliveryProducts {
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
export const onUpdateDeliveryProducts = /* GraphQL */ `
  subscription OnUpdateDeliveryProducts {
    onUpdateDeliveryProducts {
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
export const onDeleteDeliveryProducts = /* GraphQL */ `
  subscription OnDeleteDeliveryProducts {
    onDeleteDeliveryProducts {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
