import Home from '@pages/Home'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
    </Routes>
  )
}

export default Router
