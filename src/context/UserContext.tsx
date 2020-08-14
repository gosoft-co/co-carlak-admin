/* eslint-disable react-hooks/exhaustive-deps */
import { useReducer, useCallback, useEffect, useState } from 'react'
import constate from 'constate'
import { Auth, API } from 'aws-amplify'

type METHOD = 'loadUsers'

interface IUser {
  Username: string
  Attributes: any
  UserCreateDate: string
  UserLastModifiedDate: string
  Enabled: boolean
  UserStatus: string
}

interface RESPONSE_STATUS_OBJECT {
  error?: string
  success?: boolean
  loading: boolean
}

type RESPONSE_STATUS = {
  [key in METHOD]: RESPONSE_STATUS_OBJECT
}

export interface UserState {
  loading: boolean
  error?: string
  employees?: IUser[]
  responses: RESPONSE_STATUS
}

export type UserAction =
  | { type: 'SET_LOADING'; loading: boolean; method: METHOD; global?: boolean }
  | {
      type: 'SET_ERROR'
      error: string | undefined
      method: METHOD
      global?: boolean
    }
  | { type: 'SET_EMPLOYEES'; employees: IUser[] }
  | { type: 'SET_SUCCESS'; method: METHOD; success: boolean | undefined }
  | { type: 'RESET_EMPLOYEES' }

const initialState: UserState = {
  loading: false,
  employees: [],
  responses: {
    loadUsers: { loading: false },
  },
}

const reducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case 'SET_LOADING': {
      if (action.global) {
        return { ...state, loading: action.loading }
      }
      return {
        ...state,
        responses: {
          ...state.responses,
          [action.method]: {
            ...state.responses[action.method],
            loading: action.loading,
          },
        },
      }
    }
    case 'SET_ERROR': {
      if (action.global) {
        return { ...state, loading: false, error: action.error }
      }
      return {
        ...state,
        responses: {
          ...state.responses,
          [action.method]: {
            ...state.responses[action.method],
            error: action.error,
          },
        },
      }
    }
    case 'SET_SUCCESS':
      return {
        ...state,
        responses: {
          ...state.responses,
          [action.method]: {
            ...state.responses[action.method],
            success: action.success,
          },
        },
      }
    case 'SET_EMPLOYEES':
      return { ...state, employees: action.employees }
    case 'RESET_EMPLOYEES':
      return { ...state, employees: undefined }
  }
}

const useUser = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  let nextToken: string

  const resetUsersList = useCallback(() => {
    dispatch({ type: 'RESET_EMPLOYEES' })
  }, [dispatch])

  const resetMethod = useCallback(
    (method: METHOD) => {
      dispatch({ type: 'SET_ERROR', error: undefined, method })
      dispatch({ type: 'SET_LOADING', loading: false, method })
      dispatch({ type: 'SET_SUCCESS', success: undefined, method })
      switch (method) {
        case 'loadUsers':
          dispatch({ type: 'RESET_EMPLOYEES' })
          return
        default:
          return
      }
    },
    [dispatch]
  )

  const loadUsers = useCallback(
    async (limit: number, group: string) => {
      const method: METHOD = 'loadUsers'
      dispatch({ type: 'SET_LOADING', loading: true, method })
      dispatch({ type: 'SET_ERROR', error: undefined, method })

      try {
        let apiName = 'AdminQueries'
        let path = '/listUsersInGroup'
        let myInit = {
          queryStringParameters: {
            groupname: group,
            limit: limit,
            token: nextToken,
          },
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${(await Auth.currentSession())
              .getAccessToken()
              .getJwtToken()}`,
          },
        }

        const { NextToken, ...rest } = await API.get(apiName, path, myInit)
        nextToken = NextToken

        dispatch({ type: 'SET_EMPLOYEES', employees: rest.Users })
        dispatch({ type: 'SET_ERROR', error: undefined, method })
        dispatch({ type: 'SET_LOADING', loading: false, method })
      } catch (err) {
        dispatch({ type: 'SET_LOADING', loading: false, method: method })
        dispatch({ type: 'SET_ERROR', error: err.toString(), method: method })
      }
    },
    [dispatch]
  )

  return { ...state, resetUsersList, resetMethod, loadUsers }
}

const [UserProvider, useUserContext] = constate(useUser)

export { UserProvider, useUserContext }
