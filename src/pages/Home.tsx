import React from 'react'
import { Button } from 'antd'
import { Auth } from 'aws-amplify'

const Home = () => {
    return (<>
        <h1>Home</h1>
        <Button type="primary" onClick={() => Auth.signOut()}>Sign out</Button>
    </>)
}

export default Home