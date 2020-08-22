import React, { useReducer } from 'react'
import constate from 'constate'
import Delivery from '../models/delivery'

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

type AppState = {
  deliveries: Delivery[]
  nextDelivery: Delivery
  currentDelivery: Delivery
  deliveryUsers: any[]
  deliveryFormData: Delivery
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
    default:
      return state
  }
}

const initialState: AppState = {
  deliveries: [],
  nextDelivery: {},
  currentDelivery: {},
  deliveryUsers: [],
  deliveryFormData: {},
}

const useAppState = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return { ...state, dispatch }
}

const [AppStateProvider, useAppStateContext] = constate(useAppState)

export { AppStateProvider, useAppStateContext }
