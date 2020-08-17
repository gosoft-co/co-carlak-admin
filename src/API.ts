/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateDeliveryUsersInput = {
  id?: string | null,
  _version?: number | null,
  deliveryUsersUserId?: string | null,
  deliveryUsersDeliveryId?: string | null,
};

export type ModelDeliveryUsersConditionInput = {
  and?: Array< ModelDeliveryUsersConditionInput | null > | null,
  or?: Array< ModelDeliveryUsersConditionInput | null > | null,
  not?: ModelDeliveryUsersConditionInput | null,
};

export type UpdateDeliveryUsersInput = {
  id: string,
  _version?: number | null,
  deliveryUsersUserId?: string | null,
  deliveryUsersDeliveryId?: string | null,
};

export type DeleteDeliveryUsersInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateDeliveryInput = {
  id?: string | null,
  date?: string | null,
  _version?: number | null,
  deliveryRouteId?: string | null,
};

export type ModelDeliveryConditionInput = {
  date?: ModelStringInput | null,
  and?: Array< ModelDeliveryConditionInput | null > | null,
  or?: Array< ModelDeliveryConditionInput | null > | null,
  not?: ModelDeliveryConditionInput | null,
};

export type UpdateDeliveryInput = {
  id: string,
  date?: string | null,
  _version?: number | null,
  deliveryRouteId?: string | null,
};

export type DeleteDeliveryInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateRouteInput = {
  id?: string | null,
  name: string,
  status?: string | null,
  _version?: number | null,
};

export type ModelRouteConditionInput = {
  name?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelRouteConditionInput | null > | null,
  or?: Array< ModelRouteConditionInput | null > | null,
  not?: ModelRouteConditionInput | null,
};

export type UpdateRouteInput = {
  id: string,
  name?: string | null,
  status?: string | null,
  _version?: number | null,
};

export type DeleteRouteInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateRouteAccountsInput = {
  id?: string | null,
  _version?: number | null,
  routeAccountsRouteId?: string | null,
  routeAccountsAccountId?: string | null,
};

export type ModelRouteAccountsConditionInput = {
  and?: Array< ModelRouteAccountsConditionInput | null > | null,
  or?: Array< ModelRouteAccountsConditionInput | null > | null,
  not?: ModelRouteAccountsConditionInput | null,
};

export type UpdateRouteAccountsInput = {
  id: string,
  _version?: number | null,
  routeAccountsRouteId?: string | null,
  routeAccountsAccountId?: string | null,
};

export type DeleteRouteAccountsInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateAccountInput = {
  id?: string | null,
  name?: string | null,
  lastName?: string | null,
  _version?: number | null,
};

export type ModelAccountConditionInput = {
  name?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  and?: Array< ModelAccountConditionInput | null > | null,
  or?: Array< ModelAccountConditionInput | null > | null,
  not?: ModelAccountConditionInput | null,
};

export type UpdateAccountInput = {
  id: string,
  name?: string | null,
  lastName?: string | null,
  _version?: number | null,
};

export type DeleteAccountInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelDeliveryUsersFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelDeliveryUsersFilterInput | null > | null,
  or?: Array< ModelDeliveryUsersFilterInput | null > | null,
  not?: ModelDeliveryUsersFilterInput | null,
};

export type ModelDeliveryFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelDeliveryFilterInput | null > | null,
  or?: Array< ModelDeliveryFilterInput | null > | null,
  not?: ModelDeliveryFilterInput | null,
};

export type ModelRouteFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelRouteFilterInput | null > | null,
  or?: Array< ModelRouteFilterInput | null > | null,
  not?: ModelRouteFilterInput | null,
};

export type ModelRouteAccountsFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelRouteAccountsFilterInput | null > | null,
  or?: Array< ModelRouteAccountsFilterInput | null > | null,
  not?: ModelRouteAccountsFilterInput | null,
};

export type ModelAccountFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  and?: Array< ModelAccountFilterInput | null > | null,
  or?: Array< ModelAccountFilterInput | null > | null,
  not?: ModelAccountFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string | null,
    username: string,
    deliveries:  {
      __typename: "ModelDeliveryUsersConnection",
      items:  Array< {
        __typename: "DeliveryUsers",
        id: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string | null,
    username: string,
    deliveries:  {
      __typename: "ModelDeliveryUsersConnection",
      items:  Array< {
        __typename: "DeliveryUsers",
        id: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string | null,
    username: string,
    deliveries:  {
      __typename: "ModelDeliveryUsersConnection",
      items:  Array< {
        __typename: "DeliveryUsers",
        id: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDeliveryUsersMutationVariables = {
  input: CreateDeliveryUsersInput,
  condition?: ModelDeliveryUsersConditionInput | null,
};

export type CreateDeliveryUsersMutation = {
  createDeliveryUsers:  {
    __typename: "DeliveryUsers",
    id: string,
    user:  {
      __typename: "User",
      id: string | null,
      username: string,
      deliveries:  {
        __typename: "ModelDeliveryUsersConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    delivery:  {
      __typename: "Delivery",
      id: string,
      date: string | null,
      route:  {
        __typename: "Route",
        id: string,
        name: string,
        status: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      users:  {
        __typename: "ModelDeliveryUsersConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDeliveryUsersMutationVariables = {
  input: UpdateDeliveryUsersInput,
  condition?: ModelDeliveryUsersConditionInput | null,
};

export type UpdateDeliveryUsersMutation = {
  updateDeliveryUsers:  {
    __typename: "DeliveryUsers",
    id: string,
    user:  {
      __typename: "User",
      id: string | null,
      username: string,
      deliveries:  {
        __typename: "ModelDeliveryUsersConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    delivery:  {
      __typename: "Delivery",
      id: string,
      date: string | null,
      route:  {
        __typename: "Route",
        id: string,
        name: string,
        status: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      users:  {
        __typename: "ModelDeliveryUsersConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDeliveryUsersMutationVariables = {
  input: DeleteDeliveryUsersInput,
  condition?: ModelDeliveryUsersConditionInput | null,
};

export type DeleteDeliveryUsersMutation = {
  deleteDeliveryUsers:  {
    __typename: "DeliveryUsers",
    id: string,
    user:  {
      __typename: "User",
      id: string | null,
      username: string,
      deliveries:  {
        __typename: "ModelDeliveryUsersConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    delivery:  {
      __typename: "Delivery",
      id: string,
      date: string | null,
      route:  {
        __typename: "Route",
        id: string,
        name: string,
        status: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      users:  {
        __typename: "ModelDeliveryUsersConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDeliveryMutationVariables = {
  input: CreateDeliveryInput,
  condition?: ModelDeliveryConditionInput | null,
};

export type CreateDeliveryMutation = {
  createDelivery:  {
    __typename: "Delivery",
    id: string,
    date: string | null,
    route:  {
      __typename: "Route",
      id: string,
      name: string,
      status: string | null,
      deliveries:  {
        __typename: "ModelDeliveryConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      accounts:  {
        __typename: "ModelRouteAccountsConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    users:  {
      __typename: "ModelDeliveryUsersConnection",
      items:  Array< {
        __typename: "DeliveryUsers",
        id: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDeliveryMutationVariables = {
  input: UpdateDeliveryInput,
  condition?: ModelDeliveryConditionInput | null,
};

export type UpdateDeliveryMutation = {
  updateDelivery:  {
    __typename: "Delivery",
    id: string,
    date: string | null,
    route:  {
      __typename: "Route",
      id: string,
      name: string,
      status: string | null,
      deliveries:  {
        __typename: "ModelDeliveryConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      accounts:  {
        __typename: "ModelRouteAccountsConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    users:  {
      __typename: "ModelDeliveryUsersConnection",
      items:  Array< {
        __typename: "DeliveryUsers",
        id: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDeliveryMutationVariables = {
  input: DeleteDeliveryInput,
  condition?: ModelDeliveryConditionInput | null,
};

export type DeleteDeliveryMutation = {
  deleteDelivery:  {
    __typename: "Delivery",
    id: string,
    date: string | null,
    route:  {
      __typename: "Route",
      id: string,
      name: string,
      status: string | null,
      deliveries:  {
        __typename: "ModelDeliveryConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      accounts:  {
        __typename: "ModelRouteAccountsConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    users:  {
      __typename: "ModelDeliveryUsersConnection",
      items:  Array< {
        __typename: "DeliveryUsers",
        id: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRouteMutationVariables = {
  input: CreateRouteInput,
  condition?: ModelRouteConditionInput | null,
};

export type CreateRouteMutation = {
  createRoute:  {
    __typename: "Route",
    id: string,
    name: string,
    status: string | null,
    deliveries:  {
      __typename: "ModelDeliveryConnection",
      items:  Array< {
        __typename: "Delivery",
        id: string,
        date: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    accounts:  {
      __typename: "ModelRouteAccountsConnection",
      items:  Array< {
        __typename: "RouteAccounts",
        id: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRouteMutationVariables = {
  input: UpdateRouteInput,
  condition?: ModelRouteConditionInput | null,
};

export type UpdateRouteMutation = {
  updateRoute:  {
    __typename: "Route",
    id: string,
    name: string,
    status: string | null,
    deliveries:  {
      __typename: "ModelDeliveryConnection",
      items:  Array< {
        __typename: "Delivery",
        id: string,
        date: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    accounts:  {
      __typename: "ModelRouteAccountsConnection",
      items:  Array< {
        __typename: "RouteAccounts",
        id: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRouteMutationVariables = {
  input: DeleteRouteInput,
  condition?: ModelRouteConditionInput | null,
};

export type DeleteRouteMutation = {
  deleteRoute:  {
    __typename: "Route",
    id: string,
    name: string,
    status: string | null,
    deliveries:  {
      __typename: "ModelDeliveryConnection",
      items:  Array< {
        __typename: "Delivery",
        id: string,
        date: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    accounts:  {
      __typename: "ModelRouteAccountsConnection",
      items:  Array< {
        __typename: "RouteAccounts",
        id: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRouteAccountsMutationVariables = {
  input: CreateRouteAccountsInput,
  condition?: ModelRouteAccountsConditionInput | null,
};

export type CreateRouteAccountsMutation = {
  createRouteAccounts:  {
    __typename: "RouteAccounts",
    id: string,
    route:  {
      __typename: "Route",
      id: string,
      name: string,
      status: string | null,
      deliveries:  {
        __typename: "ModelDeliveryConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      accounts:  {
        __typename: "ModelRouteAccountsConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    account:  {
      __typename: "Account",
      id: string,
      name: string | null,
      lastName: string | null,
      routes:  {
        __typename: "ModelRouteAccountsConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRouteAccountsMutationVariables = {
  input: UpdateRouteAccountsInput,
  condition?: ModelRouteAccountsConditionInput | null,
};

export type UpdateRouteAccountsMutation = {
  updateRouteAccounts:  {
    __typename: "RouteAccounts",
    id: string,
    route:  {
      __typename: "Route",
      id: string,
      name: string,
      status: string | null,
      deliveries:  {
        __typename: "ModelDeliveryConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      accounts:  {
        __typename: "ModelRouteAccountsConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    account:  {
      __typename: "Account",
      id: string,
      name: string | null,
      lastName: string | null,
      routes:  {
        __typename: "ModelRouteAccountsConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRouteAccountsMutationVariables = {
  input: DeleteRouteAccountsInput,
  condition?: ModelRouteAccountsConditionInput | null,
};

export type DeleteRouteAccountsMutation = {
  deleteRouteAccounts:  {
    __typename: "RouteAccounts",
    id: string,
    route:  {
      __typename: "Route",
      id: string,
      name: string,
      status: string | null,
      deliveries:  {
        __typename: "ModelDeliveryConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      accounts:  {
        __typename: "ModelRouteAccountsConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    account:  {
      __typename: "Account",
      id: string,
      name: string | null,
      lastName: string | null,
      routes:  {
        __typename: "ModelRouteAccountsConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAccountMutationVariables = {
  input: CreateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type CreateAccountMutation = {
  createAccount:  {
    __typename: "Account",
    id: string,
    name: string | null,
    lastName: string | null,
    routes:  {
      __typename: "ModelRouteAccountsConnection",
      items:  Array< {
        __typename: "RouteAccounts",
        id: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAccountMutationVariables = {
  input: UpdateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type UpdateAccountMutation = {
  updateAccount:  {
    __typename: "Account",
    id: string,
    name: string | null,
    lastName: string | null,
    routes:  {
      __typename: "ModelRouteAccountsConnection",
      items:  Array< {
        __typename: "RouteAccounts",
        id: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAccountMutationVariables = {
  input: DeleteAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type DeleteAccountMutation = {
  deleteAccount:  {
    __typename: "Account",
    id: string,
    name: string | null,
    lastName: string | null,
    routes:  {
      __typename: "ModelRouteAccountsConnection",
      items:  Array< {
        __typename: "RouteAccounts",
        id: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string | null,
      username: string,
      deliveries:  {
        __typename: "ModelDeliveryUsersConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string | null,
    username: string,
    deliveries:  {
      __typename: "ModelDeliveryUsersConnection",
      items:  Array< {
        __typename: "DeliveryUsers",
        id: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string | null,
      username: string,
      deliveries:  {
        __typename: "ModelDeliveryUsersConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncDeliveryUsersQueryVariables = {
  filter?: ModelDeliveryUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDeliveryUsersQuery = {
  syncDeliveryUsers:  {
    __typename: "ModelDeliveryUsersConnection",
    items:  Array< {
      __typename: "DeliveryUsers",
      id: string,
      user:  {
        __typename: "User",
        id: string | null,
        username: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      delivery:  {
        __typename: "Delivery",
        id: string,
        date: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncDeliveriesQueryVariables = {
  filter?: ModelDeliveryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDeliveriesQuery = {
  syncDeliveries:  {
    __typename: "ModelDeliveryConnection",
    items:  Array< {
      __typename: "Delivery",
      id: string,
      date: string | null,
      route:  {
        __typename: "Route",
        id: string,
        name: string,
        status: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      users:  {
        __typename: "ModelDeliveryUsersConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetDeliveryQueryVariables = {
  id: string,
};

export type GetDeliveryQuery = {
  getDelivery:  {
    __typename: "Delivery",
    id: string,
    date: string | null,
    route:  {
      __typename: "Route",
      id: string,
      name: string,
      status: string | null,
      deliveries:  {
        __typename: "ModelDeliveryConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      accounts:  {
        __typename: "ModelRouteAccountsConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    users:  {
      __typename: "ModelDeliveryUsersConnection",
      items:  Array< {
        __typename: "DeliveryUsers",
        id: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDeliverysQueryVariables = {
  filter?: ModelDeliveryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDeliverysQuery = {
  listDeliverys:  {
    __typename: "ModelDeliveryConnection",
    items:  Array< {
      __typename: "Delivery",
      id: string,
      date: string | null,
      route:  {
        __typename: "Route",
        id: string,
        name: string,
        status: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      users:  {
        __typename: "ModelDeliveryUsersConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncRoutesQueryVariables = {
  filter?: ModelRouteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRoutesQuery = {
  syncRoutes:  {
    __typename: "ModelRouteConnection",
    items:  Array< {
      __typename: "Route",
      id: string,
      name: string,
      status: string | null,
      deliveries:  {
        __typename: "ModelDeliveryConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      accounts:  {
        __typename: "ModelRouteAccountsConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetRouteQueryVariables = {
  id: string,
};

export type GetRouteQuery = {
  getRoute:  {
    __typename: "Route",
    id: string,
    name: string,
    status: string | null,
    deliveries:  {
      __typename: "ModelDeliveryConnection",
      items:  Array< {
        __typename: "Delivery",
        id: string,
        date: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    accounts:  {
      __typename: "ModelRouteAccountsConnection",
      items:  Array< {
        __typename: "RouteAccounts",
        id: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRoutesQueryVariables = {
  filter?: ModelRouteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoutesQuery = {
  listRoutes:  {
    __typename: "ModelRouteConnection",
    items:  Array< {
      __typename: "Route",
      id: string,
      name: string,
      status: string | null,
      deliveries:  {
        __typename: "ModelDeliveryConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      accounts:  {
        __typename: "ModelRouteAccountsConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncRouteAccountsQueryVariables = {
  filter?: ModelRouteAccountsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRouteAccountsQuery = {
  syncRouteAccounts:  {
    __typename: "ModelRouteAccountsConnection",
    items:  Array< {
      __typename: "RouteAccounts",
      id: string,
      route:  {
        __typename: "Route",
        id: string,
        name: string,
        status: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      account:  {
        __typename: "Account",
        id: string,
        name: string | null,
        lastName: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncAccountsQueryVariables = {
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAccountsQuery = {
  syncAccounts:  {
    __typename: "ModelAccountConnection",
    items:  Array< {
      __typename: "Account",
      id: string,
      name: string | null,
      lastName: string | null,
      routes:  {
        __typename: "ModelRouteAccountsConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetAccountQueryVariables = {
  id: string,
};

export type GetAccountQuery = {
  getAccount:  {
    __typename: "Account",
    id: string,
    name: string | null,
    lastName: string | null,
    routes:  {
      __typename: "ModelRouteAccountsConnection",
      items:  Array< {
        __typename: "RouteAccounts",
        id: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAccountsQueryVariables = {
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccountsQuery = {
  listAccounts:  {
    __typename: "ModelAccountConnection",
    items:  Array< {
      __typename: "Account",
      id: string,
      name: string | null,
      lastName: string | null,
      routes:  {
        __typename: "ModelRouteAccountsConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string | null,
    username: string,
    deliveries:  {
      __typename: "ModelDeliveryUsersConnection",
      items:  Array< {
        __typename: "DeliveryUsers",
        id: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string | null,
    username: string,
    deliveries:  {
      __typename: "ModelDeliveryUsersConnection",
      items:  Array< {
        __typename: "DeliveryUsers",
        id: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string | null,
    username: string,
    deliveries:  {
      __typename: "ModelDeliveryUsersConnection",
      items:  Array< {
        __typename: "DeliveryUsers",
        id: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDeliveryUsersSubscription = {
  onCreateDeliveryUsers:  {
    __typename: "DeliveryUsers",
    id: string,
    user:  {
      __typename: "User",
      id: string | null,
      username: string,
      deliveries:  {
        __typename: "ModelDeliveryUsersConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    delivery:  {
      __typename: "Delivery",
      id: string,
      date: string | null,
      route:  {
        __typename: "Route",
        id: string,
        name: string,
        status: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      users:  {
        __typename: "ModelDeliveryUsersConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDeliveryUsersSubscription = {
  onUpdateDeliveryUsers:  {
    __typename: "DeliveryUsers",
    id: string,
    user:  {
      __typename: "User",
      id: string | null,
      username: string,
      deliveries:  {
        __typename: "ModelDeliveryUsersConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    delivery:  {
      __typename: "Delivery",
      id: string,
      date: string | null,
      route:  {
        __typename: "Route",
        id: string,
        name: string,
        status: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      users:  {
        __typename: "ModelDeliveryUsersConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDeliveryUsersSubscription = {
  onDeleteDeliveryUsers:  {
    __typename: "DeliveryUsers",
    id: string,
    user:  {
      __typename: "User",
      id: string | null,
      username: string,
      deliveries:  {
        __typename: "ModelDeliveryUsersConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    delivery:  {
      __typename: "Delivery",
      id: string,
      date: string | null,
      route:  {
        __typename: "Route",
        id: string,
        name: string,
        status: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      users:  {
        __typename: "ModelDeliveryUsersConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDeliverySubscription = {
  onCreateDelivery:  {
    __typename: "Delivery",
    id: string,
    date: string | null,
    route:  {
      __typename: "Route",
      id: string,
      name: string,
      status: string | null,
      deliveries:  {
        __typename: "ModelDeliveryConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      accounts:  {
        __typename: "ModelRouteAccountsConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    users:  {
      __typename: "ModelDeliveryUsersConnection",
      items:  Array< {
        __typename: "DeliveryUsers",
        id: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDeliverySubscription = {
  onUpdateDelivery:  {
    __typename: "Delivery",
    id: string,
    date: string | null,
    route:  {
      __typename: "Route",
      id: string,
      name: string,
      status: string | null,
      deliveries:  {
        __typename: "ModelDeliveryConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      accounts:  {
        __typename: "ModelRouteAccountsConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    users:  {
      __typename: "ModelDeliveryUsersConnection",
      items:  Array< {
        __typename: "DeliveryUsers",
        id: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDeliverySubscription = {
  onDeleteDelivery:  {
    __typename: "Delivery",
    id: string,
    date: string | null,
    route:  {
      __typename: "Route",
      id: string,
      name: string,
      status: string | null,
      deliveries:  {
        __typename: "ModelDeliveryConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      accounts:  {
        __typename: "ModelRouteAccountsConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    users:  {
      __typename: "ModelDeliveryUsersConnection",
      items:  Array< {
        __typename: "DeliveryUsers",
        id: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRouteSubscription = {
  onCreateRoute:  {
    __typename: "Route",
    id: string,
    name: string,
    status: string | null,
    deliveries:  {
      __typename: "ModelDeliveryConnection",
      items:  Array< {
        __typename: "Delivery",
        id: string,
        date: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    accounts:  {
      __typename: "ModelRouteAccountsConnection",
      items:  Array< {
        __typename: "RouteAccounts",
        id: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRouteSubscription = {
  onUpdateRoute:  {
    __typename: "Route",
    id: string,
    name: string,
    status: string | null,
    deliveries:  {
      __typename: "ModelDeliveryConnection",
      items:  Array< {
        __typename: "Delivery",
        id: string,
        date: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    accounts:  {
      __typename: "ModelRouteAccountsConnection",
      items:  Array< {
        __typename: "RouteAccounts",
        id: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRouteSubscription = {
  onDeleteRoute:  {
    __typename: "Route",
    id: string,
    name: string,
    status: string | null,
    deliveries:  {
      __typename: "ModelDeliveryConnection",
      items:  Array< {
        __typename: "Delivery",
        id: string,
        date: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    accounts:  {
      __typename: "ModelRouteAccountsConnection",
      items:  Array< {
        __typename: "RouteAccounts",
        id: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRouteAccountsSubscription = {
  onCreateRouteAccounts:  {
    __typename: "RouteAccounts",
    id: string,
    route:  {
      __typename: "Route",
      id: string,
      name: string,
      status: string | null,
      deliveries:  {
        __typename: "ModelDeliveryConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      accounts:  {
        __typename: "ModelRouteAccountsConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    account:  {
      __typename: "Account",
      id: string,
      name: string | null,
      lastName: string | null,
      routes:  {
        __typename: "ModelRouteAccountsConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRouteAccountsSubscription = {
  onUpdateRouteAccounts:  {
    __typename: "RouteAccounts",
    id: string,
    route:  {
      __typename: "Route",
      id: string,
      name: string,
      status: string | null,
      deliveries:  {
        __typename: "ModelDeliveryConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      accounts:  {
        __typename: "ModelRouteAccountsConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    account:  {
      __typename: "Account",
      id: string,
      name: string | null,
      lastName: string | null,
      routes:  {
        __typename: "ModelRouteAccountsConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRouteAccountsSubscription = {
  onDeleteRouteAccounts:  {
    __typename: "RouteAccounts",
    id: string,
    route:  {
      __typename: "Route",
      id: string,
      name: string,
      status: string | null,
      deliveries:  {
        __typename: "ModelDeliveryConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      accounts:  {
        __typename: "ModelRouteAccountsConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    account:  {
      __typename: "Account",
      id: string,
      name: string | null,
      lastName: string | null,
      routes:  {
        __typename: "ModelRouteAccountsConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAccountSubscription = {
  onCreateAccount:  {
    __typename: "Account",
    id: string,
    name: string | null,
    lastName: string | null,
    routes:  {
      __typename: "ModelRouteAccountsConnection",
      items:  Array< {
        __typename: "RouteAccounts",
        id: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAccountSubscription = {
  onUpdateAccount:  {
    __typename: "Account",
    id: string,
    name: string | null,
    lastName: string | null,
    routes:  {
      __typename: "ModelRouteAccountsConnection",
      items:  Array< {
        __typename: "RouteAccounts",
        id: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAccountSubscription = {
  onDeleteAccount:  {
    __typename: "Account",
    id: string,
    name: string | null,
    lastName: string | null,
    routes:  {
      __typename: "ModelRouteAccountsConnection",
      items:  Array< {
        __typename: "RouteAccounts",
        id: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
