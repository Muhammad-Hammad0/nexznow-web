import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Lists from './pages/Lists'
import Login from './pages/Login'
import Order from './pages/Order'
import Add from './pages/Add'
import { useContext } from 'react'
import { adminDataContext } from './context/AdminContext'

function App() {

  let {adminData} = useContext(adminDataContext)

  return (
    <>
    { !adminData ? <Login /> : <>
    
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
        <Route path='/lists' element={<Lists />} />
        <Route path='/order' element={<Order />} />
        <Route path='/login' element={<Login />} />
      </Routes> </>
      }
    </>
    
  )
}

export default App
