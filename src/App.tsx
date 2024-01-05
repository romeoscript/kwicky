

import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Search from './pages/Search'
import Productpage from './pages/Productpage'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/product/:id' element={<Productpage/>} />
      </Routes>
    </>
  )
}

export default App
