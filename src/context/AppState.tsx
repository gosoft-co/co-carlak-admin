import React, { useReducer, useCallback, useState } from 'react'
import constate from 'constate'
import Delivery from '../models/delivery'
import { API, graphqlOperation } from 'aws-amplify'
import { listProducts, listRoutes } from '../graphql/queries'
import { ListProductsQuery, ListRoutesQuery } from '../API'
import Route from '../models/route'

export type SubscriptionEvent<D> = {
  value: {
    data: D
  }
}

export type Product = {
  id?: string
  name: string
  description: string
  price: number
  _version?: number
  _deleted?: boolean
}

type Action =
  | {
      type: 'SET_DELIVERY_FORM_DATA'
      payload: { [field: string]: string }
    }
  | {
      type: 'SET_DELIVERIES'
      payload: Delivery[]
    }
  | {
      type: 'SET_DELIVERY_USERS'
      payload: any[]
    }
  | {
      type: 'SET_NEXT_DELIVERY'
      payload: Delivery
    }
  | {
      type: 'CURRENT_DELIVERY'
      payload: Delivery
    }
  | {
      type: 'SET_DELIVERY_PRODUCTS'
      payload: any[]
    }
  | {
      type: 'QUERY_PRODUCTS'
      payload: Product[]
    }
  | {
      type: 'QUERY_ROUTES'
      payload: Route[]
    }
  | {
      type: 'SUBSCRIPTION_PRODUCT'
      payload: Product
    }
  | {
      type: 'SUBSCRIPTION_ROUTE'
      payload: Route
    }
  | {
      type: 'SET_PRODUCT_FORM_DATA'
      payload: { [field: string]: string }
    }
  | {
      type: 'SET_PRODUCT_FORM_EDIT_DATA'
      payload: Product
    }
  | {
      type: 'UPDATE_PRODUCT_ITEM'
      payload: Product
    }
  | {
      type: 'UPDATE_ROUTE_ITEM'
      payload: Route
    }

type AppState = {
  deliveries: Delivery[]
  nextDelivery: Delivery
  currentDelivery: Delivery
  deliveryUsers: any[]
  deliveryProducts: Product[]
  deliveryFormData: Delivery
  products: Product[]
  productsFormData: Product
  routes: Route[]
}

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case 'SET_DELIVERY_FORM_DATA':
      return {
        ...state,
        deliveryFormData: { ...state.deliveryFormData, ...action.payload },
      }
    case 'SET_DELIVERIES':
      return { ...state, deliveries: action.payload }
    case 'SET_DELIVERY_USERS':
      return { ...state, deliveryUsers: action.payload }
    case 'SET_NEXT_DELIVERY':
      return { ...state, nextDelivery: action.payload }
    case 'CURRENT_DELIVERY':
      return { ...state, currentDelivery: action.payload }
    case 'SET_DELIVERY_PRODUCTS':
      return { ...state, deliveryProducts: action.payload }
    case 'QUERY_PRODUCTS':
      return { ...state, products: action.payload }
    case 'QUERY_ROUTES':
      return { ...state, routes: action.payload }
    case 'SUBSCRIPTION_PRODUCT':
      return { ...state, products: [...state.products, action.payload] }
    case 'SUBSCRIPTION_ROUTE':
      return { ...state, routes: [...state.routes, action.payload] }
    case 'SET_PRODUCT_FORM_DATA':
      return {
        ...state,
        productsFormData: { ...state.productsFormData, ...action.payload },
      }
    case 'SET_PRODUCT_FORM_EDIT_DATA':
      return {
        ...state,
        productsFormData: { ...state.productsFormData, ...action.payload },
      }
    case 'UPDATE_PRODUCT_ITEM':
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      }
    case 'UPDATE_ROUTE_ITEM':
      return {
        ...state,
        routes: state.routes.map((route) =>
          route.id === action.payload.id ? action.payload : route
        ),
      }
    default:
      return state
  }
}

const initialState: AppState = {
  deliveries: [],
  nextDelivery: {},
  currentDelivery: {},
  deliveryUsers: [],
  deliveryProducts: [],
  deliveryFormData: {},
  routes: [],
  products: [],
  productsFormData: {
    name: '',
    description: '',
    price: 0,
  },
}

const useAppState = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [stateLoading, setStateLoading] = useState<boolean>(false)

  const getProductList = useCallback(async () => {
    setStateLoading(true)
    const products = (await API.graphql(graphqlOperation(listProducts))) as {
      data: ListProductsQuery
    }
    dispatch({
      type: 'QUERY_PRODUCTS',
      payload: products.data.listProducts?.items as Product[],
    })
    setStateLoading(false)
  }, [dispatch])

  const getRouteList = useCallback(async () => {
    setStateLoading(true)
    const routes = (await API.graphql(graphqlOperation(listRoutes))) as {
      data: ListRoutesQuery
    }
    dispatch({
      type: 'QUERY_ROUTES',
      payload: routes.data.listRoutes?.items as Route[],
    })
    setStateLoading(false)
  }, [dispatch])

  return {
    ...state,
    dispatch,
    stateLoading,
    initialState,
    getProductList,
    getRouteList,
  }
}

const [AppStateProvider, useAppStateContext] = constate(useAppState)

export { AppStateProvider, useAppStateContext }
