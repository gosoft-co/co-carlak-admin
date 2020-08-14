import React from 'react'
import { Auth, API } from 'aws-amplify'

const UsersPage = () => {
  let nextToken: string

  const listEditors = async (limit: number) => {
    let apiName = 'AdminQueries'
    let path = '/listUsersInGroup'
    let myInit = {
      queryStringParameters: {
        groupname: 'Employees',
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
    return rest
  }

  return (
    <>
      <button onClick={() => listEditors(10)}>List Editors</button>
    </>
  )
}

export default UsersPage
