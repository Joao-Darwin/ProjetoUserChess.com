import React from 'react'
import { Routes as ReactRoutes, Route } from 'react-router-dom'
import Home from './pages/home/Home'

const Routes = () => {
  return (
    <ReactRoutes>
        <Route path='/' Component={Home}/>
    </ReactRoutes>
  )
}

export default Routes