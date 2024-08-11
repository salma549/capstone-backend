import React from 'react'
import AdminRouters from './Routers/AdminRouters'
import {Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path='/admin/*' element={<AdminRouters/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
