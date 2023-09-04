import React from 'react'
import { Routes as ReactRoutes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import User from './pages/user/User'

const Routes = () => {
  return (
    <ReactRoutes>
        <Route path='/' Component={Home}/>
        <Route path='/user/:userName' Component={User}/>
    </ReactRoutes>
  )
}

export default Routes