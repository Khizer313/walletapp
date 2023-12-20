import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/HomePage/Home'



function App() {
  return (
    <>
<Routes>
  <Route exact path="/" Component={Home} />
</Routes>


    </>
  )
}

export default App